<template>
    <a-card title="知识库" :bordered="false">
        <div class="card-box">
            <div class="list" :data-source="data">
                <div class="item" v-for="(item, index) in 4" :key="index">
                    <div class="avatar">
                        <a-avatar shape="square" :size="44"
                            src="https://www.kuniaovps.com/_next/static/images/avatar2-1ba37dc4b602d2115c347696cf39e760.png" />
                    </div>
                    <div class="meta">
                        <div class="title">
                            我是一只小鸟
                            <div class="tag"><a-tag color="pink">管理员</a-tag></div>
                        </div>
                        <div class="desc">财务常用计算公式一、增值税 1、一般纳税人 应纳税额=销项税额—进项税额 销项税...</div>
                    </div>

                </div>
            </div>
        </div>
    </a-card>
</template>

<script>

</script>
<style lang="less" scoped>
.card-box {
    height: 320px;

    .list {
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &+.item {
                margin-top: 18px;
                padding-top: 18px;
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
