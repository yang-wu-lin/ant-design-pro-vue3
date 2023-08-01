<template>
    <a-card title="知识库" :bordered="false">
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
    name: 'Knowledge',
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
.ant-card {
    height: 866px;
    overflow: hidden;
}

.card-box {
    .list {
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &+.item {
                margin-top: 22px;
                padding-top: 22px;
                border-top: 1px solid #eee;
            }

            .meta {
                flex: 1;
                overflow: hidden;
                padding: 0px 24px;

                .title {
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    margin-bottom: 5px;

                    .tag {
                        margin-left: 10px;
                    }
                }

                .desc {
                    font-size: 16px;
                }
            }

            .action {
                .ant-btn {
                    height: 36px;

                    .icon {
                        width: 16px;
                        height: 16px;
                        margin-right: 8px;
                    }
                }
            }
        }
    }
}
</style>
