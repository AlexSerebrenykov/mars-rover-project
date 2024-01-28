<template>
  <ul class="mx-auto grid grid-cols-1 gap-4">
    <li v-for="photoDetails in photosData" @click="openModalWindow(photoDetails.img_src)">
      <ImageCard :photoDetails="photoDetails"/>
    </li>
    <div ref="scrollingComponent">
      <Spinner v-if="showSpinner"/>
    </div>
  </ul>

</template>


<script>
import axios from "axios";
import { openModal } from "jenesius-vue-modal";
import Modal from "./Modal.vue";
import { handleStatusError } from "../utils/index.js";

const NASA_PHOTOS_API = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
export default {
  data() {
    return {
      photosData: [],
      pageToFetch: 1,
      shouldFetchMore: true,
      showSpinner: true,
    }
  },

  computed: {
    url() {
      return `${NASA_PHOTOS_API}?sol=1000&page=${this.pageToFetch}&api_key=FmcghkDwhYEdeghM4tgl5Z5xdbsPscbqTA32ToNF`
    }
  },
  methods: {
    async fetchData() {
      try {
        this.showSpinner = true
        const response = await axios.get(this.url)
        if(!response || !response?.data || !response?.data?.photos || !response?.data?.photos.length) {
          this.shouldFetchMore = false
          return
        }
        this.photosData = [...this.photosData, ...response.data.photos]
      } catch (e) {
        if(e.request.status) {
          handleStatusError(e.request.status)
          return
        }
        showError({ fatal:true })
      } finally {
        this.showSpinner = false
      }
    },

    scrollTrigger() {
      const observer = new IntersectionObserver( (entries) => {
        entries.forEach( entry => {
          if(entry.intersectionRatio > 0 && this.shouldFetchMore) {
            this.fetchData()
            this.pageToFetch++
          }
        });
      });
      observer.observe(this.$refs.scrollingComponent);
    },

    openModalWindow(imgSrc) {
      openModal(Modal, {imgSrc})
    }
  },

  mounted() {
    this.scrollTrigger()
  }
}

</script>
