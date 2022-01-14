<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <orderTable color="dark" />
    </div>
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import OrderTable from "@/components/Cards/OrderTable.vue";

export default {
  components: {
    CardTable,
    OrderTable,
  },
};
</script>
