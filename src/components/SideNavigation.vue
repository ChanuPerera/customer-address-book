<!-- src/components/SideNavigation.vue -->
<template>
    <div class="w-1/6  bg-transparent border-[#565656] border-r-[1px] border-opacity-25" id="sidenav">

        <div class="w-full p-10 "></div>

        <div class="link-body w-full  h-full mx-auto flex flex-col ">

            <div class="w-full flex flex-col space-y-2">
                <div class="w-full justify-start items-center px-5">
                    <span class="text-[10px] font-bold text-[#565656] uppercase">dashboard</span>
                </div>
                
                <div class="w-full relative flex flex-row justify-center items-center h-[44px]">
                <div class="w-[5px] h-[40px] bg-[#627BFE]">

                </div>
                <div class="w-[80%] h-full rounded-md border-[1px] border-[#627BFE] p-2 mx-auto flex items-center justify-start flex-row">
                    <MenuIcon/> Dashbaord
                </div>
            </div>
            </div>
            


        </div>
    </div>
</template>
  
<script>


export default {
    name: 'SideNavigation',
    components:'MenuIcon'
};
</script>
  
