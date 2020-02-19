<template>
  <div class="result-field">
    <span type="text" class="result-preview-field">{{ $store.state.resultString }}</span>
  </div>
</template>

<style lang="scss" scoped>
.input-field {
  height: 80px;

  .main-input-field {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
    color: $text-color;
    caret-color: $text-color-alt;
  }
}
</style>
