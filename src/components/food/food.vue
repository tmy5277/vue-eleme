<template>
	<transition name="move">
		<div class="food" v-show="showFlag">
			<div class="food-content">
				<div class="image-header">
					<img :src="food.img">
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		food: {
			type: Object
		}
	},
	data() {
		return {
			showFlag: false,
		};
	},
	methods: {
		show() {
			this.showFlag = true;
		},
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		top: 0
		left: 0
		bottom: 48px //底部还有购物车
		z-index: 30
		width: 100%
		background: #fff
		transition: all 0.25s linear
		&.move-enter, &.move-leave
			transform: translate3d(100%,0,0)
		.image-header
			position: relative
			width: 100%
			height: 0
			padding-top: 100%
			img
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
</style>