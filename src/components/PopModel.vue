<!-- eslint-disable no-undef -->
<template>
    <div class="modal is-active ">
        <div class="modal-background "></div>
        <div class="modal-card border-[2px] border-[#627BFE] rounded-xl">
            <header class="modal-card-head bg-[#627BFE] border-none">
                <p class="modal-card-title text-[16px] text-white"> <font-awesome-icon :icon="['fas', 'user']"
                        class="mr-3" />Add New
                    Customer</p>
                <button class="delete bg-[#627BFE] cursor-pointer" aria-label="close" @click="closeModel"></button>
            </header>
            <section class="modal-card-body">



                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Name">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Company">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'house']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="tel" placeholder="Contact Number">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'phone']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Country">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'globe']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>




                <h2 class="text-[#3d3d3d] text-[1rem] font-medium mt-5"> Address Details</h2>

                <div class="w-full flex flex-row space-x-3 justify-center mt-5 mb-3">

                    <div class="w-1/3">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="Number">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'globe']" />
                                </span>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'check']" />
                                </span>
                            </p>
                        </div>
                    </div>


                    <div class="w-2/3">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="Street">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'globe']" />
                                </span>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'check']" />
                                </span>
                            </p>
                        </div>
                    </div>


                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Apartment ( Optional )">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'globe']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>

                <div class="w-full flex flex-row space-x-3 justify-center mt-3 mb-3">


                    <div class="w-2/3">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="City">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'globe']" />
                                </span>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'check']" />
                                </span>
                            </p>
                        </div>
                    </div>


                    <div class="w-1/3">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="Zip Code">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'globe']" />
                                </span>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'check']" />
                                </span>
                            </p>
                        </div>
                    </div>


                   


                </div>


                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="State">
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'globe']" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                    </p>
                </div>



            </section>
            <footer class="modal-card-foot bg-white border-none">
                <button class="button bg-[#627BFE] text-white hover:text-[#ffffff] hover:bg-[#3D56DA]">Register</button>
                <button class="button" @click="closeModel">Cancel</button>
            </footer>
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

</script>