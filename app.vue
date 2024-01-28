<template>
  <Header/>
  <NuxtPage/>
  <widget-container-modal class="test" />
</template>

<script>
import { container } from "jenesius-vue-modal";

export default {
  components: {WidgetContainerModal: container},
}
</script>
