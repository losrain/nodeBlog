<template>
    <div class="tu">
        <div class="conten">
            <span class="text">信号集中监察战机</span>
            <span></span>
            <span class="text">轨道电路诊断主机</span>
            <span></span>
            <span class="text">CAN采集机</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .tu{
        padding: 100px 0 0 100px;
        .conten{
            margin: auto;
            span{
                float: left;
                width: 100px;
                border-bottom: 2px solid #333;
                height: 50px;
                &.text{
                    height: 100px;
                    width: 200px;
                    text-align: center;
                    font-size: 20px;
                    color: #333;
                    border: 1px solid #333;
                    line-height: 100px;
                }
            }

        }
    }
</style>