<template>
  <div class="modal" :class="{ 'active': modalActive }" id="modalDemonstracao">
    <div class="background" @click="close"></div>

    <div class="modal-container">
      <div class="modal-content">
        <slot></slot>
      </div>

      <div class="modal-footer _mla _df">
        <button class="btn--deny" @click="close">Cancelar</button>
        <button class="btn--confirm" @click="continuePromise">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modalActive = ref<boolean>(false);
const promiseResult = ref();

function open() {
  modalActive.value = true;

  return new Promise((res) => {
    promiseResult.value = res;
  });
};

function close() {
  modalActive.value = false;
};

const continuePromise = () => {
  promiseResult.value();
  close();
};

defineExpose({
  open
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  display: flex;
  height: 0;
  width: 0;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.3s;

  &.active {
    height: 100vh;
    width: 100vw;
  }

  .background {
    background: black;
    width: 100%;
    height: 100%;
    opacity: 30%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    transition: all 0.4s ease;
  }

  .modal-container {
    position: relative;
    background: white;
    border-radius: 5px;
    width: 70%;
    max-width: 600px;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 1;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.28);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.28);

    .modal-footer {
      margin-left: auto;
      display: flex;
      justify-content: end;
      gap: 16px;

      button {
        font: inherit;
        cursor: pointer;
        padding: 8px 32px;
        text-transform: uppercase;
        border: 0;
        border-radius: 4px;
        color: white;
        transition: all .2s ease;

        &.btn--deny {
          background-color: #f44336;
        }
        &.btn--confirm {
          background-color: #4caf50;
        }

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }
}
</style>