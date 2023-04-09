<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	title: "一梦浮生",
	meta: [
		{
			name: 'description',
			content: '记录你的人生轨迹。用文字、图片记录下你生活的点点滴滴。'
		}
	]
});
</script>

<style lang="less">
@import "~/assets/_var.less";
@font-face {
  font-family: TChinese;
  src: url(~/assets/chinese.font.woff);
}
body {
	margin: 0;
	padding: 0;
	color: @theme-color;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
		Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
		sans-serif;
	font-size: 15px;
  background: #f6f6f6;
}
</style>
