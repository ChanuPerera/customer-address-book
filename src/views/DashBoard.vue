
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

          
          <DashBoardView v-show="currentView === 'dashboard'"/>
          <CustomerView v-show="currentView === 'customers'"/>
          <ProductView v-show="currentView === 'products'"/>
          <PromoteView v-show="currentView === 'promote'"/>
          <IncomeView v-show="currentView === 'income'"/>
          <HelpView v-show="currentView === 'help'"/>


        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import SideNavigation from "@/components/SideNavigation.vue";

import CustomerView from '@/components/CustomerView.vue';
import MobileNav from '@/components/MobileNav.vue';
import DashBoardView from '@/components/DashBoardView.vue';
import ProductView from '@/components/ProductView.vue';
import PromoteView from '@/components/PromoteView.vue';
import IncomeView from "@/components/IncomeView.vue";
import HelpView from "@/components/HelpView.vue";


export default {
  name: "DashBoard",
  components: {
    SideNavigation,
    CustomerView,
    DashBoardView,
    MobileNav,
    ProductView,
    PromoteView,
    IncomeView,
    HelpView,
  },
  data() {
    return {
      currentView: "customers", 
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
  
