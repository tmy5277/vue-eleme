<template>

    <div class="seller" ref="sellerBS">
        <div class="seller-content">
            <div class="overview">
                <h1 class="title">{{seller.name}}</h1>
                <div class="desc border-1px">
                    <star :size="36" :score="seller.score"></star>
                    <span class="text">({{seller.ratingCount}})</span>
                    <span class="text">月售{{seller.sellCount}}单</span>
                </div>
                <ul class="remark">
                    <li class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="stress">{{seller.minPrice}}元</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>商家配送</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryPrice}}元</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>平均配送时间</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryTime}}分钟</span>
                        </div>
                    </li>
                </ul>
            </div>
            <split></split>
            <div class="bulletin">
                <h1 class="title">公告与活动</h1>
                <div class="content-wrapper border-1px">
                    <p class="content">{{seller.bulletin}}</p>
                </div>

                <ul v-if="seller.supports" class="supports">
                    <li class="support-item border-1px" 
                    v-for="(item,index) in seller.supports">
                        <span class="icon" 
                        :class="classMap[seller.supports[index].type]">
                        </span>
                        <span class="text">
                        {{seller.supports[index].description}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import star from '../star/star.vue';
import split from '../split/split.vue';
import BScroll from 'better-scroll';

export default{
	props: {
        seller: {
            type: Object
        }
    },
    created(){
        this.classMap = ['decrease','discount','special','invoice','guarantee'];

        this._initScroll();
    },
    methods: {
        _initScroll(){
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.sellerBS, {
                        click: true
                    });
                } else {
                    this.scroll.refresh();
                }
            });
        }
        
    },
    watch: {
        seller() {
            this._initScroll();
        }
    },
    components: {
        star,
        split,
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

    .seller
        position: absolute
        top: 174px
        bottom: 0
        left: 0
        width: 100%
        overflow: hidden
        .overview
            padding: 18px
            .title
                margin-bottom: 8px
                line-height: 14px
                font-size: 14px
                color: rgb(7,17,27)
            .desc
                padding-bottom: 18px
                border-1px(rgba(7,17,27,0.1))
                font-size: 0
                .star
                    display: inline-block
                    margin-right: 8px
                    vertical-align: top
                .text
                    display: inline-block
                    margin-right: 12px
                    line-height: 18px
                    vertical-align: top
                    font-size: 10px
                    color: rgb(77,85,93)
            .remark
                display: flex
                padding-top: 18px
                .block
                    flex: 1
                    text-align: center
                    border-right: 1px solid rgba(7,17,27,0.1)
                    &:last-child
                        border: none
                    h2
                        margin-bottom: 4px
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147,153,159)
                    .content
                        line-height: 24px
                        font-size: 10px
                        color: rgb(7,17,27)
                        .stress
                            font-size: 24px
        .bulletin
            padding: 18px 18px 0 18px
            .title
                margin-bottom: 8px
                line-height: 14px
                font-size: 14px
                color: rgb(7,17,27)
            .content-wrapper
                padding: 0 12px 16px 12px
                border-1px(rgba(7,17,27,0.1))
                .content
                    line-height: 24px
                    font-size: 12px
                    font-weight: 200
                    color: rgb(240,20,20)
            .supports
                .support-item
                    padding: 16px 12px
                    font-size: 0
                    border-1px(rgba(7,17,27,0.1))
                    .icon
                        display: inline-block
                        width: 16px
                        height: 16px
                        vertical-align: top
                        margin-right: 6px
                        background-size: 16px 16px
                        background-repeat: no-repeat
                        &.decrease
                            bg-img('decrease_4')
                        &.discount
                            bg-img('discount_4')
                        &.guarantee
                            bg-img('guarantee_4')
                        &.invoice
                            bg-img('invoice_4')
                        &.special
                            bg-img('special_4')
                    .text
                        line-height: 16px
                        font-size: 12px
                        font-weight: 200
                        color: rgb(7,17,27)
</style>