<template>
  <div class="quick-actions">
    <span>
      <CopyIcon />
    </span>
    <span>
      <PasteIcon />
    </span>
  </div>
</template>

<script>
import CopyIcon from 'vue-material-design-icons/ContentCopy'
import PasteIcon from 'vue-material-design-icons/ContentPaste'

export default {
  components: {
    CopyIcon,
    PasteIcon
  }
}
</script>

<style lang="scss" scoped>
.quick-actions {
  position: absolute;
  right: 0;
  height: 60px;
  margin: auto;
  background: $main-gradient;
}
</style>
