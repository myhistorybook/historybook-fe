<template>
	<div class="aside-card">
		<div class="card-title">
			<slot name="title" />
		</div>
		<div class="card-content">
			<slot />
		</div>
	</div>
</template>
<script setup>
defineProps({
	title: {
		type: String,
		default: "",
	},
});
</script>
<style lang="less" scoped>
.aside-card {
	padding: 16px 14px;
	background: #fff;
	-webkit-box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
	box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
	.card-title {
		box-sizing: border-box;
		margin: 0px 0px 16px;
		min-width: 0px;
		-webkit-box-align: center;
		align-items: center;
		color: rgb(68, 68, 68);
		font-weight: 500;
		font-size: 14px;
		display: flex;
        border-bottom: 1px solid #f5f5f5;
        line-height: 28px;
	}
	.card-content {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		overflow: auto hidden;
		scroll-snap-type: x mandatory;
		width: 100%;
	}
}
</style>
