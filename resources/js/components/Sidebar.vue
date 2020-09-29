<template>
  <div class="sidebar" :class="{ active: isSidebarActive }">
    <div class="sidebar-top">
    <div class="sidebar-menu">
      <b-link @click="onClickMenu">
      <img class="sidebar-icon" src="/images/sidebar/menu.png">
      </b-link>
    </div>
    </div>
    <ul class="sidebar-list">
      <li class="sidebar-item">
        <b-link to="#" class="sidebar-link" :class="{ active: isSidebarActive }"><img class="sidebar-icon" :class="{ active: isSidebarActive }" src="/images/sidebar/home.png">
        <span class="sidebar-text" v-show="isSidebarActive">ホーム</span></b-link>
      </li>
      <li class="sidebar-item">
        <b-link to="#" class="sidebar-link"><img class="sidebar-icon" :class="{ active: isSidebarActive }" src="/images/sidebar/post.png">
        <span class="sidebar-text" v-show="isSidebarActive">投稿</span></b-link>
      </li>
      <li class="sidebar-item">
        <b-link to="#" class="sidebar-link"><img class="sidebar-icon" :class="{ active: isSidebarActive }" src="/images/sidebar/coment.png">
        <span class="sidebar-text" v-show="isSidebarActive">コメント</span></b-link>
      </li>
      <li class="sidebar-item">
        <b-link to="#" class="sidebar-link"><img class="sidebar-icon" :class="{ active: isSidebarActive }" src="/images/sidebar/news.png">
        <span class="sidebar-text" v-show="isSidebarActive">ニュース</span></b-link>
      </li>
      <li class="sidebar-item">
        <b-link to="#" class="sidebar-link"><img class="sidebar-icon" :class="{ active: isSidebarActive }" src="/images/sidebar/setting.png">
        <span class="sidebar-text" v-show="isSidebarActive">設定</span></b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  data() {
    return{
      isSidebarActive: false,
    }
  },

  methods: {
    onClickMenu() {
      this.isSidebarActive = !this.isSidebarActive
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #868686;
  width: 60px;
  transition: width 0.2s;
}

.sidebar.active {
  width: 180px;
}

.sidebar-top {
  height: 50px;
}

.sidebar-menu {
  position: absolute;
  top:10px;
  right: 15px;
  width: 30px;
}

.sidebar-icon {
  width: 30px;
}

.sidebar-list {
  padding: 5px 10px;
  white-space: nowrap;
}

.sidebar-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.sidebar-item {
  list-style: none;
  padding: 8px 5px;
}

.sidebar-text {
  margin-left: 10px;
  color: white;
  font-size: 1.2rem;
}
</style>