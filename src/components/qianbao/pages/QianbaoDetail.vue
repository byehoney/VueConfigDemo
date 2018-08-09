<template>
    <section class="main">
        <div v-for="(item, index) in items" :key='index' v-show="active==index">
            <div class="banner">
                <img :src="item.banner" alt="">
            </div>
            <div class="content">
                <div class="lead">
                    <h3>导语</h3>
                    <P>{{item.lead}}</P>
                </div>
                <div class="storyArea">
                    <div class="storys" v-for="(story,index) in item.storys" :key='index'>
                        <h3>{{story.title}}</h3>
                        <div class="phone">用户：<span>{{story.phone}}</span></div>
                        <img :src="story.img" alt="">
                        <p v-for="(contnet,index) in story.content" :key='index'>{{contnet.contPart}}</p>
                    </div>
                </div>
                <div class="sendWord" v-show="item.warmTitle !=''">
                    <h3>{{item.warmTitle}}</h3>
                    <p>{{item.warmCont}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import detail from 'static/data.js'
        export default{
        name:'QianbaoDetail',
        data(){
            return{
                items:detail.qianbao,
                active:0,
                metaTitle:['爱，就要陪ta赚柴米油盐','这里发生什么了？大家都来了！','摆脱“月光”看他们如何逆袭！','为何他们只钟情互金','人到中年，如何应对财务危机']

            }
        },
        mounted () {
            this.active=this.$route.params.id;
            document.title=this.metaTitle[this.$route.params.id]; /*当前页面title*/
        },
        methods:{
            getList:function () {
                let that=this;
                that.$axios.get('static/data.js').then(data=>{ //成功
                    that.items=data.qianbao;
                }).catch(err=>{//错误信息
                    console.log(err)
                })
            }
        }
    }
</script>
<style scoped>
    .storys p:nth-of-type(2),.storys p:nth-of-type(3){
        margin-top: .4rem;
    }
    .main{
        width: 7.5rem;
        margin: 0 auto;
    }
    /*banner*/
    .banner, .content {
        width: 100%;
    }
    .banner img {
        width: 100%;
    }
    /*导语*/
    .lead {
        padding: 0 .6rem .42rem .66rem;
        background-color: #ffffff;
    }
    .lead h3 {
        font-size: .36rem;
        color: #333333;
        line-height: .98rem;
    }
    .lead p, .storys p {
        font-size: .28rem;
        color: #666666;
        line-height: .5rem;
        text-indent: 2em;
        text-align: justify;
        letter-spacing: 2px;
    }
    /*故事内容区域*/
    .storyArea {
        padding: .2rem .15rem;
        background-color: #f2f2f2;
    }
    .storys {
        padding: 0 .25rem .94rem .29rem;
        background-color: #ffffff;
        margin-bottom: .2rem;
    }
    .storys:last-child{
        margin-bottom: 0;
    }
    .storys h3 {
        font-size: .36rem;
        color: #333333;
        line-height: 1;
        padding: .36rem 0 .23rem 0;
    }
    .storys .phone {
        font-size: .2rem;
        color: #999999;
        line-height: 1;
        margin-bottom: .38rem;
    }
    .storys img {
        display: block;
        width: 100%;
        margin: 0 auto .31rem;
    }
    .lead p, .storys p {
        font-size: .28rem;
        color: #666666;
        line-height: .5rem;
        text-indent: 2em;
        text-align: justify;
        letter-spacing: 2px;
    }
    /*小编寄语*/
    .sendWord {
        padding: 0 .6rem .52rem .66rem;
        background-color: #ffffff;
        overflow: hidden;
    }
    .sendWord h3 {
        font-size: .36rem;
        color: #333333;
        line-height: 1;
        margin: .48rem 0 .45rem 0;
    }
    .sendWord p {
        font-size: .28rem;
        color: #666666;
        line-height: .5rem;
        text-indent: 2em;
        text-align: justify;
        letter-spacing: 2px;
    }
</style>