<template>
	<div>
		<xheader></xheader>
		<div class="div2">222</div>
	</div>

</template>

<style lang="scss">
	@import "../assets/css/public";
	.div2 {
		width: 500px;
		height: 1000px;
		text-align: center;
		background-color: seagreen;
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