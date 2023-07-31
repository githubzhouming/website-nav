<script setup lang="ts">
	import { ElConfigProvider } from 'element-plus';
	import zhCn from 'element-plus/es/locale/lang/zh-cn';
	import WebSiteNav from './components/WebSiteNav.vue';
</script>

<template>
	<ElConfigProvider :size="'small'" :z-index="3000" :locale="zhCn">
		<WebSiteNav />
	</ElConfigProvider>
</template>

<style scoped></style>
