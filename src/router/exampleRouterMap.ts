import { BasicLayout, RouteView } from '@/layouts'
import { Router } from './types'

export const example: Router = {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard',
    children: [
        // 工作台
        {
            path: '/dashboard',
            name: 'dashboard',
            redirect: '/dashboard/dashboard',
            component: RouteView,
            meta: { title: '工作台', icon: 'icon-desk', keepAlive: true, permission: ['admin'] },
            hideChildrenInMenu: true,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/dashboard/dashboard.vue'),
                    meta: { title: '工作台', keepAlive: false, permission: ['admin'], hidden: true, }
                },
                {
                    path: 'analysis/:pageNo([1-9]\\d*)?',
                    name: 'Analysis',
                    component: () => import('@/views/dashboard/Workplace.vue'),
                    meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['admin'], hidden: true }
                },
                // 外部链接
                {
                    path: 'monitor',
                    name: 'Monitor',
                    meta: { title: 'menu.dashboard.monitor', target: 'http://www.baidu.com', permission: ['admin'], hidden: true, blank: true }
                },

            ]
        },
        // 常用工具
        {
            path: '/tool',
            name: 'tool',
            component: RouteView,
            redirect: '/tool/tool',
            meta: { title: '常用工具', icon: 'icon-editor' },
            children: [
                {
                    path: 'tool1',
                    name: 'tool1',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: '常用工具' }
                },
                {
                    path: 'tool2',
                    name: 'tool2',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: '常用工具' }
                }
            ]
        },
        // 历史方案
        {
            path: '/history',
            name: 'history',
            component: () => import('@/views/history/index.vue'),
            meta: { title: '历史方案', icon: 'icon-zhishi' },
        },
        // 知识库
        {
            path: '/knowledge',
            name: 'knowledge',
            component: () => import('@/views/knowledge/index.vue'),
            meta: { title: '知识库', icon: 'icon-study' },
        },
        // 创作中心
        {
            path: '/works',
            name: 'works',
            component: RouteView,
            redirect: '/works/level',
            meta: { title: '创作中心', icon: 'icon-works' },
            children: [
                {
                    path: 'level',
                    name: 'Level',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: '我的等级' }
                },
                {
                    path: 'list',
                    name: 'List',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: '内容创作' }
                },
                {
                    path: 'income',
                    name: 'Income',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: '内容创作' }
                }
            ]
        },
        // 学习平台
        {
            path: '/study',
            name: 'study',
            component: () => import('@/views/Home.vue'),
            meta: { title: '学习平台', icon: 'icon-book' },
        },
        // 模版下载
        {
            path: '/template',
            name: 'template',
            component: () => import('@/views/Home.vue'),
            meta: { title: '模版下载', icon: 'icon-down' },
        },

        // 企业设置
        {
            path: '/account',
            component: RouteView,
            redirect: '/account/information',
            name: 'account',
            meta: { title: '企业设置', icon: 'icon-user', keepAlive: true },
            children: [

                {
                    path: '/account/member',
                    name: 'member',
                    component: () => import('@/views/account/index.vue'),
                    meta: { title: '成员管理', keepAlive: true }
                },
                {
                    path: '/account/department',
                    name: 'department',
                    component: () => import('@/views/account/index.vue'),
                    meta: { title: '部门管理', keepAlive: true }
                },
                {
                    path: '/account/information',
                    name: 'information',
                    component: () => import('@/views/account/index.vue'),
                    meta: { title: '企业信息', keepAlive: true }
                },
                // {
                //     path: '/account/settings',
                //     name: 'settings',
                //     component: () => import('@/views/Home.vue'),
                //     meta: { title: 'menu.account.settings', hideHeader: true },
                //     redirect: '/account/settings/basic',
                //     children: [
                //         {
                //             path: '/account/settings/basic',
                //             name: 'BasicSettings',
                //             component: () => import('@/views/Home.vue'),
                //             meta: { title: 'menu.account.settings', hidden: true }
                //         },
                //         {
                //             path: '/account/settings/security',
                //             name: 'SecuritySettings',
                //             component: () => import('@/views/Home.vue'),
                //             meta: {
                //                 title: 'account.settings.menuMap.security',
                //                 hidden: true,
                //                 keepAlive: true,
                //                 permission: ['user']
                //             }
                //         },
                //         {
                //             path: '/account/settings/custom',
                //             name: 'CustomSettings',
                //             component: () => import('@/views/Home.vue'),
                //             meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true }
                //         },
                //         {
                //             path: '/account/settings/binding',
                //             name: 'BindingSettings',
                //             component: () => import('@/views/Home.vue'),
                //             meta: { title: 'account.settings.menuMap.binding', hidden: true, keepAlive: true }
                //         },
                //         {
                //             path: '/account/settings/notification',
                //             name: 'NotificationSettings',
                //             component: () => import('@/views/Home.vue'),
                //             meta: {
                //                 title: 'account.settings.menuMap.notification',
                //                 hidden: true,
                //                 keepAlive: true,
                //                 permission: ['user']
                //             }
                //         }
                //     ]
                // },

            ]
        },
        // 学习平台
        {
            path: '/cost',
            name: 'cost',
            component: () => import('@/views/Home.vue'),
            meta: { title: '费用中心', icon: 'icon-cost' },
        },
        // 模版下载
        {
            path: '/invoice',
            name: 'invoice',
            component: () => import('@/views/Home.vue'),
            meta: { title: '发票管理', icon: 'icon-invoice' },
        },
        // list
        {
            path: '/list',
            name: 'list',
            component: RouteView,
            redirect: '/list/table-list',
            meta: { title: 'menu.list.title', icon: 'bx-analyse', permission: ['table'] },
            children: [
                {
                    path: '/list/table-list/:pageNo([1-9]\\d*)?',
                    name: 'TableListWrapper',
                    hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
                    component: () => import('@/views/Home.vue'),
                    meta: { title: 'menu.list.table-list', keepAlive: true }
                },
                {
                    path: '/list/basic-list',
                    name: 'BasicList',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: 'menu.list.basic-list', keepAlive: true }
                },
                {
                    path: '/list/card',
                    name: 'CardList',
                    component: () => import('@/views/Home.vue'),
                    meta: { title: 'menu.list.card-list', keepAlive: true }
                },
                {
                    path: '/list/search',
                    name: 'SearchList',
                    component: () => import('@/views/Home.vue'),
                    redirect: '/list/search/article',
                    meta: { title: 'menu.list.search-list.title', keepAlive: true },
                    children: [
                        {
                            path: '/list/search/article',
                            name: 'SearchArticles',
                            component: () => import('@/views/Home.vue'),
                            meta: { title: 'menu.list.search-list.articles' }
                        },
                        {
                            path: '/list/search/project',
                            name: 'SearchProjects',
                            component: () => import('@/views/Home.vue'),
                            meta: { title: 'menu.list.search-list.projects' }
                        },
                        {
                            path: '/list/search/application',
                            name: 'SearchApplications',
                            component: () => import('@/views/Home.vue'),
                            meta: { title: 'menu.list.search-list.applications' }
                        }
                    ]
                }
            ]
        },



        // {
        //     path: '/dynamicForm',
        //     name: 'dynamicForm',
        //     component: () => import('@/views/dynamicForm/index.vue'),
        //     meta: { title: 'menu.dynamicForm', icon: 'bx-analyse' }
        // },
        // {
        //     path: '/logicflow',
        //     name: 'logicflow',
        //     component: () => import('@/views/logicflow/index.vue'),
        //     meta: { title: 'menu.logicflow', icon: 'bx-analyse' }
        // },
        // {
        //     path: '/makeChart',
        //     name: 'makeChart',
        //     component: () => import('@/views/makeChart/index.vue'),
        //     meta: { title: 'menu.makeChart', icon: 'bx-analyse' }
        // },

    ]
}
