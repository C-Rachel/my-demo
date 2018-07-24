<template>
	<div>
		<xheader></xheader>
		<div class="div3">333</div>
	</div>
	
</template>

<style lang="scss">
	@import "../assets/css/public";
	@import "../assets/css/header";
	.div3 {
		width: 500px;
		height: 1000px;
		text-align: center;
		background-color: slateblue;
		margin: 0 auto;
		padding-top: d-vw(90px);
	}
</style>

<script>	
	import xheader from "../components/header.vue";
	export default {
		components: {
		    xheader
		},
		data() {
			return {
				
			};
		},
		methods: {

		}
	};
</script>