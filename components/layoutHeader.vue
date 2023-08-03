<template>
	<header class="header">
		<div class="container">
			<NuxtLink to="/" class="logo">一梦浮生</NuxtLink>
			<ul class="tab-list">
				<li
					v-for="tab in tabList"
					:key="tab.path"
					@click="handleClick(tab)"
					class="tab-item"
				>
					<NuxtLink
						class="link"
						:to="tab.path"
						:class="tab.path === activePath ? 'is-active' : ''"
					>
						{{ tab.pathName }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>
<script setup>
const route = useRoute();
const activePath = ref(route.path);
const tabList = [
	{
		path: "/",
		pathName: "首页",
	},
	{
		path: "/about",
		pathName: "关于我们",
	},
];
const handleClick = (tab) => {
	activePath.value = tab.path;
};
</script>
<style lang="less" scoped>
@import "~/assets/_var.less";
.header {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	color: @theme-color;
	background-color: #ffffff;
	box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
	transition-property: background-color, box-shadow;
	transition-duration: 0.25s;
	transition-timing-function: ease-in;
	.container {
		display: flex;
		align-items: center;
		max-width: @content-max-width;
		margin: 0 auto;
		height: 52px;
	}
	.logo {
		color: @primary-color;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		letter-spacing: 1px;
		font-family: TChinese, SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi,
			"Microsoft YaHei";
		text-decoration: none;
	}
	.tab-list {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		.tab-item {
			list-style: none;
			padding: 0 20px;
			cursor: pointer;
		}
		.link {
			color: @theme-color;
			text-decoration: none;
			position: relative;
			display: inline-block;
			line-height: 22px;
			padding: 14px 0;
			&:hover {
				color: @primary-color;
				font-weight: 600;
			}
			&.is-active {
				font-weight: 600;
			}
			&.is-active::after {
				height: 4px;
				background: @primary-color;
				bottom: -1px;
				content: "";
				height: 3px;
				left: 0;
				position: absolute;
				right: 0;
			}
		}
	}
}
</style>
