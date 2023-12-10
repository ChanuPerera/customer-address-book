<template id="style-7">
    <div class="CutomerView w-full flex flex-col h-auto overflow-y-auto " id="style-7">

        <div class="text-[1.5rem] font-bold text-[#3d3d3d] w-full flex flex-row justify-between items-center">
            <h2>Hello Ronald!</h2>
            <button @click.prevent="handleAddNew"
                class="px-4 py-2 rounded-md bg-gradient-to-r from-[#627BFE] to-[#3D56DA] justify-center items-center flex ">
                <span class="font-regular text-white text-[14px]"><font-awesome-icon :icon="['fas', 'plus']" /> Add
                    new</span>
            </button>
        </div>
        <PopModel v-if="modals.formModal" v-model="modals.formModal"/>

        <div class="w-full flex md:flex-row flex-col justify-between md:space-x-3 space-x-0 space-y-3 md:space-y-0 mt-5  relative">

            <div class="lg:w-1/3 sm:w-4/12 flex flex-row justify-between items-center rounded-lg border-[1px] border-[#4acfa2]  border-l-[#4acfa2] border-r-[6px] 
           
            ">
                <div class="w-1/3 lg:p-5 sm:p-3  flex justify-center items-center bg-gradient-to-l from-[#4acfa2]  to-[#4de2b0] rounded-tl-lg rounded-bl-lg">
                    <div class="w-[100px] h-[100px] rounded-full 
                    relative flex justify-center items-center 
                    ">
                        <h2 class="text-[32px] text-[#FFFFFF]"><font-awesome-icon :icon="['fas', 'users']" /></h2>
                    </div>
                </div>
                <div class="w-2/3 lg:p-5 sm:p-3 px-5 sm:px-0 flex flex-col text-left ">
                    <h5 class="text-[14px] text-[#a9a9a9]">Total Customers</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">5,675</h2>
                    <div class="flex flex-row space-x-2">
                        <span class="text-[14px] text-[#3d3d3d] font-semibold"> <span
                                class="text-green-500"><font-awesome-icon :icon="['fas', 'arrow-up-long']" /> 8% </span>in
                            this month</span>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 sm:w-4/12 flex flex-row justify-between items-center rounded-lg border-[1px] border-[#7a4de2]  border-l-[#7a4de2] border-r-[6px]
               ">
                <div class="w-1/3 lg:p-5 sm:p-3 flex justify-center items-center  bg-gradient-to-l from-[#5d30c4]  to-[#7a4de2] rounded-tl-lg rounded-bl-lg">
                    <div class="w-[100px] h-[100px] rounded-full 
                    relative flex justify-center items-center 
                    ">
                        <h2 class="text-[32px] text-[#ffffff]"><font-awesome-icon :icon="['fas', 'user-group']" /></h2>
                    </div>
                </div>
                <div class="w-2/3 lg:p-5 sm:p-3 px-5 sm:px-0 flex flex-col text-left">
                    <h5 class="text-[14px] text-[#a9a9a9]">Members</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">1,675</h2>
                    <div class="flex flex-row space-x-2">
                        <span class="text-[14px] text-[#3d3d3d] font-semibold"> <span
                                class="text-red-500"><font-awesome-icon :icon="['fas', 'arrow-down-long']" /> 2% </span>in
                            this month</span>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 sm:w-4/12 flex flex-row justify-between items-center rounded-lg border-[1px] border-[#5599f7]  border-l-[#5599f7] border-r-[6px] 
            ">
                <div class="w-1/3 lg:p-5 sm:p-3 flex justify-center items-center bg-gradient-to-l from-[#487bc1]  to-[#5599f7]">
                    <div class="w-[100px] h-[100px] rounded-full
                     relative flex justify-center items-center 
                    ">
                        <h2 class="text-[32px] text-[#ffffff]"><font-awesome-icon :icon="['fas', 'user-clock']" /></h2>
                    </div>
                </div>
                <div class="w-2/3 lg:p-5 sm:p-3 px-5 sm:px-0 flex flex-col text-left">
                    <h5 class="text-[14px] text-[#a9a9a9]">Active Now</h5>
                    <h2 class="font-bold text-[1.8rem] text-[#3d3d3d]">45</h2>
                    <div class="flex flex-row -space-x-2">
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white relative overflow-clip">
                            <img :src="C1" alt="logo" class="object-cover w-full h-full"/>
                        </div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white relative overflow-clip">
                            <img :src="C2" alt="logo" class="object-cover w-full h-full"/>
                        </div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white relative overflow-clip">
                            <img :src="C3" alt="logo" class="object-cover w-full h-full"/>
                        </div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white relative overflow-clip">
                            <img :src="C4" alt="logo" class="object-cover w-full h-full"/>
                        </div>
                        <div class="w-[28px] h-[28px] rounded-full bg-slate-700 border-[1px] border-white relative overflow-clip">
                            <img :src="C5" alt="logo" class="object-cover w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>














        <div
            class="w-full border-[1px] border-[#565656] border-opacity-20 flex flex-col space-y-5 rounded-lg md:p-5 p-3 mt-10 bg-white
            
            relative overflow-x-auto" id="style-7">

            <div class="w-full flex md:flex-row flex-col space-y-3 md:space-y-0 justify-between ">
                <div class="flex flex-col">
                    <h3 class="text-[#3d3d3d] text-[1.2rem] font-bold">All Customers</h3>
                    <h5 class="text-[14px] text-green-500 capitalize">Active Members</h5>
                </div>

                <div class="flex flex-row justify-between items-center md:w-1/3 w-full space-x-3">
                    <div
                        class="md:w-2/3 rounded-md border-[1px] border-[#565656] border-opacity-30 flex flex-row h-[36px] justify-between">
                        <input type="text"
                            class="h-[36px] w-full rounded-tl-md rounded-bl-md outline-none px-2 bg-transparent text-[14px]"
                            placeholder="Search.." />
                        <div
                            class="h-[35px] w-[44px] bg-gradient-to-r from-[#627BFE] to-[#3D56DA] rounded-br-md rounded-tr-md text-white flex justify-center items-center text-[18px]">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </div>
                    </div>

                    <div class="w-1/3 flex flex-row h-[36px] justify-center items-center space-x-2 ">
                        <span class="text-[12px] text-[#3d3d3d] font-semibold">Sort</span>
                        <select
                            class="border-[1px] rounded-md w-full px-2 h-[36px] outline-none text-[14px] cursor-pointer ">
                            <option class="text-[14px]">Newest</option>
                            <option class="text-[14px]">Olderst</option>
                        </select>
                    </div>

                </div>
            </div>


<div class="w-full relative overflow-x-auto" id="style-7">
    <table class="CustomerTable w-full ">
                <th
                    class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] rounded-tl-lg text-[14px]">
                </th>

                <th class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] text-[14px] ">
                    Customer Name</th>
                <th class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] text-[14px]">
                    Company</th>
                <th class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] text-[14px]">
                    Contact No</th>
                <th class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] text-[14px]">Email
                </th>
                <th class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] text-[14px]">
                    Country</th>
                <th
                    class="font-medium p-2 border-b-[1px] border-[#565656] border-opacity-10 bg-[#8fa2ff] rounded-tr-lg text-[14px]">
                    Status</th>

                <tbody>



                    <template v-for="(customer, index) in customerData" :key="index">
                        <tr class="parent" :style="{ background: index % 2 ? '#d9dffe48' : '#ffffff' }">
                            <td @click="toggleSubrow(index)" :class="{ opened: ExpandDetails.includes(index) }"
                                class="p-2 text-[14px]  text-center cursor-pointer">
                                <font-awesome-icon :icon="['fas', ExpandDetails.includes(index) ? 'minus' : 'plus']" />
                            </td>

                            <td class="p-2 text-[14px] ">{{
                                customer.name }}</td>
                            <td class="p-2 text-[14px] ">{{
                                customer.company }}</td>
                            <td class="p-2 text-[14px] ">{{
                                customer.contactNo }}</td>
                            <td class="p-2 text-[14px] ">{{
                                customer.email }}</td>
                            <td class="p-2 text-[14px] ">{{
                                customer.country }}</td>
                            <td class="p-2 text-[14px]  items-center justify-center">
                                <div class="w-full flex flex-row justify-start items-center space-x-2">
                                    <div class="w-[18px] h-[18px] bg-slate-50 rounded-full shadow-md shadow-slate-300 flex items-center justify-center">
                                        <div :class="{ 'status-indicator-outter': true, 'status-indicator-outter-active': customer.status === 'Active', 'status-indicator-outter-inactive': customer.status === 'Inactive' }">
                                        <div :class="{ 'status-indicator': true, 'status-indicator-active': customer.status === 'Active', 'status-indicator-inactive': customer.status === 'Inactive' }"></div>
                                        </div>
                                    </div>
                                    
                                    <span :class="{ 'status': true, 'status-active': customer.status === 'Active', 'status-inactive': customer.status === 'Inactive' }">{{ customer.status }}</span>

                                </div>
                            </td>
                        </tr>

                        <tr v-if="ExpandDetails.includes(index)" class="subrow">
                            <td class="p-2 text-[14px] bg-[#f2f2f2]"></td>
                            <td :colspan="headerColumns.length">
                                <table class="sub-table w-full">
                                    <tr v-for="(address, addrIndex) in customer.addresses" :key="addrIndex">
                                        
                                        <td class="p-2 text-[14px] bg-[#f2f2f2] font-medium">Address {{ addrIndex + 1 }}</td>
                                        <td class="p-2 text-[14px] bg-[#f2f2f2] font-medium">{{ address.street }}</td>
                                        <td class="p-2 text-[14px] bg-[#f2f2f2] font-medium">{{ address.city }}</td>
                                        <td class="p-2 text-[14px] bg-[#f2f2f2] font-medium">{{ address.state }}</td>
                                        <td class="p-2 text-[14px] bg-[#f2f2f2] font-medium">{{ address.zip }}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    </template>





                </tbody>

            </table>
</div>
            

            <div class="w-full justify-end flex">
                <nav class="pagination is-small" role="navigation" aria-label="pagination">
                    <a class="pagination-previous "><font-awesome-icon :icon="['fas', 'angle-left']" /></a>
                    <a class="pagination-next bg-[#adbbff]"><font-awesome-icon :icon="['fas', 'angle-right']" /></a>
                    <ul class="pagination-list">
                        <li><a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a></li>
                        <li><span class="pagination-ellipsis">&hellip;</span></li>
                        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                        <li><a class="pagination-link " aria-label="Goto page 46" >46</a></li>
                        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                        <li><span class="pagination-ellipsis">&hellip;</span></li>
                        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
                    </ul>
                </nav>
            </div>
            

        </div>





    </div>
</template>
    



<script>
import { customers } from '@/customerData';
import PopModel from './PopModel.vue';
import C1 from '../assets/images/c1.jpg';
import C2 from '../assets/images/c2.png';
import C3 from '../assets/images/c3.jpg';
import C4 from '../assets/images/c4.jpg';
import C5 from '../assets/images/c5.jpg';


export default {
    name: 'CustomerView',
    components: {
        PopModel,
    },
    data() {
        return {
            C1: C1,
            C2: C2,
            C3: C3,
            C4: C4,
            C5: C5,
            customerData: customers.map(customer => ({ ...customer, address: {} })),
            ExpandDetails: [],
            headerColumns: [
                "Customer Name",
                "Company",
                "Contact No",
                "Email",
                "Country",
                "Status"
            ],
           
        };
    },
    methods: {
        toggleSubrow(index) {
            const expandedIndex = this.ExpandDetails.indexOf(index);
            if (expandedIndex > -1) {
                this.ExpandDetails.splice(expandedIndex, 1);
            } else {
                this.ExpandDetails.push(index);
            }
        },
    },



};
</script>


<script setup>
import { reactive } from 'vue';

const modals = reactive({

    formModal: false,

});

const handleAddNew = () => {
    modals.formModal = true;
}

</script>

<style scoped>
.child {
    display: none;
}
</style>






