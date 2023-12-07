<!-- src/App.vue -->
<template>
  <div id="app" class="w-full h-screen flex flex-row">
    <SideNavigation/>
    <DashBoard /> <!-- Include the SideNavigation component here -->
    <router-view />
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue';
import DashBoard from '@/views/DashBoard.vue';

export default {
  name: 'App',
  components:{
    SideNavigation,
    DashBoard,
  }
};
</script>
