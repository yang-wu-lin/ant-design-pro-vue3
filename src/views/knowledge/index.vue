<template>
    <div class="knowledge">
        <div class="vabTabsBox">
            <div class="nav-tabs">
                <div class="nav-tabs_item active">
                    <span>推荐</span>
                </div>
                <div class="nav-tabs_item">
                    <span>热门</span>
                </div>
                <div class="nav-tabs_item">
                    <span>最新</span>
                </div>
            </div>

            <div class="search">
                <a-input v-model:value="search" placeholder="财务公式算法">
                    <!-- <template #suffix>
                        <search-outlined style="color: #999" />
                    </template> -->
                </a-input>
            </div>
            <div></div>
        </div>
        <div class="articles-list">
            <div class="item" v-for="(item, index) in data" :key="index">
                <div class="item-content">
                    <div class="title"><a @click="$multiRedirect('/tools-detail')">求大神讲解，如何计算以下的财务公式？</a></div>
                    <p>
                        母件 BOM 成本=∑《02.01.BOM
                        信息表》对应的非采购件子件的“子件耗量（含损耗）”×下一层级子件成本+∑采购件子件的“子件耗量（含损耗）”×《03.01.材料价格表》对应的“单位采购成本（元）”根据《01.01.销售预测表（通用）》的“产品编码
                        ID”字段（不去重复），对应的不含税售价×对应的销量，得到该行产品的销售收入...
                    </p>
                    <div class="info">
                        <a-button type="primary" ghost>
                            <!-- <template #icon>
                                <CaretUpOutlined style="fontSize:18px" />
                            </template> -->
                            点赞 180
                        </a-button>
                        <div class="action">
                            <svg-icon icon="icon-pinglun"></svg-icon>
                            999+ 条评论
                        </div>
                        <div class="action">
                            <svg-icon icon="icon-zshare"></svg-icon>
                            转发
                        </div>

                    </div>
                </div>
            </div>

            <a-pagination v-model:current="current1" :total="500" @change="onChange" />

        </div>
    </div>
</template>

<script lang="ts" setup name="knowledge">


const data = [];
for (let i = 0; i < 50; i++) {
    data.push({
        key: i,
        name: `“微策”运算方案说明书 ${i}`,
        file_format: 'EXCEL',
        file_size: '20MB',
        create_time: '2023-07-05 11:58:58'
    });
}

</script>
<style lang="less" scoped>
.knowledge {
    height: auto !important;

    .ant-pagination {
        padding: 16px;
        margin-top: 16px;
    }
}

.vabTabsBox {
    margin-bottom: 20;

    .search {
        width: 400px;
    }
}

.articles-list {
    .item {
        padding: 24px;
        margin-top: 20px;
        background-color: #fff;

        .item-content {
            .title {
                a {
                    color: #333;
                    font-size: 18px;
                    font-weight: bold;

                    &:hover {
                        // color: @primary-color;
                    }
                }
            }

            p {
                font-size: 15px;
                line-height: 28px;
                display: -webkit-box;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .info {
                display: flex;
                align-items: center;

                .action {
                    display: inline-flex;
                    align-items: center;
                    color: #666666;
                    margin-left: 24px;

                    .icon {
                        color: #666666;
                        margin-right: 6px;
                    }
                }
            }
        }
    }
}
</style>
