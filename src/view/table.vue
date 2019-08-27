<template>
  <div class="tables">
    <div class="search">
      <div class="block">
        <el-date-picker
          v-model="value3"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-button type="primary">主要按钮</el-button>
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
  data() {
    return {
      value3: [],
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
    };
  }
};
</script>
<style lang="less">
.tables {
  padding: 16px;
  .search {
    padding-bottom: 15px;
    overflow: hidden;
    .block {
      float: left;
    }
    .el-button {
      float: left;
      margin-left: 20px;
      span {
        color: #fff;
      }
    }
  }
}
</style>