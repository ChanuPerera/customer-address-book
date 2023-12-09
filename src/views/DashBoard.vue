
<template>
  <div class="w-full flex flex-row">
    <SideNavigation @changeView="changeView"/>
    <div class="w-full h-screen flex flex-row ">

      <div class="w-1/6"></div>

      <div class="w-5/6">
        <div class="w-[95%] mx-auto p-5  ">

    
          <CustomerView v-show="currentView === 'customers'"/>
        

        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import SideNavigation from "@/components/SideNavigation.vue";

import CustomerView from '@/components/CustomerView.vue';


export default {
  name: "DashBoard",
  components: {
    SideNavigation,
    CustomerView,
    
  },
  data() {
    return {
      currentView: "dashboard", 
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view; 
    },
  },
};
</script>
  
