
<template>
  <div class="w-full flex flex-row">
    <MobileNav @toggleSideNavigation="toggleSideNavigation" />
    <SideNavigation
      @changeView="changeView"
      :showSideNavigation="showSideNavigation"
    />
    <div class="lg:w-full w-screen h-screen flex flex-row mt-10 md:mt-0">

      <div class="lg:w-1/6 hidden sm:block sm:w-[100px] md:w-[100px]"></div>

      <div class="lg:w-5/6 sm:w-[90%] w-full">
        <div class="lg:w-[95%] w-full sm:w-full mx-auto lg:p-5 sm:p-5 md:p-5  py-5 lg-py-0 px-2 lg-px-0">

    
          <CustomerView v-show="currentView === 'customers'"/>
        

        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import SideNavigation from "@/components/SideNavigation.vue";

import CustomerView from '@/components/CustomerView.vue';
import MobileNav from '@/components/MobileNav.vue';


export default {
  name: "DashBoard",
  components: {
    SideNavigation,
    CustomerView,
    MobileNav,
  },
  data() {
    return {
      currentView: "dashboard", 
      showSideNavigation: false,
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      this.toggleSideNavigation(); // Close side navigation after selecting a link
    },
    toggleSideNavigation() {
      this.showSideNavigation = !this.showSideNavigation;
    },
  },
};
</script>
  
