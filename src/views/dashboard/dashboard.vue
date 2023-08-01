<template>
    <div class="dashboard">
        <a-row :gutter="16" type="flex">
            <!-- 八大板块 -->
            <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">

                <Tempolate :list="toolList"></Tempolate>

            </a-col>
        </a-row>

        <a-row :gutter="16" :style="{ marginTop: '16px', marginBottom: '16px' }">
            <a-col :span="12">
                <Knowledge />
            </a-col>
            <a-col :span="12">
                <Question />
                <br />
                <Notice />
            </a-col>

        </a-row>


    </div>
</template>

<script lang="ts" setup name="dashboard">
import { ref, computed } from 'vue'
import { InfoCircleOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
import Tempolate from './components/tempolate.vue'
import Knowledge from './components/knowledge.vue'
import Question from './components/question.vue'
import Notice from './components/notice.vue'


const toolList: any = [
    {
        name: '投资决策'
    }, {
        name: '运营决策'
    }, {
        name: '营销决策'
    }, {
        name: '生成决策'
    }, {
        name: '供应链决策'
    }, {
        name: '财务决策'
    }, {
        name: '人力资源决策'
    }, {
        name: '其他决策'
    }
]

</script>

<style lang="less" scoped>
@import '@/style/index.less';
</style>
