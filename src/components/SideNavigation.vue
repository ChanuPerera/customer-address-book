<template>
    <div :class="{ 'slide-in': showSideNavigation, 'slide-out': !showSideNavigation }" class="Main-Nav lg:w-1/6 w-screen sm:block sm:w-[80px] md:w-[80px] z-10  bg-transparent border-[#565656] border-r-[1px] border-opacity-10 fixed h-screen
    
    bg-white backdrop-blur-sm bg-opacity-60 md:backdrop-blur-0 md:bg-opacity-100" id="sidenav">

        <div class="w-full p-10 ">
            <img :src="Logo" alt="logo" class="object-cover w-full h-full hidden lg:block" />
        </div>


        <!-- Navigation link Wrapper -->
        <div class="link-body w-full  h-full mx-auto flex flex-col space-y-3">





            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">dashboard</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'dashboard'" key="link-button" @click="changeView('dashboard')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'square-poll-vertical']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block capitalize">
                                    dashboard
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'dashboard'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('dashboard')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'square-poll-vertical']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block capitalize">
                                        dashboard
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>


            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">products</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'products'" key="link-button" @click="changeView('products')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'cubes']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block capitalize">
                                    products
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'products'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('products')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'cubes']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block capitalize">
                                        products
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>


            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">customers</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'customers'" key="link-button" @click="changeView('customers')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block capitalize">
                                    customers
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'customers'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('customers')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'user']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block capitalize">
                                        customers
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>

            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">income</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'income'" key="link-button" @click="changeView('income')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'coins']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block capitalize">
                                    income
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'income'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('income')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'coins']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block capitalize">
                                        income
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>





            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">promote</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'promote'" key="link-button" @click="changeView('promote')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'arrow-trend-up']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block capitalize">
                                    Promote
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'promote'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('promote')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'arrow-trend-up']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block capitalize">
                                        Promote
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>



            <div class=" w-full flex flex-col space-y-2">


                <div class="w-full justify-start items-center px-5 hidden lg:block">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">Help</span>
                </div>


                <div class="w-full flex flex-row relative h-[44px]">
                    <transition :name="transitionName">
                        <div v-if="activeView !== 'help'" key="link-button" @click="changeView('help')"
                            class="link-button cursor-pointer w-full relative flex flex-row justify-center items-center h-[44px]">

                            <div class="w-[80%] h-full rounded-md  mx-auto flex items-center justify-start flex-row">
                                <div class="w-[44px] h-[44px] flex items-center justify-center  bg">
                                    <font-awesome-icon :icon="['fas', 'circle-question']" class="text-[#565656]" />
                                </div>

                                <span class="text-[#565656] md:hidden lg:block">
                                    Help
                                </span>

                            </div>
                        </div>
                    </transition>
                    <transition :name="transitionName">
                        <div v-if="activeView === 'help'" key="link-button-active" class="link-button-active cursor-pointer w-full  flex flex-row justify-center items-center h-[44px]
absolute
" @click="changeView('help')">
                            <div class="w-[5px] h-[40px] bg-[#5f79ff]">

                            </div>
                            <div class="outter-link-btn lg:w-[80%] w-[80%] md:w-[44px] sm:w-[44px]  rounded-md 
                bg-gradient-to-l  from-[#8fa2ff] to-[#5f79ff] shadow-md shadow-slate-300
                mx-auto flex items-center justify-start flex-row ">
                                <div
                                    class="lg:w-full md:w-[42px] sm:w-[42px] w-full h-full bg-white mx-auto flex items-center justify-start flex-row rounded-md">
                                    <div class="w-[44px] h-[44px] flex items-center justify-center ">
                                        <font-awesome-icon :icon="['fas', 'circle-question']" class="text-[#5f79ff]" />
                                    </div>

                                    <span class="text-[#5f79ff] md:hidden lg:block">
                                        Help
                                    </span>
                                </div>


                            </div>
                        </div>
                    </transition>
                </div>

            </div>



        </div>
        <!-- Navigation link Wrapper -->



    </div>
</template>
  






<script>

import Logo from '../assets/images/webco.png';

export default {
    name: "SideNavigation",
    props: {
        showSideNavigation: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            Logo: Logo,
            activeView: null,
            transitionName: "slide", // Define Transition 

        };
    },
    
    methods: {
        changeView(view) {
            this.transitionName = "slide";
            this.activeView = view;
            this.$emit("changeView", view);
        },

    },
    created() {
        // setting the customers views as default change view
        this.changeView("customers");
    },
};
</script>
