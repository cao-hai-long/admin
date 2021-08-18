<template>
	<div id="main-wrap">
		<div class="main-content">
			<div class="content">
				<router-view/>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		
	}
</script>
<style lang="scss" scoped>
	@import "../../../styles/main.scss";
	#main-wrap{
		width: 100%;
		// position: fixed;
		// top: 75px;
		// left: $navMenu;
		// height: 100vh;
		// right: 0;
		// bottom: 0;
		// -webkit-box-sizing: border;
		// border: 30px solid #f7f7f7;
		// border-bottom: none;
	}
	.main-content{
		width: 100%;
		height: 100vh;
		padding-top: $layoutHeader;
		@include webkit(box-sizing,border-box);
	}
	.content{
		width: 100%;
		height: 100%;
		border: 30px solid #f7f7f7;
		border-bottom: none;
		padding: 30px;
		@include webkit(box-sizing,border-box);
	}
	.open{
		.main-content {padding-left: $navMenu;}
	}
	.close{
		.main-content { padding-left: $navMenuMin;}
	}
</style>