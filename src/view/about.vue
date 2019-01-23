<template>
	<div>
		<xheader></xheader>
		<div class="div2">
			<p class="titlep">关于input监听计算</p>
			<form>
				<div class="group-box">
					<label>Total</label>
					<input v-model="meta.total" disabled="disabled" />
				</div>
				<div class="group-box">
					<label>1</label>
					<input v-model="meta.aaa" />
				</div>
				<div class="group-box">
					<label>2</label>
					<input v-model="meta.ttt" />
				</div>
				<!-- v-model.lazy即input失去焦点之后 -->
				<div class="group-box">
					<label>lazyTotal</label>
					<input v-model="lazy.lllazy" disabled="disabled" />
				</div>
				<div class="group-box">
					<label>A</label>
					<input v-model.lazy="lazy.bb" />
				</div>
				<div class="group-box">
					<label>B</label>
					<input v-model.lazy="lazy.zz" />
				</div>
			</form>
		</div>
	</div>

</template>

<style lang="scss">
	@import "../assets/css/public";
	.div2 {
		width: 500px;
		height: 1000px;
		background-color: steelblue;
		margin: 0 auto;
		padding-top: d-vw(90px);
		padding-left: 20px;
	}
	.titlep {
		font-size: 26px;
		color: #fff;
		margin: 30px 0;
		text-align: center;
	}
	label {
		display: block;
		color: #fff;
		font-size: 20px;
		margin-bottom: 5px;
	}
	input {
		border: 0;
		appearance: none;
		border-radius: 5px;
		outline: none;
		-webkit-appearance: none;
		border-bottom: 1px solid #310340;
		padding: 8px;
		display: inline-block;
		width: 200px;
	}
	.group-box {
		margin-top: 20px;
	}
</style>

<script>
	import xheader from "../components/header.vue";
	import Vue from "vue";
	import VueHttp from 'vue-resource';
	export default {
		components: {
			xheader
		},
		data() {
			return {
				meta: {
					"total": 0,
					"ttt": 0,
					"aaa": 0,
				},	
				lazy: {
					"lllazy": "0.00",
					"bb": "0.00",
					"zz": "0.00",
				}
			};
		},
		methods: {
			unwatch: function(){
				
			},
			getData: function(){
				var self = this;				
				self.meta.total = parseInt(self.meta.ttt)+parseInt(self.meta.aaa);
			},
			getA: function(){
				var self = this;	
				// 如果数据为小数则可以用parseFloat()，保留小数位数可以使用toFixed() 四舍五入保留
				self.lazy.lllazy = (parseFloat(self.lazy.bb)+parseFloat(self.lazy.zz)).toFixed(2);				
			}
		},
		created: function(){
			this.getData();
			this.unwatch_total = this.$watch('meta', this.getData, {deep: true}); 		
			this.unwatch_lazy = this.$watch('lazy', this.getA, {deep: true}); 
		},
	};
</script>