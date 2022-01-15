<template>

  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Orders's History
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table v-for="item in orders" :key="item.quan" class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              User
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              MEDICINES
            </th>
            <th v-on:click="test()"
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
              
            >
              TOTAL PRICE 
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              DATE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                
              </div>
            </td>
            
            <td 
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="far fa-eye" @mouseover="hovered = true" @mouseleave="hovered = false"></i>
                 <div v-if="hovered">
                     <ul>
                       <li></li>
                     </ul>
                 </div>
            </td>
            <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-black whitespace-nowrap p-4"
              
            >
               <!-- {{row[key.totalPrice]}} -->
            
            </td>
            <!-- <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                
              </div>
            </td>
          -->
          <td><small class="text-muted"> May 2020, 4:30 PM </small></td>
          </tr>
          
          
         
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>


import team1 from "@/assets/img/team-1-800x800.jpg";

export default {
 
  props:{
    orders:{
      type:Array ,
      required:true
    },
    config:{
      type:Array ,
      required:true
    },
     color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },},
    
  data:function() {
    return {
      team1,
      hovered:false,
     
      
    };
    
  },
  created:function() {

  },
  methods:{
    test:function() {
    
     console.log(this.orders[0].totalPrice);
    }

  }
  
    
  
    
    
   

  
};
</script>
<style scoped>
#p{
  color:white
}
</style>