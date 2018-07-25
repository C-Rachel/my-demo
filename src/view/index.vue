<template>
	<div>
		<xheader></xheader>
		<div class="wrap">
			<div class="swiper_box">
				<!-- swiper -->
				<swiper :options="swiperOption">
					<swiper-slide>
						<p><img src="../assets/img/153198501781866.jpg" /></p>
					</swiper-slide>
					<swiper-slide>
						<p><img src="../assets/img/153198502276069.jpg" /></p>
					</swiper-slide>
					<swiper-slide>
						<p><img src="../assets/img/153198503454011.jpg" /></p>
					</swiper-slide>
					<swiper-slide>
						<p><img src="../assets/img/147230530636949.jpeg" /></p>
					</swiper-slide>
					<swiper-slide>
						<p><img src="../assets/img/149511364240849.jpg" /></p>
					</swiper-slide>
					<swiper-slide>
						<p><img src="../assets/img/149529277451958.jpg" /></p>
					</swiper-slide>

					<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
					<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
					<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				</swiper>
			</div>
			<div class="contact_box">
				<ul class="clearfix">
					<li class="text-center">
						<p class="member_pic"><img src="../assets/img/153171866164394.jpg" /></p>
						<p>MANUEL NEUER</p>
						<p>March 27, 1986</p>
					</li>
					<li class="text-center">
						<p class="member_pic"><img src="../assets/img/153172953391795.jpg" /></p>
						<p>FRANCK RIBÉRY</p>
						<p>April 7, 1983</p>
					</li>
					<li class="text-center">
						<p class="member_pic"><img src="../assets/img/153172964464029.jpg" /></p>
						<p>ARJEN ROBBEN</p>
						<p>January 23, 1984</p>
					</li>
					<li class="text-center">
						<p class="member_pic"><img src="../assets/img/153173018270946.jpg" /></p>
						<p>THOMAS MÜLLER</p>
						<p>September 13, 1989</p>
					</li>
				</ul>
			</div>
			
		</div>

	</div>
</template>

<style lang="scss" scoped>
	@import "../assets/css/public";
	
	.swiper-container {
		width: d-vw(1200px);
	}
	
	.swiper_box {
		padding-top: d-vw(90px);
		font-size: 0;
	}
	
	.swiper-slide img {
		width: 100%;
	}
	
	.swiper-slide {
		width: d-vw(1200px);
	}
	
	.swiper-slide p {
		width: d-vw(1200px);
		margin: 0 auto;
	}
	
	.wrap {
		width: d-vw(1200px);
		margin: 0 auto;
	}
	
	.contact_box {
		width: 100%;
		padding: d-vw(80px) 0;
		li {
			float: left;
			width: d-vw(270px);
			margin-right: d-vw(40px);
			background-color: #fff;
			box-shadow: 6px 6px 10px #999;
			color: #888;
			cursor: pointer;
			padding-bottom: d-vw(20px);
			font-size: d-vw(18px);
		}
		li:hover {
			color: #e4003a;
		}
		li:nth-child(4n) {
			margin-right: 0;
		}
		.member_pic {
			width: d-vw(170px);
			margin: d-vw(20px) auto d-vw(10px);
		}
		img {
			width: 100%;
		}
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
				swiperOption: {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					slidesPerView: "auto",
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			};
		},
		methods: {

		}
	};
</script>