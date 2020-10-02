<template>
  <div class="sidebar" :class="{ active: isSidebarActive }">
    <div class="sidebar-top">
      <b-link class="hamburger_btn" @click="onClickMenu">
        <span class="line line_01" v-bind:class="{'btn_line01': isSidebarActive}"></span>
        <span class="line line_02" v-bind:class="{'btn_line02': isSidebarActive}"></span>
        <span class="line line_03" v-bind:class="{'btn_line03': isSidebarActive}"></span>
      </b-link>
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

  computed: {
    isSidebarActive() {
      return this.$store.state.isSidebarActive
    },
  },

  methods: {
    onClickMenu() {
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
.hamburger_btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 66px;
  height: 72px;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #333333;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 10px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 20px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 30px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

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