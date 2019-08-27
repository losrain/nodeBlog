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
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="yu1" label="一级定位区域"></el-table-column>
      <el-table-column prop="type" label="故障类型"></el-table-column>
      <el-table-column prop="yu3" label="二级定位区域"></el-table-column>
      <el-table-column prop="yu2" label="三级定位区域"></el-table-column>
      <el-table-column prop="sdate" label="开始时间"></el-table-column>
      <el-table-column prop="edate" label="结束时间"></el-table-column>
      <el-table-column prop="bei" label="备注"></el-table-column>
    </el-table>
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
      shangData: shang,
      tableData: [
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        },
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        },
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        },
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        },
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        },
        {
          yu1: "成都",
          yu2: "长勺",
          yu3: "云娜",
          sdate: "2016-05-02",
          edate: "2016-05-02",
          type: "正常",
          bei: "完美"
        }
      ]
    }
  }
}
</script>

<style lang="less">
.homepage{
  padding: 80px 70px;
  min-height: ~"calc(100vh - 100px)";
  .el-table{
    margin-top: 100px;
  }
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
