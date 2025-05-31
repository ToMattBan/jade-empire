<template>
  <header>
    <div class="header">
      <button class="btn--config" @click="openTokenModal">CONFIGS</button>
      <h1>PROJETO - JADE EMPIRE BR</h1>
      <button class="btn--save" @click="saveTranslation">SALVAR</button>
    </div>

    <div class="list-container list-container--title">
      <div class="list-container--row">
        <h2>ORIGINAL</h2>
        <h2>TRADUZIDO</h2>
      </div>
    </div>
  </header>

  <div v-for="string of xmlList" class="list-container list-container--list"
    :class="string.status === 'pending' && string.translated ? 'other' : string.status">
    <div class="list-container--row">
      <textarea disabled>{{ string.fakeOriginal }}</textarea>
      <textarea v-model="string.translated"></textarea>
    </div>
    <div class="checkTranslated" v-if="string.status === 'revising'">
      <label for="checkTranslated">Marcar como traduzido</label>
      <input name="checkTranslated" id="checkTranslated" type="checkbox" @change="markTranslated(string)" />
    </div>
  </div>

  <button class="next-button" title="Próxima linha" @click="nextString">V</button>

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
import { Octokit } from 'octokit';

interface IUser {
  name: string,
  email: string
  token: string
}

type TStatus = 'revising' | 'translated' | 'pending';

interface IString {
  original: string,
  fakeOriginal: string,
  translated: string,
  status: TStatus,
  revisedNow?: boolean
}

const tokenModal = ref();

const fileSha = ref<string>('');
const xmlList = ref<IString[]>([]);
const userAuth = ref<IUser>({ name: '', email: '', token: '' });

onMounted(async () => {
  await getXML()
})

async function getXML() {
  const githubFileInfo = await fetch('https://api.github.com/repos/Unocroi/Jade_Empire/contents/translatedlDialog.xml');
  const fileInfo = await githubFileInfo.json();
  fileSha.value = fileInfo.sha;

  //const fileRawURL = `https://raw.githubusercontent.com/Unocroi/Jade_Empire/refs/heads/main/translatedlDialog.xml?t=${Date.now()}`;
  const fileRawURL = '/api/mockXml';

  const githubXML = await fetch(fileRawURL);
  let xmlRaw = await githubXML.text();
  xmlRaw = xmlRaw
    .replace('<?xml version="1.0" encoding="utf-8" standalone="yes"?>', '')
    .replace('<tlk language="0">', '')
    .replace('</tlk>', '');

  xmlList.value = xmlRaw.split(/(?<=>)\n/).filter(x => x.trim()).map(string => {
    const status = getXMLStatus(string);

    if (status === 'revising') {
      const firstHalf = getXMLStringContent(string, 'first');
      const secondHalf = getXMLStringContent(string, 'second');
      return {
        original: string,
        fakeOriginal: firstHalf,
        translated: secondHalf,
        status: status
      }
    }

    const fullText = getXMLStringContent(string);
    return {
      original: string,
      fakeOriginal: fullText,
      translated: status === 'pending' ? '' : fullText,
      status: status
    }
  })
}

function getXMLStringContent(string: string, type?: 'first' | 'second'): string {
  const match = string.match(/(?<=>)(.*?)(?=<)/s);
  if (!match) console.warn(`Invalid or missing string content in: "${string}"`);

  if (!match) return string;
  if (!type) return match[0];

  if (type === 'first') {
    const halfMatch = string.match(/(?<=>)(.*?)(?= ___)/s);
    return halfMatch ? halfMatch[0] : match[0]
  }
  if (type === 'second') {
    const halfMatch = string.match(/(?<=___ )(.*?)(?=<)/s);
    return halfMatch ? halfMatch[0] : match[0]
  }

  return string
}

function getXMLStatus(string: string): TStatus {
  const match = string.match(/(?<=status=")(.*?)(?=")/);
  if (!match) {
    console.warn(`Invalid or missing status in string: "${string}"`);
    return 'pending'
  }
  return match[0] as TStatus;
}

function markTranslated(string: IString) {
  string.status = 'translated';
  string.revisedNow = true;
}

async function openTokenModal() {
  await tokenModal.value.open();
}

function saveTranslation() {
  const xmlTranslated = xmlList.value.map(string => {
    if (string.status === 'pending' && string.translated)
      return string.original.replace(/(?<=>)(.*?)(?=<)/, (string.fakeOriginal + " ___ " + string.translated)).replace('pending', 'revising')

    if (string.status === 'translated' && string.revisedNow)
      return string.original.replace(/(?<=>)(.*?)(?=<)/, string.translated).replace('revising', 'translated')

    return string.original
  })

  const joinedXml = xmlTranslated.join('\n').trim();
  const totalXml =
    '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n' +
    '<tlk language="0">\n' + joinedXml + '\n</tlk>';

  commitFile(totalXml);
}

async function commitFile(xml: string) {
  const base64Content = window.btoa(unescape(encodeURIComponent(xml)));

  if (!userAuth.value.token) {
    await openTokenModal();
  }

  const octokit = new Octokit({ auth: userAuth.value.token });
  await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
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
  }).then(response => {
    getXML();
    alert('Conteúdo salvo!')
  }).catch(error => {
    alert('Algo deu errado ao salvar. Tente de novo ou chama a gente no Telegram');
  })
}

function nextString() {
  let nextString = document.querySelector('.revising');
  if (!nextString) nextString = document.querySelector('.pending');
  
  if(nextString) nextString.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
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

  &.other {
    background-color: $other;
  }
}

.next-button {
  position: fixed;
  inset: auto 0 0 auto;
  aspect-ratio: 1/1;
  width: 60px;
  color: white;
  background-color: $other;
  border: solid 3px black;
  border-width: 3px 0 0 3px;
  border-radius: 4px 0 0 0;
  cursor: pointer;
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