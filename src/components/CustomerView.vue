<template>

<div class="CutomerView w-full flex flex-col space-y-5" >

<div class="text-[1.5rem] font-bold text-[#3d3d3d] w-full flex flex-row justify-between items-center">
  <h2>Hello Ronald!</h2>
  <button class="px-4 py-2 rounded-md bg-blue-500 justify-center items-center flex ">
    <span class="font-regular text-white text-[14px]">Add new</span>
  </button>
</div>

<div class="w-full rounded-xl border-[1px] border-[#565656] border-opacity-10 p-2 flex flex-row space-x-3">
  <div class="w-1/3 bg-red-300">
    d
  </div>

  <div class="w-1/3 bg-red-300">
    d
  </div>

  <div class="w-1/3 bg-red-300">
    d
  </div>
</div>

<table class="CustomerTable w-full ">
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Customer Name</th>
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Company</th>
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Contact No</th>
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Email</th>
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Country</th>
  <th class="font-normal p-2 border-b-[1px] border-[#565656] border-opacity-10">Status</th>
</table>



</div>

</template>
    


<script>
export default {
    name:'CustomerView'
}
</script>