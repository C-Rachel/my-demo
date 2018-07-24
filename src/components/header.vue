<template>
	<header>
		<nav class="clearfix">
			<!--<p class="logo_box"><img src="../assets/img/logo.png" /></p>-->
			<ul class="clearfix">
				<li><router-link to="/">HOME</router-link></li>
				<li><router-link to="/about">ABOUT</router-link></li>
				<li><router-link to="/contact">CONTACT</router-link></li>
			</ul>
		</nav>	
	</header>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	};
</script>

<style lang="scss">
	@import "../assets/css/header";
</style>