<!-- eslint-disable no-undef -->
<template>
    <div class="modal is-active ">
        <div class="modal-background "></div>
        <div class="modal-card border-[2px] border-[#627BFE] rounded-xl  ">

            <header class="modal-card-head bg-[#627BFE] border-none">
                <p class="modal-card-title text-[16px] text-white"> <font-awesome-icon :icon="['fas', 'user']"
                        class="mr-3" />Add New
                    Customer</p>
                <button class="delete bg-[#627BFE] cursor-pointer" aria-label="close" @click="closeModel"></button>
            </header>
            <section class="modal-card-body ">

                <form @submit="onSubmit">

                    <div class="w-full h-full flex flex-col mb-[96px]">
                        <div class="Bio-details w-full flex flex-col space-y-3">


                            <div class="w-full flex flex-col space-y-1">

                                <div class="w-full flex flex-row justify-between ">
                                    <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Full Name <span
                                            class="text-[14px] text-red-700">*</span></span>

                                    <span class="text-[12px] text-red-700">{{ errors.name }}</span>
                                </div>

                                <input class="input text-[12px]" type="text" placeholder="Full name" v-bind="name" required>

                            </div>

                            <div class="w-full flex flex-col space-y-1">
                                <div class="w-full flex flex-row justify-between ">
                                    <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Company <span
                                            class="text-[14px] text-red-700">*</span></span>
                                    <span class="text-[12px] text-red-700">{{ errors.company }}</span>
                                </div>

                                <input class="input text-[12px]" type="text" placeholder="Company" v-bind="company"
                                    required>

                            </div>

                            <div class="w-full flex flex-col space-y-1">
                                <div class="w-full flex flex-row justify-between ">
                                    <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Contact Number <span
                                            class="text-[14px] text-red-700">*</span></span>
                                    <span class="text-[12px] text-red-700">{{ errors.contact }}</span>
                                </div>


                                <input class="input text-[12px]" type="tel" placeholder="Contact Number" v-bind="contact"
                                    required>

                            </div>

                            <div class="w-full flex flex-col space-y-1">
                                <div class="w-full flex flex-row justify-between ">
                                    <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Email <span
                                            class="text-[14px] text-red-700">*</span></span>
                                    <span class="text-[12px] text-red-700">{{ errors.email }}</span>
                                </div>


                                <input class="input text-[12px]" type="email" placeholder="Email" v-bind="email" required>

                            </div>

                            <div class="w-full flex flex-col space-y-1">
                                <div class="w-full flex flex-row justify-between ">
                                    <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Country <span
                                            class="text-[14px] text-red-700">*</span></span>
                                    <span class="text-[12px] text-red-700">{{ errors.country }}</span>
                                </div>

                                <input class="input text-[12px]" type="text" placeholder="Country" v-bind="country"
                                    required>

                            </div>


                        </div>



                        <div v-for="(address, index) in addresses" :key="index">
                            <div class="Address-details w-full flex flex-col space-y-3 mt-5">

                                <h2 class="text-[1rem] font-semibold text-[#3d3d3d]">Address Details</h2>
                                <div class="w-full flex flex-row justify-between space-x-3">
                                    <div class="w-1/3 flex flex-col space-y-1">
                                        <div class="w-full flex flex-row justify-between ">
                                            <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">No <span
                                                    class="text-[14px] text-red-700">*</span></span>

                                            <span class="text-[12px] text-red-700">{{ errors.homeno }}</span>
                                        </div>

                                        <input class="input text-[12px]" type="text" placeholder="No" v-bind="homeno"
                                            required>

                                    </div>

                                    <div class="w-2/3 flex flex-col space-y-1">
                                        <div class="w-full flex flex-row justify-between ">
                                            <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Street <span
                                                    class="text-[14px] text-red-700">*</span></span>
                                            <span class="text-[12px] text-red-700">{{ errors.street }}</span>
                                        </div>

                                        <input class="input text-[12px]" type="text" placeholder="Street" v-bind="street"
                                            required>

                                    </div>

                                </div>


                                <div class="w-full flex flex-row justify-between space-x-3">
                                    <div class="w-2/3 flex flex-col space-y-1">

                                        <div class="w-full flex flex-row justify-between ">
                                            <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">City <span
                                                    class="text-[14px] text-red-700">*</span></span>

                                            <span class="text-[12px] text-red-700">{{ errors.city }}</span>
                                        </div>

                                        <input class="input text-[12px]" type="text" placeholder="City" v-bind="city"
                                            required>

                                    </div>

                                    <div class="w-1/3 flex flex-col space-y-1">
                                        <div class="w-full flex flex-row justify-between ">
                                            <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">Zipcode <span
                                                    class="text-[14px] text-red-700">*</span></span>
                                            <span class="text-[12px] text-red-700">{{ errors.zipcode }}</span>
                                        </div>

                                        <input class="input text-[12px]" type="text" placeholder="Zipcode" v-bind="zipcode"
                                            required>

                                    </div>

                                </div>





                                <div class="w-full flex flex-col space-y-1">
                                    <div class="w-full flex flex-row justify-between ">
                                        <span class="text-[12px] text-[#3d3d3d] uppercase font-medium">State <span
                                                class="text-[14px] text-red-700">*</span></span>
                                        <span class="text-[12px] text-red-700">{{ errors.state }}</span>
                                    </div>


                                    <input class="input text-[12px]" type="tel" placeholder="State" v-bind="state" required>

                                </div>

                                <div class="w-full flex flex-row items-end space-x-3">
                                    <button v-if="index > 0" @click="removeAddress(index)"
                                        class="px-4 py-2 text-[12px] rounded-md border-[1px] border-[#fe6262] text-[#fe6262]">Delete
                                        address</button>
                                    <button @click="addNewAddress"
                                        class="px-4 py-2 text-[12px] rounded-md border-[1px] border-[#627BFE] text-[#627BFE]">New
                                        address</button>
                                </div>


                            </div>

                        </div>
                    </div>










                    <footer class="modal-card-foot bg-white border-none">
                        <div class="w-full flex flex-row justify-between">
                            <button class="button" @click="closeModel">Cancel</button>
                            <button @click="onSubmit"
                                class="next-btn button bg-[#627BFE] text-white hover:text-[#ffffff] hover:bg-[#3D56DA]"
                                :disabled="isNextButtonDisabled">Register</button>
                        </div>
                    </footer>



                </form>

            </section>




        </div>
    </div>
</template>





<script setup>

// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
});

// eslint-disable-next-line no-undef
const emits = defineEmits(['update:modelValue']);

const closeModel = () => {

    emits('update:modelValue', false);
}










import { ref } from 'vue';
import { useForm } from 'vee-validate';


// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
    validationSchema: {
        name: (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid characters. Only letters and spaces are allowed.',
        company: (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid characters. Only letters and spaces are allowed.',
        email: (value) => /\S+@\S+\.\S+/.test(value) || 'Invalid email address.',
        contact: (value) => /^\d{10}$/.test(value) || 'Contact must be a 10-digit number.',
        country: (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid characters. Only letters and spaces are allowed.',
        homeno: (value) => /^[A-Za-z0-9]+$/.test(value) || 'Invalid characters. Only letters and numbers are allowed.',
        city: (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid characters. Only letters and spaces are allowed.',
        street: (value) => /^[A-Za-z0-9\s]+$/.test(value) || 'Invalid characters. Only letters, numbers, and spaces are allowed.',
        zipcode: (value) => /^[A-Za-z0-9]+$/.test(value) || 'Invalid characters. Only letters and numbers are allowed.',
        state: (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid characters. Only letters and spaces are allowed.',
    },
});

// Define fields
const name = defineInputBinds('name');
const company = defineInputBinds('company');
const email = defineInputBinds('email');
const contact = defineInputBinds('contact');
const country = defineInputBinds('country');
const homeno = defineInputBinds('homeno');
const city = defineInputBinds('city');
const street = defineInputBinds('street');
const zipcode = defineInputBinds('zipcode');
const state = defineInputBinds('state');






// Submit handler
const onSubmit = handleSubmit(values => {
    // Submit to API
    console.log(values);
});

import { computed } from 'vue';
// Computed property to check if any required field is empty
const isNextButtonDisabled = computed(() => {
    return !name.value || !company.value || !email.value || !contact.value || !country.value;
});



const addresses = ref([{}]);

const addNewAddress = () => {
    addresses.value.push({});
};

const removeAddress = (index) => {
    addresses.value.splice(index, 1);
};


</script>