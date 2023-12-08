
<template>
  <div class="w-full flex flex-row">
    <SideNavigation @changeView="changeView"/>
    <div class="w-full h-full flex flex-row ">

      <div class="w-1/6"></div>

      <div class="w-5/6">
        <div class="w-[95%] mx-auto p-5 ">

          <DashboardView v-show="currentView === 'dashboard'"/>
          <CustomerView v-show="currentView === 'customers'"/>
         <ProductsView  v-show="currentView === 'products'"/>

        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import SideNavigation from "@/components/SideNavigation.vue";
import DashboardView from "@/components/DashboardView.vue";
import CustomerView from '@/components/CustomerView.vue';
import ProductsView from '@/components/ProductsView.vue';

export default {
  name: "DashBoard",
  components: {
    SideNavigation,
    DashboardView,
    CustomerView,
    ProductsView,
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
  
