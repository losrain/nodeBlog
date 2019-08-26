<template>
  <div class="homepage">
    <div class="gang">
      <div v-for="(item, a) in shangData" class="shang" :style="'left:'+ item.width+'%'" :key="'a'+a">
          <span class="quan" :style="'border-color:'+ item.color"></span>
          <span class="text" :style="'color:'+ item.color">{{item.text}}</span>
      </div>
      <div v-for="(item, b) in xiaData" class="xia" :style="'left:'+ item.width+'%'" :key="'b'+b">
          <span class="text" :style="'color:'+ item.color">{{item.text}}</span>
          <span class="quan" :style="'border-color:'+ item.color"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    var shang = [];
    var colors = ['#000', '#f00', '#322ead', '#00f'];
    var texts = ['A','B','C','D'];
    for (let index = 0; index < 11; index++) {
      const b = Math.round(Math.random()*3);
      shang.push({
        color: colors[b],
        text: texts[b],
        width: index*10
      })
    }
    var xia = [];
    var textss = ['E','F','G','H'];
    for (let index = 0; index < 11; index++) {
      const b = Math.round(Math.random()*3);
      xia.push({
        color: colors[b],
        text: textss[b],
        width: index*10
      })
    }
    return{
      xiaData: xia,
      shangData: shang
    }
  }
}
</script>

<style lang="less">
.homepage{
  padding: 80px 70px;
  min-height: ~"calc(100vh - 100px)";;
  .gang{
    height: 110px;
    position: relative;
    border-top: 3px solid #999; 
    border-bottom: 3px solid #999;
    .shang{
      position: absolute;
      top: -7px;
      width: 11px;
      height: 31px;
      font-size: 18px;
      .quan{
        width: 11px;
        height: 11px;
        border: 2px solid;
        border-radius: 50%;
        display: block;
        background: #fff;
      }
      .text{
        text-align: center;
        height: 20px;
      font-size: 16px;
        display: block;
      }
    }
    .xia{
      position: absolute;
      bottom: -7px;
      width: 11px;
      height: 31px;
      font-size: 18px;
      .quan{
        width: 11px;
        height: 11px;
        border: 2px solid;
        border-radius: 50%;
        display: block;
        background: #fff;
      }
      .text{
        text-align: center;
        height: 20px;
      font-size: 16px;
        display: block;
      }
    }
  }
}
</style>
