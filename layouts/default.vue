<template>
	<div class="page">
		<layout-header />
		<div class="container">
			<div class="content">
				<slot />
			</div>
			<aside class="aside">
				<aside-card>
					<template #title> 关于网站名称 </template>
					<div class="contant" style="font-size: 13px;">
						<div>世事漫随流水，算来<b style="color:
						#333">一梦浮生</b>。</div>
						<div>醉乡路稳宜频到，此外不堪行。</div>
						<span style="font-weight: 500;">李煜 《乌夜啼·昨夜风兼雨》</span>
					</div>
				</aside-card>
				<copyright-aside />
			</aside>
		</div>
	</div>
</template>

<style lang="less" scoped>
@import "~/assets/_var.less";
.page {
	height: 100vh;
	overflow-y: auto;
}
.container {
	max-width: @content-max-width;
	margin: 0 auto;
	display: flex;
	padding-top: 62px;
	box-sizing: border-box;
	min-height: 100%;
	.content {
		flex: 1;
		background: #fff;
		padding: 16px 20px;
		margin-right: 10px;

		-webkit-box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
		box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
	}
	.aside {
		width: 296px;
	}
}
</style>
