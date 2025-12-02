<template>
  <header>
    <div class="header">
      <button class="btn--config" @click="downloadXML">DOWNLOAD</button>
      <h1>PROJETO - JADE EMPIRE BR</h1>
      <!-- <button class="btn--save" @click="">SALVAR</button> -->
    </div>

    <div class="search">
      <span>BUSCA: </span>
      <input v-model="searchTerm" class="search-input" />
      <div class="filter-container">
        <button class="filter-button" title="Abrir filtro" @click="isFilterOpen = !isFilterOpen">Filtro</button>
        <div class="filter-box" :class="{'isOpen': isFilterOpen}">
          <ul>
            <li>
              <input type="checkbox" v-model="filters.translated" id="translated" @change="" />
              <label for="translated">Mostrar Traduzidas</label>
            </li>
            <li>
              <input type="checkbox" v-model="filters.revising" id="revising" @change="" />
              <label for="revising">Mostrar Em Revisão</label>
            </li>
            <li>
              <input type="checkbox" v-model="filters.pending" id="pending" @change="" />
              <label for="pending">Mostrar Pendentes</label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="list-container list-container--title">
      <div class="list-container--row">
        <h2 @click="sortList('original')">ORIGINAL <span v-if="sortBy === 'original'">*</span></h2>
        <h2 @click="sortList('traduzido')">TRADUZIDO <span v-if="sortBy === 'traduzido'">*</span></h2>
      </div>
    </div>
  </header>

  <div v-if="isLoading" class="isLoading">
    <span>Carregando o XML</span>
    <span>Isso pode levar um tempinho...</span>
  </div>

  <div class="content">
    <div v-for="string of filteredList()" class="list-container list-container--list"
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
    <div class="pagination">
      <button class="next-page" @click="page = page - 1" :class="{ 'show-btn': true }">PÁGINA ANTERIOR</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button class="prev-page" @click="page = page + 1" :class="{ 'show-btn': true }">PRÓXIMA PÁGINA</button>
    </div>

    <div class="bottom-footer">
      <div class="progress-bar--container">
        <div class="progress-bar progress-bar--pending" :style="{ 'width': `${pendingPercentage}%` }"
          :title="pendingPercentage.toFixed(2) + '%'">
          {{ pendingPercentage.toFixed(2) }}%
        </div>

        <div class="progress-bar progress-bar--revising" :style="{ 'width': `${revisingPercentage}%` }"
          :title="revisingPercentage.toFixed(2) + '%'">
          {{ revisingPercentage.toFixed(2) }}%
        </div>

        <div class="progress-bar progress-bar--translated" :style="{ 'width': `${translatedPercentage}%` }"
          :title="translatedPercentage.toFixed(2) + '%'">
          {{ translatedPercentage.toFixed(2) }}%
        </div>
      </div>
      <button class="next-button" title="Próxima linha" @click="nextString">↓</button>
    </div>
  </footer>
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
const page = ref<number>(1);

const searchTerm = ref<string>('');
const sortBy = ref<'original' | 'traduzido' | null>(null);
const isFilterOpen = ref<boolean>(false);
const filters = reactive<{[K in TStatus]: boolean}>({
  changedNow: true,
  pending: true,
  revising: true,
  translated: true
});

const xmlList = ref<IString[]>([]);

let totalPages = 1;
let paginationSize = 1000;

onMounted(async () => {
  if (window && window.innerWidth <= 700) paginationSize = 500;

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

  totalPages = xmlList.value.length / paginationSize + 1
  totalPages = Math.floor(totalPages);

  isLoading.value = false;
}

function changeStatus(string: IString, status: TStatus) {
  const fakeString = { ...string }

  if (status !== 'translated') {
    if (string.newTranslation === string.translated) return;
    string.changedNow = true;
  }

  string.translated = string.newTranslation || string.translated;
  string.status = status;
  saveString(string, fakeString);
}

async function saveString(string: IString, fakeString: IString) {
  try {
    await $fetch('/api/saveString', {
      method: "POST",
      body: string
    })
  } catch (e) {
    console.error('Não deu pra salvar essa string!!');

    const realString = xmlList.value.find(string => string._id === fakeString._id);
    if (!realString) return;

    realString._id = fakeString._id;
    realString.changedNow = false;
    realString.status = fakeString.status;
    realString.translated = fakeString.translated;
  }
}

async function downloadXML() {
  await getXML();

  const xmlTranslated = xmlList.value.map(string => {
    let stringAttrs = `id="${string._id}"`;
    if (string.soundid) stringAttrs = stringAttrs + `soundid="${string.soundid}"`;

    return `<string ${stringAttrs}>${string.translated || string.original}</string>`
  })

  const joinedXml = xmlTranslated.join('\n').trim();
  const totalXml =
    '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n' +
    '<tlk language="0">\n' + joinedXml + '\n</tlk>';

  const blob = new Blob([totalXml], { type: 'text/xml' });

  const a = document.createElement('a');
  a.download = 'translatedlDialog.xml';
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/xml', a.download, a.href].join(':');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
}

function sortList(type: 'original' | 'traduzido') {
  if (sortBy.value === type) sortBy.value = null
  else sortBy.value = type;
}

function filteredList() {
  let filtered = xmlList.value;
  
  if (searchTerm.value) {
    filtered = xmlList.value.filter(string => string.original && string.original.toLowerCase().includes(searchTerm.value.toLowerCase()));
  }

  const statusNotToShow = (Object.keys(filters) as TStatus[]).filter(key => filters[key] === false);
  if (statusNotToShow.length > 0) {
    filtered = filtered.filter(string => !statusNotToShow.includes(string.status));
  }

  if (sortBy.value) {
    filtered = filtered.sort((a, b) => {
      if (sortBy.value === 'original') return a.original.localeCompare(b.original)
      return a.translated.localeCompare(b.translated)
    })
  }

  totalPages = filtered.length / paginationSize + 1
  totalPages = Math.floor(totalPages);

  return filtered.slice((page.value - 1) * paginationSize, page.value * paginationSize)
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

  .search {
    display: flex;
    align-items: center;
    gap: 8px;

    .search-input {
      border-radius: 4px;
      width: 100%;
      padding: 4px 8px;
    }

    .filter-container {
      position: relative;

      button {
        background-color: $other;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 5px 10px;
        text-transform: uppercase;
      }

      .filter-box {
        position: absolute;
        right: 0;
        transform: translateY(5px);
        width: 200px;
        background-color: white;
        border: solid 3px black;
        border-radius: 4px;
        display: none;

        &.isOpen {
          display: block;
        }

        ul {
          margin: 0;
          padding: 8px 4px;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;

          label {
            margin-left: 4px;
          }
        }
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

.content {
  padding-bottom: 85px;
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
      cursor: pointer;
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
  width: 100%;

  .pagination {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 4px;
    border-top: solid 3px black;

    button {
      opacity: 0;
      background-color: $other;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &.show-btn {
        opacity: 1;
      }
    }
  }

  .bottom-footer {
    height: 60px;
    display: flex;
    width: 100%;

    .progress-bar--container {
      width: 100%;
      display: flex;

      .progress-bar {
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

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