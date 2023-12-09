
<template>
  <div id="app" class="w-full h-screen flex flex-row bg-white">

    <DashBoard /> 
 
    <router-view />
  </div>
</template>

<script>

import DashBoard from '@/views/DashBoard.vue';


export default {
  name: 'App',
  components:{
  
    DashBoard,
   
  }
};
</script>
