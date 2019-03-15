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
				
				<div class="group-box">
					<label>username</label>
					<input v-model="username" />
				</div>
				<div class="group-box">
					<label>username</label>
					<input type="password" v-model="userpwd" />
				</div>
				<!-- <button @click="getMsg()">UpUp</button> -->
				
			</form>
			<div class="question-box" v-if="pageList[0]">
				<div class="btnBox checkbox-btn-group btn-group clearfix">
					<div class="btn-list">
						<input type="checkbox" id="check_btn1" value="2" v-model="list" style="display: none;">
						<label for="check_btn1" @click="getCheckbox()">checkbox1</label>
					</div>
					<div class="btn-list">
						<input type="checkbox" id="check_btn2" value="3" v-model="list" style="display: none;">
						<label for="check_btn2" @click="getCheckbox()">checkbox2</label>
					</div>
					<div class="btn-list">
						<input type="checkbox" id="check_btn3" value="4" v-model="list" style="display: none;">
						<label for="check_btn3" @click="getCheckbox()">checkbox3</label>
					</div>				
				</div>
				<button v-bind:class="{ no_next: noNext }" class="next-btn text-uppercase" @click="next(0)" v-bind:disabled="isDisabled">Next</button>
			</div>
			<div class="question-box" v-if="pageList[1]">
				<div class="btnBox radio-btn-group btn-group clearfix">
					<div class="btn-list">
						<input type="radio" id="redio_btn1" value="0" v-model="btnRadio[0]" style="display: none;">
						<label for="redio_btn1" @click="getRadio()">嘻嘻嘻</label>
					</div>
					<div class="btn-list">
						<input type="radio" id="redio_btn2" value="1" v-model="btnRadio[0]" style="display: none;">
						<label for="redio_btn2" @click="getRadio()">哈哈哈</label>
					</div>
					<div class="btn-list">
						<input type="radio" id="redio_btn3" value="2" v-model="btnRadio[0]" style="display: none;">
						<label for="redio_btn3" @click="getRadio()">嘿嘿嘿嘿</label>
					</div>			
				</div>
				<button v-bind:class="{ no_next: noNext }" class="next-btn text-uppercase" @click="next(1)" v-bind:disabled="isDisabled">Next</button>
			</div>
			<div class="question-box" v-if="pageList[2]">
				<p class="texttext">Thank u</p>
			</div>
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
	.btnBox {
		width: 100%;
	}
	.texttext {
		margin-top: d-vw(35px);
		color: #fff;
	}
	.question-box button {
		&.active,
		&:hover {
			background: #0d133a;
			color: #ffffff;
		}
	}
	.btn-group {
	    margin: d-vw(35px) auto 0;
	    text-align: left;
	    color: #16192e;
	    .active {
	        background-color: #16192e;
	        color: #fff;
	    }
	    .btn-list {
	        float: left;
	        margin-right: d-vw(30px);
	        margin-bottom: d-vw(20px);
	    }
	    .btn-list:nth-child(3) {
	        margin-right: 0;
	    }
	}	
	.checkbox-btn-group [type="checkbox"]:checked~label {
	    background-color: #0d133a;
	    color: #fff;
	}	
	.checkbox-btn-group label {
	    cursor: pointer;
	    width: d-vw(200px);
	    border: 1px solid #16192e;
	    background-color: #fff;
	    font-size: d-vw(24px);
	    padding: d-vw(10px) 0;
	    display: inline-block;
	    color: #16192e;
	    text-align: center;
	    box-sizing: border-box;
	}	
	.checkbox-btn-group label:hover {
	    background: #0d133a;
	    color: #ffffff;
	}
	.radio-btn-group [type="radio"]:checked~label {
	    background-color: #0d133a;
	    color: #fff;
	}	
	.radio-btn-group label {
	    cursor: pointer;
	    width: d-vw(315px);
	    border: 1px solid #16192e;
	    background-color: #fff;
	    font-size: d-vw(24px);
	    padding: d-vw(10px) 0;
	    display: inline-block;
	    text-align: center;
	    box-sizing: border-box;
		color: #16192e;
	}	
	.radio-btn-group label:hover {
	    background: #0d133a;
	    color: #ffffff;
	}
	.next-btn,
	.no-next-btn {
	    border: 1px solid #fff;
	    background-color: #0d133a;
	    font-size: d-vw(12px);
	    width: d-vw(160px);
	    padding: d-vw(15px) 0;
	    color: #fff;
	    letter-spacing: 4px;
	    cursor: pointer;
	    margin-top: d-vw(20px);
	}
	.div2 .question-box .no_next {
	    background-color: #a4a4ab;
	    cursor: no-drop;
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
				},
				pageList: {
					0: 1,
					1: 0,
					2: 0
				},
				isDisabled: true,
				noNext: true,
				list: [],
				btnRadio: {
					0: "",
					1: "",
					2: ""
				},
				username: '',
				userpwd: ''
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
			},
			
			getMsg: function() {
				this.$http.post('./about', {
					'user_name': this.username,
					'user_pwd': this.userpwd
				}).then(res => {
					
				}).catch(res => {
					
				})
			},
			
			getCheckbox: function() {
				var self = this;
				setTimeout(function(){
					self.isDisabled = false;
					self.noNext = false;
					if(self.list.length == 0) {
						self.isDisabled = true;
						self.noNext = true;
					}
				}, 0)
			},
			next: function(num) {				
				this.pageList[1 + num] = 1;
				this.pageList[num] = 0;
				this.isDisabled = true;
				this.noNext = true;
			},
			getRadio: function() {				
				this.isDisabled = false;
				this.noNext = false;
			}
		},
		created: function(){
			this.getData();
			this.unwatch_total = this.$watch('meta', this.getData, {deep: true}); 		
			this.unwatch_lazy = this.$watch('lazy', this.getA, {deep: true}); 
		},
	};
</script>