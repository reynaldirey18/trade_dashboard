<template>
  <div v-bind:class="{'blurModal':$store.state.bodyModal}">
    <div v-bind:class="{'backdrop-modal':$store.state.bodyModal}"></div>
    <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
      <SideBarhead
      class="absolute"
        style="width:240px" />
      <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
        <div id="content-overlay"></div>

        <div class="content-wrapper">
          <the-navbar
            :navbarColor="navbarColor"
            :class="[{'text-white': isNavbarDark && !isThemeDark}, {'text-base': !isNavbarDark && isThemeDark}]"
          />
          <span class="d-block w-full mt-20"></span>
          <div class="router-view">
            <div class="router-content" :class="{'mt-0': navbarType == 'hidden'}">
              <transition :name="routerTransition">
                <div
                  class="router-header flex flex-wrap items-center mb-6"
                  v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
                >
                  <div
                    class="content-area__heading"
                    :class="{'pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light' : $route.meta.breadcrumb}"
                  >
                    <h2 class="mb-1">{{ routeTitle }}</h2>
                  </div>
                  <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" />
                </div>
              </transition>
              <div class="content-area__content">
                <transition :name="routerTransition" mode="out-in">
                  <router-view @changeRouteTitle="changeRouteTitle"></router-view>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <the-footer></the-footer>
      </div>
    </div>
  </div>
</template>

<script>
// import TheSidebar from '../components/SideBar.vue';
// import { SidebarMenu } from 'vue-sidebar-menu'
// import TheNavbar from '../components/TheNavbar.vue'
// import TheFooter from '../components/TheFooter.vue'
import SideBarhead from '@/layouts/vx-slidebar/vx-slideBar.vue'
// import themeConfig from '@/../themeConfig.js'
// import sidebarItems from "@/layouts/components/SideBar.js";

export default {
  data () {
    return {
    }
  },

  watch: {
  },
  computed: {
  },
  methods: {
  },
  created () {
    // this.setSidebarWidth()
    // if (this.navbarColor == '#fff' && this.isThemeDark) {
    //   this.updateNavbarColor('#10163a')
    // } else {
    //   this.updateNavbarColor(this.navbarColor)
    // }
  },
  components: {
    // SidebarMenu,
    // TheNavbar,
    // TheFooter,
    SideBarhead
  }
}
</script>

<style lang="scss">

</style>
