<template>
    <a-card title="知识库">
        <div class="card-box">
            <div class="list" :data-source="data">
                <div class="item" v-for="(item, index) in 8" :key="index">
                    <div class="avatar">
                        <a-avatar shape="square" :size="55"
                            src="https://www.kuniaovps.com/_next/static/images/avatar2-1ba37dc4b602d2115c347696cf39e760.png" />
                    </div>
                    <div class="meta">
                        <div class="title">
                            我是一只小鸟
                            <div class="tag"><a-tag color="pink">管理员</a-tag></div>
                        </div>
                        <div class="desc">求大神讲解，如何计算以下的财务公式？</div>
                    </div>
                    <div class="action">
                        <a-button type="primary">
                            <template #icon>
                                <svg-icon icon="icon-works" />
                            </template>
                            写回答
                        </a-button>
                    </div>
                </div>
            </div>
        </div>
    </a-card>
</template>

<script>
export default {
    name: 'ChartCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        total: {
            type: [Function, Number, String],
            required: false,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/style/index.less';

.chart-card-header {
    position: relative;
    overflow: hidden;
    width: 100%;

    .meta {
        position: relative;
        overflow: hidden;
        width: 100%;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        line-height: 22px;
    }
}

.chart-card-action {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
}

.chart-card-footer {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.65);

    >* {
        position: relative;
    }

    .field {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
    }
}

.chart-card-content {
    margin-bottom: 12px;
    position: relative;
    height: 46px;
    width: 100%;

    .content-fix {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
}

.total {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    color: #000;
    margin-top: 4px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    height: 38px;
}

.darkMode {
    .chart-card-header {
        .meta {
            color: @dark-active-font-color;
        }
    }

    .total {
        color: @dark-active-font-color;
    }

    .chart-card-footer {
        color: @dark-active-font-color;
    }
}
</style>
