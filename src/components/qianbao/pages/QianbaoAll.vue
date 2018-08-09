<template>
    <section class="main">
        <div class="btn">
            <div class="bannerArea" v-for="(item,index) in items" :key='index'>
                <router-link :to="{path:'/qianbao/qianbaoDetail/'+index+''}" class="bottomImg imgHeigh">
                    <img :src="item.img" alt="" class="bannerImg">
                </router-link>
                <div class="introductionArea">
                    <p>{{item.cont}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import all from 'static/dataAll.js'
    export default{
        name:'qianbaoAll',
        data(){
            return{
                items:all.all
            }
        },
        mounted () {

        },
        methods:{

        }
    }
</script>
<style scoped>
    .main {
        width: 7.5rem;
        margin: 0 auto;
    }
    .btn {
        margin: .2rem;
    }
    .bannerArea {
        margin-bottom: .12rem;
    }
    .btn a {
        display: block;
        height: 1.85rem;
    }
    .btn .imgHeigh .bannerImg {
        width: 100%;
        height: 100%;
    }
    .introductionArea {
        padding: .2rem .3rem;
        background-color: #ffffff;
    }
    .introductionArea p {
        font-size: .24rem;
        color: #444444;
        line-height: .34rem;
    }
</style>