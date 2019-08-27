<template>
  <div id="main"></div>
</template>
<script>
var echarts = require('echarts');
export default {
  data(){
    return{}
  },
  mounted() {
    var echarts = require('echarts');
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({title: {
        text: '25周相敏轨道电路信号监测系统'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Step Start', 'Step Middle', 'Step End']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['1点', '2点', '3点', '4点', '5点', '6点', '7点']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Step Start',
            type:'line',
            step: 'start',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'Step Middle',
            type:'line',
            step: 'middle',
            data:[220, 282, 201, 234, 290, 430, 410]
        },
        {
            name:'Step End',
            type:'line',
            step: 'end',
            data:[450, 432, 401, 454, 590, 530, 510]
        }
    ]});
  },
}
</script>
<style lang="less">
  #main{
    width: 100%;
    height: 500px;
    padding: 50px;
  }
</style>