<template>
  <div class="modal-image-container">
    <CloseButton :onClose="closeModal"/>
    <img :src="`${imgSrc}`" alt="Curiosity image">
  </div>
</template>

<script setup>
import { closeModal } from "jenesius-vue-modal";
const { imgSrc } = defineProps(['imgSrc'])
</script>

