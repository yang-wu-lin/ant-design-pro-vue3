<template>
    <transition name="showHeader">
        <a-layout-header
            :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed',]"
            :style="{ padding: '0' }">
            <div v-if="mode === 'sidemenu'" class="header">
                <Breadcrumb />
                <!-- <span @click="toggle">
                    <template v-if="device === 'mobile'">
                        <MenuFoldOutlined v-if="collapsed" class="trigger" />
                        <MenuUnfoldOutlined v-else class="trigger" />
                    </template>
                    <template v-else>
                        <MenuUnfoldOutlined v-if="collapsed" class="trigger" />
                        <MenuFoldOutlined v-else class="trigger" />
                    </template>
                </span> -->
                <user-menu :theme="theme"></user-menu>
            </div>

        </a-layout-header>
    </transition>
</template>

<script lang="ts" setup name="GlobalHeader">
import UserMenu from '../tools/UserMenu/index.vue'
import SMenu from '../Menu/Menu.vue'
import Logo from '../tools/Logo.vue'
import Breadcrumb from '@/components/tools/Breadcrumb.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined, ReloadOutlined } from '@ant-design/icons-vue'
import useSiteSettings from '@/store/useSiteSettings'
const props = defineProps({
    mode: {
        type: String,
        // sidemenu, topmenu
        default: 'sidemenu'
    },
    menus: {
        type: Array,
        required: true
    },
    theme: {
        type: String,
        required: false,
        default: 'dark'
    },
    collapsed: {
        type: Boolean,
        required: false,
        default: false
    },
    device: {
        type: String,
        required: false,
        default: 'desktop'
    }
})
const visible = ref<boolean>(true)
const oldScrollTop = ref<number>(0)
const ticking = ref<boolean>(false)

const { sidebarOpened, device, fixedHeader, autoHideHeader } = useSiteSettings()
// 下滑时隐藏 Header
const handleScroll = () => {
    if (!autoHideHeader.value) {
        return
    }

    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    if (!ticking.value) {
        ticking.value = true
        requestAnimationFrame(() => {
            if (oldScrollTop.value > scrollTop) {
                visible.value = true
            } else if (scrollTop > 200 && visible.value) {
                visible.value = false
            } else if (scrollTop < 200 && !visible.value) {
                visible.value = true
            }
            oldScrollTop.value = scrollTop
            ticking.value = false
        })
    }
}


const emit = defineEmits(['toggle', 'refresh'])
const toggle = () => {
    emit('toggle')
}

onMounted(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
    document.body.removeEventListener('scroll', handleScroll, true)
})

const refreshPage = () => {
    emit('refresh')
}

</script>

<style lang="less">
@import '../../style/index.less';
</style>
