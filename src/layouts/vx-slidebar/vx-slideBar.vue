<template lang="html">

  <div ref="parentSidebar" id="parentx">

    <!-- <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button> -->
    <vs-sidebar :parent="$refs.parentSidebar" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-slidebar w-full float-left">
        <img class="img-1" src="@/assets/images/logo/logoNav.svg" alt />
        <img class="img-2" src="@/assets/images/sidebar/menu_open.png" alt />
      </div>
      <vx-row>
        <vs-col class="item-menu mt-3">
          <span>Dashbord</span>
        </vs-col>
        <vs-col class="item-menu-title pt-10">
          <span>Main Menu</span>
        </vs-col>
        <vs-col>
        </vs-col>
      </vx-row>
    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data: () => ({
    active: true
  })
}
</script>
<style scoped>

</style>
