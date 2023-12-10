<template>
    <div class="w-screen md:hidden p-3 z-20 bg-white border-b-[1px] border-[#5f79ff] border-opacity-25 flex justify-start items-start fixed top-0 left-0">
        <button 
        class="text-[#3d3d3d]"
        @click="toggleSideNavigation"
        ><font-awesome-icon :icon="['fas', 'bars']" /></button>

    </div>
</template>

<script>
export default {
  name: "MobileNav",
  methods: {
    toggleSideNavigation() {
      this.$emit("toggleSideNavigation");
    },
  },
};
</script>