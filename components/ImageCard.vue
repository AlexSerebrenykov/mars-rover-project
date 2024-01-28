<template>
  <div class="card">
    <div class="card-image-container">
      <img :src="`${photoDetails.img_src}`" alt="Curiosity image">
    </div>
    <div class="details">
      <h3>Camera name: {{photoDetails.camera.full_name}}</h3>
      <p>Earth date: {{photoDetails.earth_date}}</p>
      <p>Rover name: {{photoDetails.rover.name}}</p>
      <p>Rover landing date: {{photoDetails.rover.landing_date}}</p>
    </div>
  </div>
</template>

<script setup>
const { photoDetails } = defineProps(['photoDetails'])
</script>
