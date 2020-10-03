<template>
<div>
  <main class="main-content" :class="{ shrunked: isSidebarActive }">
    <sidebar />
    <header class="text-right mr-3">
      user name
    </header>
    <router-view />
  </main>
</div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'MainContainer',

  components: {
    Sidebar,
  },

  computed: {
    isSidebarActive() {
      return this.$store.state.isSidebarActive
    },
  },
}
</script>

<style scoped>
.main-content {
  padding-left: 60px;
  transition: padding-left 0.2s;
}
.shrunked {
  padding-left: 180px;
}
</style>
 