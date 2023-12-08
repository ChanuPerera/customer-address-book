<template>
    <div class="CutomerView w-full flex flex-col space-y-5">

        <div class="text-[1.5rem] font-bold text-[#3d3d3d] w-full flex flex-row justify-between items-center">
            <h2>Hello Ronald!</h2>
            <button class="px-4 py-2 rounded-md bg-[#627BFE] justify-center items-center flex ">
                <span class="font-regular text-white text-[14px]"><font-awesome-icon :icon="['fas', 'plus']" /> Add
                    new</span>
            </button>
        </div>

        <div class="w-full rounded-lg border-[1px] border-[#565656] border-opacity-10  flex flex-row space-x-3">

            <div class="w-1/3  flex flex-row justify-between items-center ">
                <div class="w-1/3 p-5 flex justify-center items-center">
                    <div class="w-[100px] h-[100px] rounded-full bg-[#81e155] bg-opacity-30">

                    </div>
                </div>
                <div class="w-2/3 p-5  flex flex-col text-left">
                    <h5 class="text-[14px] text-[#a9a9a9]">Total Customers</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">5,675</h2>
                    <div class="flex flex-row space-x-2">
                        <span class="text-[14px] text-[#3d3d3d] font-semibold"> <span
                                class="text-green-500"><font-awesome-icon :icon="['fas', 'arrow-up-long']" /> 8% </span>in
                            this month</span>
                    </div>
                </div>
            </div>

            <div
                class="w-1/3  flex flex-row justify-between items-center border-l-[1px] border-r-[1px] border-[#565656] border-opacity-10">
                <div class="w-1/3 p-5 flex justify-center items-center">
                    <div class="w-[100px] h-[100px] rounded-full bg-[#81e155] bg-opacity-30">

                    </div>
                </div>
                <div class="w-2/3 p-5 flex flex-col text-left">
                    <h5 class="text-[14px] text-[#a9a9a9]">Members</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">1,675</h2>
                    <div class="flex flex-row space-x-2">
                        <span class="text-[14px] text-[#3d3d3d] font-semibold"> <span
                                class="text-red-500"><font-awesome-icon :icon="['fas', 'arrow-down-long']" /> 2% </span>in
                            this month</span>
                    </div>
                </div>
            </div>

            <div class="w-1/3  flex flex-row justify-between items-center">
                <div class="w-1/3 p-5 flex justify-center items-center">
                    <div class="w-[100px] h-[100px] rounded-full bg-[#81e155] bg-opacity-30">

                    </div>
                </div>
                <div class="w-2/3 p-5  flex flex-col text-left">
                    <h5 class="text-[14px] text-[#a9a9a9]">Active Now</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">45</h2>
                    <div class="flex flex-row -space-x-2">
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white"></div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white"></div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white"></div>
                    </div>
                </div>
            </div>
        </div>














        <div class="w-full border-[1px] border-[#565656] border-opacity-10 flex flex-col space-y-5 rounded-lg p-5">

            <div class="w-full flex flex-row justify-between">
                <div class="flex flex-col">
                    <h3 class="text-[#3d3d3d] text-[1.2rem] font-bold">All Customers</h3>
                    <h5 class="text-[14px] text-green-500 capitalize">Active Members</h5>
                </div>

                <div class="flex flex-row justify-between items-center w-1/3 space-x-3">
                    <div
                        class="md:w-2/3 rounded-md border-[1px] border-[#565656] border-opacity-30 flex flex-row h-[36px] justify-between">
                        <input type="text"
                            class="h-[36px] w-full rounded-tl-md rounded-bl-md outline-none px-2 bg-transparent"
                            placeholder="Search.." />
                        <div
                            class="h-[36px] w-[44px] bg-[#627BFE] rounded-br-md rounded-tr-md text-white flex justify-center items-center text-[18px]">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </div>
                    </div>

                    <div class="w-1/3 flex flex-row h-[36px] justify-center items-center space-x-2">
                        <span class="text-[12px] text-[#3d3d3d] font-semibold">Sort</span>
                        <select
                            class="border-[1px] rounded-md w-full px-2 h-[36px] outline-none text-[14px] cursor-pointer bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
                            <option class="text-[14px]">Newest</option>
                            <option class="text-[14px]">Olderst</option>
                        </select>
                    </div>

                </div>
            </div>



            <table class="CustomerTable w-full ">
                <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] rounded-tl-lg text-[14px]"> </th>

                <th
                    class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] text-[14px]">
                    Customer Name</th>
                <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] text-[14px]">
                    Company</th>
                <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] text-[14px]">
                    Contact No</th>
                <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] text-[14px]">Email
                </th>
                <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] text-[14px]">
                    Country</th>
                <th
                    class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#c9d2ff] rounded-tr-lg text-[14px]">
                    Status</th>

                <tbody>

                    <template v-for="(customer, index) in customerData" :key="index">
                        <tr class="parent" @click="toggleChild">
                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10"><font-awesome-icon :icon="['fas', 'plus']" /></td>

                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">{{
                                customer.name }}</td>
                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">{{
                                customer.company }}</td>
                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">{{
                                customer.contactNo }}</td>
                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">{{
                                customer.email }}</td>
                            <td class="p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">{{
                                customer.country }}</td>
                            <td
                                class="p-2 text-[14px] border-b-[1px] border-[#565656] border-opacity-10 items-center justify-center">
                                <div
                                    class="px-2 py-2 justify-center items-center border-green-600 text-green-600 font-medium rounded-md border-[1px] text-center bg-[#81e155] bg-opacity-10">
                                    Active
                                </div>
                            </td>
                        </tr>
                        
                            <tr v-for="(address, addrIndex) in customer.addresses" :key="addrIndex"
                                :class="{ 'child': showChild }"
                                class=" p-2 text-[14px] border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">
                                 
                                <td></td>
                            
                                <td class="p-2 text-[14px] bg-[#f2f2f2]">
                                {{ address.street }}</td>

                                <td class="p-2 text-[14px] bg-[#f2f2f2]">
                                {{ address.city }}</td>

                                <td class="p-2 text-[14px] bg-[#f2f2f2]">
                                    {{ address.state }}</td>

                                <td class="p-2 text-[14px] bg-[#f2f2f2]">
                                    {{ address.zip }}</td>

                            
                            </tr>
                        
                    </template>


                    </tbody>

            </table>



        </div>





    </div>
</template>
    


<!-- <script>

import { customers } from '@/customerData';

export default {
    name: 'CustomerView',
    data() {
        return {
            customerData: customers,
            showChild: false,
        };
    },
    methods: {
        toggleChild() {
      this.showChild = !this.showChild;
    },
 
  },

}
</script> -->



<script>

import { customers } from '@/customerData';

export default {
    name: 'CustomerView',
    data() {
        return {
            customerData: customers,
            showChild: false,
        };
    },
    methods: {
        toggleChild() {
      this.showChild = !this.showChild;
    },
 
  },

}
</script> 






<style scoped>
.child
{
    display: none;
}


</style>










<!-- 
<script>
import { customers } from '@/customerData';

export default {
  name: 'CustomerView',
  data() {
    return {
      customerData: customers.map(customer => ({
        ...customer,
        showAddress: false
      })),
      headerColumns: [
        "Customer Name",
        "Company",
        "Contact No",
        "Email",
        "Country",
        "Status"
      ]
    };
  },
  methods: {
    toggleAddress(index) {
      this.$set(this.customerData, index, {
        ...this.customerData[index],
        showAddress: !this.customerData[index].showAddress
      });
    }
  }
};
</script> -->