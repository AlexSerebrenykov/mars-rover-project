<template>
  <div class="error-container">
    <h1>Ooops...</h1>
    <p>An error {{props.error.message}} occurred</p>
    <div class="error-buttons-container">
      <button class="default-button" @click="goHome">Go Home</button>
      <button class="default-button" @click="refresh">Refresh</button>
    </div>

  </div>
</template>


<script setup>
const router = useRouter();
const props = defineProps({
  error: Object
})
const goHome = () => {
  router.push({name: 'index'})
}

const refresh = () => {
  router.go()
}
</script>
