<template>
  <div class="massengers">
    <div class="massenger__window">
      <WindowHeader :src="'alex'" :name="'Александр'" :status="'Онлайн'" />
      <WindowBody :sendId="2" :message="message"/>
      <WindowFooter :sendId="2" @new-mess="newMess"/>
    </div>
    <div class="massenger__window">
      <WindowHeader :src="'evgn'" :name="'Евгений'" :status="'Онлайн'" />
      <WindowBody :sendId="1" :message="message"/>
      <WindowFooter :sendId="1" @new-mess="newMess"/>
    </div>
  </div>
</template>

<script>

import WindowHeader from '@/components/WindowHeader.vue';
import WindowBody from '@/components/WindowBody.vue';
import WindowFooter from '@/components/WindowFooter.vue';
export default {
  components: {
    WindowHeader,
    WindowBody,
    WindowFooter
  },


  data() {
    return {
      message: []
    };
  },

  created() {
    const messStorage = localStorage.message ? JSON.parse(localStorage.message) : [];
    this.message = messStorage
  },

  methods: {
    newMess(mess) {
      this.message.push(mess)
      localStorage.message = JSON.stringify(this.message)
    }
  }

}
</script>

<style lang="scss" scoped></style>