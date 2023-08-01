<template>
    <div class="logo">
        <router-link :to="{ name: 'dashboard' }">
            <!-- <SvgIcon name="logo" /> -->
            <img class="icon-logo" src="/logo.png" alt="微策">
            <h1 v-if="showTitle">{{ title }}</h1>
        </router-link>
    </div>
</template>

<script lang="ts" setup name="Logo">
import SvgIcon from '@/components/SvgIcon/index.vue'

const props = defineProps({
    title: {
        type: String,
        default: 'WeDecide',
        required: false,
    },
    showTitle: {
        type: Boolean,
        default: true,
        required: false,
    },
})
</script>
