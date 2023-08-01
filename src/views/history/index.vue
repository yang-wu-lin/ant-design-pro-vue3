<template>
    <div class="history">
        <div class="header">
            <div class="title">历史方案</div>
            <div class="subtitle">支持查看本地的历史方案</div>
        </div>

        <div class="body">
            <div id="table-container" class="children">
                <div class="searchBox">
                    <div>
                        <a-space :size="16">
                            <a-radio-group button-style="solid">
                                <a-radio-button value="a">运算方案1</a-radio-button>
                                <a-radio-button value="b">运算方案2</a-radio-button>
                            </a-radio-group>

                            <a-button type="primary" :disabled="!hasCompared">方案对比</a-button>
                            <a-button type="primary" :disabled="!hasSelected">批量下载</a-button>
                        </a-space>
                    </div>
                    <div>
                        <a-space :size="16">
                            <a-range-picker v-model:value="value1" />
                            <a-input v-model:value="search">
                                <template #suffix>
                                    <search-outlined style="color: #999" />
                                </template>
                            </a-input>
                        </a-space>
                    </div>
                </div>

                <div class="tableWrapper">

                    <a-table :scroll="{ y: '100%' }"
                        :row-selection="{ columnWidth: 50, selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                        :columns="columns" :data-source="data" :pagination="pagination">
                        <template #bodyCell="{ column, text, record }">

                            <template v-if="column.dataIndex === 'operation'">
                                <a-button type="primary">下载本地</a-button>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Home">
const columns = [
    {
        title: '方案名称',
        dataIndex: 'name',
        width: 350,
    },
    {
        title: '文件格式',
        dataIndex: 'file_format',
        width: 200,
        align: 'center'
    },
    {
        title: '文件大小',
        dataIndex: 'file_size',
        width: 200,
        align: 'center'
    },
    {
        title: '方案创建时间',
        dataIndex: 'create_time',
        align: 'center'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: 'center'
    },

];

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

<style scoped lang="less">
</style>
