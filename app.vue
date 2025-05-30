<template>
  <header>
    <div class="header">
      <button class="btn--config" @click="openTokenModal">CONFIGS</button>
      <h1>PROJETO - JADE EMPIRE BR</h1>
      <button class="btn--save" @click="saveTranslation">SALVAR</button>
    </div>

    <div class="list-container list-container--title">
      <h2>ORIGINAL</h2>
      <h2>TRADUZIDO</h2>
    </div>
  </header>

  <div v-for="(x, index) of xmlList" class="list-container list-container--list">
    <textarea disabled>{{ showXMLStringContent(xmlList[index]) }}</textarea>
    <textarea v-model="translatedList[index]">a</textarea>
  </div>

  <AsyncModal ref="tokenModal">
    <div class="githubForm">
      <h2>Preencha os dados abaixo</h2>
      <p>Faça com calma, não vou validar nenhum dado!</p>

      <div class="data-container">
        <label for="username">Username</label>
        <input name="username" v-model="userAuth.name" />
      </div>

      <div class="data-container">
        <label for="email">Email</label>
        <input name="email" type="email" v-model="userAuth.email" />
      </div>

      <div class="data-container">
        <label for="token">Github Token</label>
        <input name="token" v-model="userAuth.token" />
      </div>
    </div>
  </AsyncModal>
</template>

<script setup lang="ts">
import { Octokit } from 'octokit';

interface IUser {
  name: string,
  email: string
  token: string
}

const tokenModal = ref();

const fileSha = ref<string>('');
const xmlList = ref<string[]>([]);
const translatedList = ref<string[]>([]);
const userAuth = ref<IUser>({ name: '', email: '', token: '' });

onMounted(async () => {
  await getXML()
})

async function getXML() {
  const githubFileInfo = await fetch('https://api.github.com/repos/Unocroi/Jade_Empire/contents/translatedlDialog.xml');
  const fileInfo = await githubFileInfo.json();
  fileSha.value = fileInfo.sha;

  //const fileRawURL = fileInfo.download_url;
  const fileRawURL = '/api/mockXml';

  const githubXML = await fetch(fileRawURL);
  let xmlRaw = await githubXML.text();
  xmlRaw = xmlRaw
    .replace('<?xml version="1.0" encoding="utf-8" standalone="yes"?>', '')
    .replace('<tlk language="0">', '')
    .replace('</tlk>', '');

  xmlList.value = xmlRaw.split(/(?<=>)\n/).filter(x => x.trim());
  translatedList.value = Array(xmlList.value.length).fill(null);
}

function showXMLStringContent(string: string) {
  const match = string.match(/(?<=>)(.*?)(?=<)/s);
  if (!match) console.log(string, match)
  return match ? match[0] : string;
}

async function openTokenModal() {
  await tokenModal.value.open();
}

function saveTranslation() {
  const xmlTranslated = xmlList.value.map((string, index) => {
    if (translatedList.value[index])
      return string.replace(/(?<=>)(.*?)(?=<)/, translatedList.value[index]);
    else
      return string;
  })

  const joinedXml = xmlTranslated.join('\n').trim();
  const totalXml =
    '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n' +
    '<tlk language="0">\n' + joinedXml + '\n</tlk>';

  commitFile(totalXml);
}

async function commitFile(xml: string) {
  const base64Content = btoa(xml);

  if (!userAuth.value.token) {
    await openTokenModal();
  }

  const octokit = new Octokit({ auth: userAuth.value.token });
  const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: 'Unocroi',
    repo: 'Jade_Empire',
    path: 'translatedlDialog.xml',
    message: 'Atualizando tradução',
    committer: {
      name: userAuth.value.name,
      email: userAuth.value.email
    },
    content: base64Content,
    sha: fileSha.value,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  if (response.status === 200) alert('Conteúdo salvo!')
  else alert('Algo deu errado ao salvar. Tente de novo ou chama a gente no Telegram');
}
</script>

<style lang="scss" scoped>
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
        background-color: #14468b;
      }

      &.btn--save {
        right: 0;
        background-color: #4caf50;
      }

      &:hover {
        filter: brightness(1.5);
      }
    }
  }
}

.list-container {
  display: flex;
  gap: 4px;
  margin-top: 8px;

  >* {
    flex: 50%;
  }

  >h2 {
    text-align: center;
    margin: 8px;
  }

  &--list {
    textarea:disabled {
      color: rgb(0, 0, 0);
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