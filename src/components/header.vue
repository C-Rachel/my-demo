<template>
	<header>
			
		<nav class="clearfix rel">
			<ul class="clearfix pc-view">
				<li>
					<router-link to="/">HOME</router-link>
				</li>
				<li>
					<router-link to="/about">ABOUT</router-link>
				</li>
				<li>
					<router-link to="/contact">CONTACT</router-link>
				</li>
			</ul>
			<p class="nav_icon mobile-view" @click="getNav()">
				<img v-show="navIcon == false" src="../assets/img/nav.png" />
				<img v-show="navIcon == true" src="../assets/img/nav_active.png" />
			</p>
			<ul v-show="navMobile == true">
				<li>
					<router-link to="/">HOME</router-link>
				</li>
				<li>
					<router-link to="/about">ABOUT</router-link>
				</li>
				<li>
					<router-link to="/contact">CONTACT</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				navIcon: false,
				navMobile: false
			};
		},
		methods: {
			getNav() {
				this.navIcon = !this.navIcon;
				this.navMobile = !this.navMobile;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../assets/css/public";
	@import "../assets/css/header";
</style>