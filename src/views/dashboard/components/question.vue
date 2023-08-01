<template>
    <a-card title="常见问题" :bordered="false">
        <div class="card-box">
            <a-collapse v-model:activeKey="activeKey" accordion ghost expandIconPosition="end">

                <a-collapse-panel v-for="(item, index) in 5" :key="index">
                    <template #header>
                        <div class="card-box-header">
                            <img src="~@/assets/images/icon_index_faq.png">
                            如何快速入门使用我们的工具？
                        </div>
                    </template>
                    <div class="card-box-content">
                        在打开“选取数据源”对话框中，找到需要导入数据的文件所在的文件夹，选中相应的文件，点击“打开”按钮，打开“导入数据”对话框
                    </div>
                </a-collapse-panel>

            </a-collapse>
        </div>
    </a-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const activeKey = ref(['0']);
</script>
<style lang="less" scoped>
.card-box {
    height: 320px;
    overflow: hidden;
}

.card-box-header {
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }
}

.card-box-content {
    color: #666666;
}

.ant-collapse {
    margin-left: -16px;
    margin-right: -16px;

    .ant-collapse-item {
        font-size: 16px;

        .ant-collapse-header {
            padding: 12px 0px;
        }



    }
}
</style>
