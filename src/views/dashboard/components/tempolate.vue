<template>
    <a-row :gutter="[16, 16]">
        <a-col class="tools-col" :span="6" v-for="(item, index) in list" :key="index">
            <a-card :bordered="false">
                <div class="tools-item" @click="$multiRedirect('/tools')">
                    <img src="~@/assets/images/tool-icon-1.png" alt="">
                    <div class="info">
                        <div class="title">
                            {{ item.name }}
                        </div>
                        <div class="desc">
                            模块介绍模块介绍模块介绍模块介绍模块介绍模块介绍模块介绍模块介绍
                        </div>
                    </div>
                </div>
            </a-card>
        </a-col>
    </a-row>
</template>
<script>
export default {
    name: 'Tempolate',
    // ['title', 'list']
    props: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: null
        }
    }
}
</script>
<style lang="less" scoped>
.tools-item {
    display: flex;
    align-items: center;
    padding: 24px 0px;

    .info {
        flex: 1;
        overflow: hidden;
        padding-left: 24px;

        .title {
            font-size: 21px;
            color: #333333;
            margin-bottom: 5px;
        }

        .desc {
            font-size: 14px;
            color: #999999;
        }
    }
}
</style>
