<template>
  <div class="kuang">
    <div class="head">25周相敏轨道电路信号监测系统</div>
    <div class="content">
      <div class="left">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
        <template v-for="(item, index) in menu">
          <el-menu-item :index ="''+index" :key="index">
            <i :class="item.icon"></i>
            <span>{{item.title}}{{index}}</span>
          </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
      return{
          menu:[{
             icon: 'el-icon-location',
             title: '首页',
             path: 'HomePage'
          },{
             icon: 'el-icon-location',
             title: '实时数据',
             path: 'Home'
          },{
             icon: 'el-icon-location',
             title: '历史曲线',
             path: 'HomePage'
          },{
             icon: 'el-icon-location',
             title: '历史报警',
             path: 'HomePage'
          },{
             icon: 'el-icon-location',
             title: '系统状态',
             path: 'HomePage'
          },{
             icon: 'el-icon-location',
             title: '数据导出',
             path: 'HomePage'
          },{
             icon: 'el-icon-location',
             title: '系统管理',
             path: 'HomePage'
          }]
      }
  },
  methods:{
      handleSelect(key, keyPath) {
          console.log(this.menu[key].path);
        this.$router.push({name: this.menu[key].path})
      }
  }
};
</script>

<style lang="less">
.kuang {
  text-align: left;
  .head {
    height: 80px;
    font-size: 26px;
    line-height: 80px;
    color: #333;
    padding-left: 30px;
    border-bottom: 1px solid #eee;
  }
  .content {
    position: relative;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      width: 160px;
      .el-menu {
        width: 150px;
        border: none;
      }
    }
    .right {
      padding: 10px;
      margin-left: 160px;
      border-left: 1px solid #eee;
    }
  }
}
</style>