<script setup lang="ts">
	import { datas } from '.././data';
	const openUrl = (url: string) => {
		window.open(url);
	};
	const defaultUse = () => {
		const arr = [];
		for (const itemCategry of datas) {
			for (const itemWebSite of itemCategry.webSites) {
				if (itemWebSite.isUse === 1) {
					arr.push(itemWebSite);
				}
			}
		}
		return arr;
	};
	const defaultDatas = defaultUse();
</script>

<template>
	<div>
		<el-divider content-position="left">常用</el-divider>
		<el-space wrap>
			<div
				class="item-box"
				v-for="itemWebSite in defaultDatas"
				:key="itemWebSite.id"
				@click="openUrl(itemWebSite.url)"
			>
				<el-card class="box-card" shadow="hover" onclick="">
					<el-tag size="large">{{ itemWebSite.name }}</el-tag>
				</el-card>
			</div>
		</el-space>
	</div>
	<div v-for="itemCategry in datas" :key="itemCategry.categoryName">
		<el-divider content-position="left">{{
			itemCategry.categoryName
		}}</el-divider>
		<el-space wrap>
			<div
				class="item-box"
				v-for="itemWebSite in itemCategry.webSites"
				:key="itemWebSite.id"
				@click="openUrl(itemWebSite.url)"
			>
				<el-card class="box-card" shadow="hover" onclick="">
					<el-tag size="large">{{ itemWebSite.name }}</el-tag>
				</el-card>
			</div>
		</el-space>
	</div>
</template>

<style scoped>
	.item-box {
		flex: 0 0 0;
	}
	.item-box:hover {
		cursor: pointer;
	}
	.el-tag {
		padding: 0 11px;
		height: 70px;
		min-width: 125px;
		--el-icon-size: 16px;
		&:deep(.el-tag__content) {
			font-size: 2rem;
		}
	}
</style>
