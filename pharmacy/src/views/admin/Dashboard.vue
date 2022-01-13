<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-social-traffic />
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import axios from "axios";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
  },
  data:function (){
    return {
    id:'',

    }
  },
  created:function(){
    let y = localStorage.getItem('session')
    this.id = JSON.parse(y).username
    console.log(this.id);
   axios.get(`http://localhost:5000/getOrders/${this.id}`)
   .then((res)=>{
     console.log(res);
   })
   
  }
};
</script>
