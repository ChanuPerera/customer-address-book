<template>
    <div class="PromotedView w-full flex flex-col ">
        <div class="text-[1.5rem] font-bold text-[#3d3d3d] w-full flex flex-row justify-between items-center">
            <h2>Hello Ronald!</h2>
        </div>


        <div class="w-[80%] mt-5 justify-center items-center   mx-auto">
            <div class="flex flex-col justify-center items-center text-center">
<h2 class="md:text-[3rem] text-[2rem] font-bold"> Thank you for Checking !!!</h2>
<p class="md:text-[1.5rem] text-[1rem] text-[#3d3d3d] capitalize">Please navigate to the 'Customers' page</p>

<div class="flex justify-center items-center p-5">
    <EpicSpinner/>
</div>
<h2 class="md:text-[2.5rem] text-[1.2rem] font-semibold"> Coming soon...</h2>
            </div>
        </div>

        

    </div>
</template>

<script>

import EpicSpinner from './EpicSpinner.vue';


export default {
    name: 'PromotedView',
    components:{
        EpicSpinner,
    }
}

</script>