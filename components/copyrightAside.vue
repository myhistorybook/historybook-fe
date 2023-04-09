<template>
	<footer class="footer">
		<div class="footer-item">
			<a
				class="footer-link"
				target="_blank"
				rel="noopener noreferrer"
				href="https://beian.miit.gov.cn/"
				>鲁 ICP备15006514号 - 10</a
			>
		</div>
		<div class="footer-item">
			<a
				href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018602000174"
				rel="noopener noreferrer"
				target="_blank"
				class="footer-link"
			>
				<img src="~/assets/beian.png" class="img" />
				鄂公网安备 42018602000174号
			</a>
		</div>
		<div class="footer-item">
			<a
				class="footer-link"
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/johnnyzhang1992"
				>&copy; 2023 小小梦工场</a
			>
		</div>
	</footer>
</template>

<style lang="less" scoped>
.footer {
	color: #8590a6;
	font-size: 13px;
	line-height: 2;
	margin: 10px 0;
	padding-left: 5px;
	.footer-item {
		.footer-link {
			color: #8590a6;
			text-decoration: none;
			display: block;
			display: inline-flex;
			align-items: center;
			.img {
				margin-right: 5px;
			}
		}
	}
}
</style>
