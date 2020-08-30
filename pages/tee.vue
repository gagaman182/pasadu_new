<template>
  <div class="chart">
    <pie-chart :data="data" />
  </div>
</template>

<script>
export default {
  name: "PieBase",
  layout: "dashboard",
  data() {
    return {
      data: [
        {
          name: "广州",
          value: 30
        },
        {
          name: "佛山",
          value: 15
        },
        {
          name: "深圳",
          value: 8
        }
      ]
    };
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>
