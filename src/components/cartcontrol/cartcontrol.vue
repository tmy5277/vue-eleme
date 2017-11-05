<template>
	<div class="cartcontrol">
	<transition name="move">
		<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">
			<span class="inner icon-remove_circle_outline"></span>
		</div>
	</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}
		</div>
		<div class="cart-add icon-add_circle" @click="addCart($event)"></div>
	</div>
</template>

<script>
import Vue from 'vue';
import Bus from '../../common/js/bus.js';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
			// console.log(this.food);
		},
		methods: {
			addCart(event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					// console.log(this.food.count);
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
				Bus.$emit('cart.add',event.target);
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			},
		},
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			padding: 6px
			transition: all 0.4s linear
			.inner
				display: inline-block
				line-height: 24px
				font-size: 24px
				color: rgb(0,160,220)
				transition: all 0.4s linear
				transform: rotate(0)//完成状态
			&.move-enter, &.move-leave-to
				/*开始过渡时的状态
			      decrease按钮的v-show改变会触发*/
				opacity: 0
				transform: translate3d(24px,0,0)
				.inner
					transform: rotate(180deg)
		.cart-count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			line-height: 24px
			text-align: center
			font-size: 10px
			color: rgb(147,153,159)
		.cart-add
			display: inline-block
			padding: 6px
			line-height: 24px
			font-size: 24px
			color: rgb(0,160,220)
</style>