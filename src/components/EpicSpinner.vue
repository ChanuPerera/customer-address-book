
<template>
    <div id="app">
      <orbit-spinner
  :animation-duration="1200"
  :size="55"
  color="#3D56DA"
/>
    </div>
  </template>
  
  <script>
    
    import { OrbitSpinner } from 'epic-spinners'
    export default {
        name:'EpicSpinner',
      components: {
        OrbitSpinner
      }
    }
  </script>