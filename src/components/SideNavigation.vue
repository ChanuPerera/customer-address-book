<template>
    <div class="w-1/6  bg-transparent border-[#565656] border-r-[1px] border-opacity-10 fixed h-screen bg-white" id="sidenav">

        <div class="w-full p-10 ">
            <img :src="Logo" alt="logo" class="object-cover w-full h-full"/>
        </div>

        <div class="link-body w-full  h-full mx-auto flex flex-col space-y-3">

            <div class=" w-full flex flex-col space-y-2">
                <div class="w-full justify-start items-center px-5">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">dashboard</span>
                </div>
                <div class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]" @click="changeView('dashboard')">
                    <div class="w-[5px] h-[40px] bg-[#627BFE]">

                    </div>
                    <div
                        class="w-[80%] h-full rounded-md border-[1px] border-[#627BFE] mx-auto flex items-center justify-start flex-row">
                        <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                            <font-awesome-icon :icon="['fas', 'square-poll-vertical']" class="text-[#627BFE]" />
                        </div>

                        <span class="text-[#627BFE]">
                            Dashbaord
                        </span>

                    </div>
                </div>
            </div>


            <div class="w-full flex flex-col space-y-2">
                <div class="w-full justify-start items-center px-5">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">products</span>
                </div>
                <div class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]"  @click="changeView('products')">
                    <div class="w-[5px] h-[40px] bg-[#627BFE]">

                    </div>
                    <div
                        class="w-[80%] h-full rounded-md border-[1px] border-[#627BFE] mx-auto flex items-center justify-start flex-row">
                        <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                            <font-awesome-icon :icon="['fas', 'cubes']" class="text-[#627BFE]"/>
                        </div>

                        <span class="text-[#627BFE]">
                            Products
                        </span>

                    </div>
                </div>
            </div>


            <div class="w-full flex flex-col space-y-2">
                <div class="w-full justify-start items-center px-5">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">customers</span>
                </div>
                <div class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]" @click="changeView('customers')">
                    <div class="w-[5px] h-[40px] bg-[#627BFE]">

                    </div>
                    <div
                        class="w-[80%] h-full rounded-md border-[1px] border-[#627BFE] mx-auto flex items-center justify-start flex-row">
                        <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                    
                            <font-awesome-icon :icon="['fas', 'user']" class="text-[#627BFE]"/>
                        </div>

                        <span class="text-[#627BFE]">
                            Customers
                        </span>

                    </div>
                </div>
            </div>



        </div>
    </div>
</template>
  






<script>

import Logo from '../assets/images/webco.png';

export default {
  name: "SideNavigation",
  data() {
    return {
      Logo: Logo,
    };
  },
  methods: {
    changeView(view) {
        
      this.$emit("changeView", view);
    },
  },
  
};
</script>
  
