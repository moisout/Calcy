<template>
  <div class="container" :style="{ direction: rtl ? 'rtl' : 'ltr' }" :class="{ dark: dark}">
    <div class="result-panel">
      <div class="actions">
        <ThemeLightDarkIcon @click="dark = !dark" />
        <SwapHorizontalIcon @click="rtl = !rtl" />
      </div>
      <MainInputField />
      <div class="bottom-actions">
        <ResultPreviewField />
        <QuickActions />
      </div>
    </div>
    <div class="numpad-panel" />
  </div>
</template>

<script>
import SwapHorizontalIcon from 'vue-material-design-icons/SwapHorizontal'
import ThemeLightDarkIcon from 'vue-material-design-icons/ThemeLightDark'
import MainInputField from '~/components/MainInputField'
import ResultPreviewField from '~/components/ResultPreviewField'
import QuickActions from '~/components/QuickActions'

export default {
  components: {
    SwapHorizontalIcon,
    ThemeLightDarkIcon,
    MainInputField,
    ResultPreviewField,
    QuickActions
  },
  data: () => ({
    rtl: false,
    dark: false
  })
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: $text-color;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: $bgcolor;

  .result-panel {
    width: 100%;
    display: flex;
    flex-direction: column;

    .bottom-actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 80px;
      position: relative;
    }

    .actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 80px;

      span {
        margin: auto 22px;
        width: 36px;
        height: 36px;
        color: $theme-color;
        @include clickable();
      }
    }
  }
  .numpad-panel {
    background-color: $bgcolor-alt;
    width: 100%;
    flex-grow: 2.5;
    box-shadow: 0 60px 100px 0 $theme-color;
  }
}
</style>
