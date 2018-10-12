<template>
	<div>
		<xheader></xheader>		
		<div v-for="(value, key) in pageData" class="div3">
			<p class="title">TEST DATA</p>
			<p>ID: {{value.id}}</p>
			<p>NAME: {{value.name}}</p>
		</div>
	</div>

</template>

<style lang="scss">
	@import "../assets/css/public";
	.title {
		font-size: 22px;
		text-align: center;
		margin: 20px auto;
	}
	.div3 {
		width: 62.5vw;
		background-color: slateblue;
		margin: 0 auto;
		padding: d-vw(90px) 20px 20px;
		color: white;
		font-size: 18px;
	}
</style>

<script>
	import xheader from "../components/header.vue";
	import Vue from "vue";
	import VueHttp from 'vue-resource'
	
	Vue.use(VueHttp);
	
	export default {
		components: {
			xheader
		},
		data() {
			return {
				pageData: {},
			};
		},
		methods: {
			
		},
		created:function(){
			this.$http.get('https://virtserver.swaggerhub.com/C-Rachel/test1/1.0.0/inventory').then(function(res){
				console.log(res.body);
				Vue.set(this, 'pageData', res.body);
				console.log(this.pageData);
			}).catch(function(json) {
				console.log(json.errmsg);
			});
		}
	};
</script>