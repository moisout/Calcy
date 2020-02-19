<template>
  <div class="input-field">
    <span type="text" class="main-input-field">{{ $store.state.calculationString }}</span>
  </div>
</template>

<script>
export default {
  mounted () {
    document.addEventListener('keydown', this.onInput)
  },
  methods: {
    onInput (e) {
      e.preventDefault()
      if (e.key.match(new RegExp('^[0-9+-/*//.,]{1}$'))) {
        this.$store.commit('addCharacter', e.key)
      } else if (e.key === 'Backspace') {
        this.$store.commit('removeCharacter', e.key)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  height: 120px;

  .main-input-field {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    color: $text-color;
    caret-color: $theme-color;
    padding: 0 22px;
  }
}
</style>
