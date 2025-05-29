<template>
  <div v-for="(x, index) of xmlList" class="list-container">
    <textarea>{{ showXMLStringContent(xmlList[index]) }}</textarea>
    <textarea>{{ translatedList[index] }}</textarea>
  </div>
</template>

<script setup lang="ts">
const xmlList = ref<string[]>([]);
const translatedList = ref<string[]>([]);

onMounted(async () => {
  await getXML()
})

async function getXML() {
  //const githubXML = await fetch('https://raw.githubusercontent.com/Unocroi/Jade_Empire/refs/heads/main/translatedlDialog.xml');
  const githubXML = await fetch('/api/mockXml');
  let xmlRaw = await githubXML.text();
  xmlRaw = xmlRaw
    .replace('<?xml version="1.0" encoding="utf-8" standalone="yes"?>', '')
    .replace('<tlk language="0">', '')
    .replace('</tlk>', '')

  xmlList.value = xmlRaw.split(/(?<=>)\n/).filter(x => x.trim());
  translatedList.value = Array(xmlList.value.length).fill(null);
}

function showXMLStringContent(string: string) {
  const match = string.match(/(?<=>)(.*?)(?=<)/s);
  if (!match) console.log(string, match)
  return match ? match[0] : string;
}
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  
  > textarea {
    flex: 50%;
  }
}
</style>