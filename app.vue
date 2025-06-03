<template>
  <header>
    <div class="header">
      <!-- <button class="btn--config" @click="openTokenModal">CONFIGS</button> -->
      <h1>PROJETO - JADE EMPIRE BR</h1>
      <!-- <button class="btn--save" @click="">SALVAR</button> -->
    </div>

    <div class="list-container list-container--title">
      <div class="list-container--row">
        <h2>ORIGINAL</h2>
        <h2>TRADUZIDO</h2>
      </div>
    </div>
  </header>

  <div v-if="isLoading" class="isLoading">
    <span>Carregando o XML</span>
    <span>Isso pode levar um tempinho...</span>
  </div>

  <div>
    <div v-for="string of xmlList" class="list-container list-container--list"
      :class="string.changedNow ? 'changedNow' : string.status">
      <div class="list-container--row">
        <textarea disabled>{{ string.original }}</textarea>
        <textarea v-model="string.newTranslation" @blur="changeStatus(string, 'revising')"></textarea>
      </div>
      <div class="checkTranslated" v-if="string.status === 'revising' && !string.changedNow">
        <label :for="`checkTranslated-${string._id}`">Marcar como traduzido</label>
        <input :name="`checkTranslated-${string._id}`" :id="`checkTranslated-${string._id}`" type="checkbox"
          @change="changeStatus(string, 'translated')" />
      </div>
    </div>
  </div>

  <footer>
    <div class="progress-bar--container">
      <div class="progress-bar progress-bar--pending" :style="{ 'width': `${pendingPercentage}%` }"></div>
      <div class="progress-bar progress-bar--revising" :style="{ 'width': `${revisingPercentage}%` }"></div>
      <div class="progress-bar progress-bar--translated" :style="{ 'width': `${translatedPercentage}%` }"></div>
    </div>
    <button class="next-button" title="Próxima linha" @click="nextString">↓</button>
  </footer>

  <AsyncModal ref="tokenModal">
    <div class="githubForm">
      <h2>Preencha os dados abaixo</h2>
      <p>Faça com calma, não vou validar nenhum dado!</p>

      <div class="data-container">
        <label for="username">Username</label>
        <input name="username" id="username" v-model="userAuth.name" />
      </div>

      <div class="data-container">
        <label for="email">Email</label>
        <input name="email" id="email" type="email" v-model="userAuth.email" />
      </div>

      <div class="data-container">
        <label for="token">Github Token</label>
        <input name="token" id="token" v-model="userAuth.token" />
      </div>
    </div>
  </AsyncModal>
</template>

<script setup lang="ts">
import type { IString, IUser, TStatus } from './interfaces/interfaces';

useHead({
  title: "PROJETO - JADE EMPIRE BR"
})

const tokenModal = ref();

const pendingPercentage = ref<number>(0);
const revisingPercentage = ref<number>(0);
const translatedPercentage = ref<number>(0);

const isLoading = ref<boolean>(false);
const xmlList = ref<IString[]>();
const userAuth = ref<IUser>({ name: '', email: '', token: '' });

let stringSalvaErrorCount = 0;

onMounted(async () => {
  userAuth.value.token = sessionStorage.getItem('token') ?? '';
  userAuth.value.email = sessionStorage.getItem('email') ?? '';
  userAuth.value.name = sessionStorage.getItem('name') ?? '';

  getPercentageCount();
  await getXML();
})

async function getPercentageCount() {
  if (pendingPercentage.value != 0) return;

  const percentages = await $fetch('/api/getPercentage', { method: "GET" });
  if (!percentages) return;

  revisingPercentage.value = percentages.revising;
  translatedPercentage.value = percentages.translated;
  pendingPercentage.value = percentages.pending;
}

async function getXML() {
  isLoading.value = true;

  const allStrings = await $fetch(`/api/getStrings`, { method: "GET" });
  //const allStrings = await $fetch(`/api/mockXml`, { method: "GET" });
  if (!allStrings) return;

  xmlList.value = allStrings.map(string => {
    return {
      ...string,
      newTranslation: string.translated
    }
  });

  isLoading.value = false;
}

function changeStatus(string: IString, status: TStatus) {
  const fakeString = { ...string }

  if (status !== 'translated') {
    if (string.newTranslation === string.translated) return;
    string.changedNow = true;
  }

  string.status = status;
  saveString(string, fakeString);
}

async function saveString(string: IString, fakeString: IString) {
  const res = await $fetch('/api/saveString', {
    method: "POST",
    body: string
  })

  if (res.status !== 200) {
    console.error('Não deu pra salvar essa string!!');
    string = fakeString;
  }
}

async function openTokenModal() {
  await tokenModal.value.open().then(() => {
    sessionStorage.setItem('token', userAuth.value.token);
    sessionStorage.setItem('email', userAuth.value.email);
    sessionStorage.setItem('name', userAuth.value.name);
  });
}

function nextString() {
  let nextString = document.querySelector('.revising');
  if (!nextString) nextString = document.querySelector('.pending');

  if (nextString) nextString.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
}
</script>

<style lang="scss" scoped>
// SETTING COLORS VARS
$translated: #4caf50;
$revising: #eaea13;
$pending: #f44336;
$other: #14468b;

* {
  scroll-behavior: smooth;
}

header {
  position: sticky;
  top: 0px;
  background-color: white;
  border-bottom: solid 3px black;

  .header {
    position: relative;
    margin: 12px 0;
    text-align: center;

    h1 {
      margin: 0;
    }

    button {
      position: absolute;
      top: 4px;
      height: calc(100% - 8px);
      width: 150px;

      font: inherit;
      cursor: pointer;
      padding: 8px 32px;
      text-transform: uppercase;
      border: 0;
      border-radius: 4px;
      color: white;
      transition: all .2s ease;

      &.btn--config {
        left: 0;
        background-color: $other;
      }

      &.btn--save {
        right: 0;
        background-color: $translated;
      }

      &:hover {
        filter: brightness(1.5);
      }
    }
  }
}

.isLoading {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 24px;
  color: white;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.list-container {
  padding-top: 4px;
  padding-bottom: 4px;

  .list-container--row {
    display: flex;
    gap: 4px;
    text-align: center;

    >* {
      flex: 1;
    }

    h2 {
      margin: 8px;
    }

    textarea:disabled {
      color: rgb(0, 0, 0);
    }
  }

  .checkTranslated {
    text-align: right;
    font-size: 12px;
    padding-bottom: 8px;

    * {
      cursor: pointer;
    }
  }


  &.translated {
    background-color: $translated;
  }

  &.revising {
    background-color: $revising;
  }

  &.pending {
    background-color: $pending;
  }

  &.changedNow {
    background-color: $other;
  }
}

footer {
  position: fixed;
  inset: auto 0 0 auto;
  height: 60px;
  display: flex;
  width: 100%;

  .progress-bar--container {
    width: 100%;
    display: flex;

    .progress-bar {
      height: 100%;

      &--pending {
        background-color: $pending;
      }

      &--revising {
        background-color: $revising;
      }

      &--translated {
        background-color: $translated;
      }
    }
  }

  .next-button {
    aspect-ratio: 1/1;
    height: 100%;
    color: white;
    font-size: 20px;
    background-color: $other;
    border: solid 3px black;
    border-width: 3px 0 0 3px;
    cursor: pointer;
  }
}

.githubForm {
  margin-bottom: 24px;

  h2 {
    margin: 0;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    margin: 12px 0;

    input {
      padding: 6px 8px;
      font-size: 12px;
      font-family: monospace;
      border-radius: 4px;
    }
  }
}
</style>