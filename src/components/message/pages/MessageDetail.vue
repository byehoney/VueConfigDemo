<template>
    <div class="main">
        <!--消息详情页-->
        <div class="messageDetail clearfix">
            <div class="messageContArea">
                <h3 class="messageTitle">{{title}}</h3>
                <div  class="content" v-html="content"></div>
            </div>
            <div class="teamBox fr">
                <div class="teamTitle">聚有钱运营团队</div>
                <div class="teamTime">{{time | fmt}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'messageDetail',
        data(){
            return{
                content:'',
                time:'',
                title:''
            }
        },
        mounted(){
            this.getCon();
        },
        filters:{
            fmt: function (val) {
                let time = new Date(val.replace(/-/g, '/'));
                let y = time.getFullYear();
                let m = time.getMonth() + 1;
                let d = time.getDate();
                let h = time.getHours();
                let min = time.getMinutes();
                let s = time.getSeconds();
                if (val == '') {
                    return '';
                } else {
                    return '' + y + '年' + (m > 10 ? m : '0' + m) + '月' + (d > 10 ? d : '0' + d) + '日  ' + (h > 10 ? h : '0' + h) + ':' + (min > 10 ? min : '0' + min) + ':' + (s > 10 ? s : '0' + s);
                }
            }
        },
        methods:{
            getCon(){
                let $this = this;
                this.$axios.post('/app/other/queryMessagesById.shtml',{announceId:this.$route.query.id,type:this.$route.query.type})
                    .then(data=>{
                        if(data.statusCode==100000){
                            $this.time = data.data.createTime;
                            $this.title = data.data.title;
                            $this.content = data.data.content;
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>
<style scoped>
    .messageDetail{
        width: 6.9rem;
        margin: 0 auto;
    }
    .messageTitle{
        height: .89rem;
        line-height: .89rem;
        text-align: center;
        font-size: .34rem;
        color: rgb(25,35,59);
        font-weight: normal;
    }
    .teamBox{
        margin-top: 1rem;
        padding-bottom: 1rem;
    }
    .teamTitle{
        display: block;
        font-size: .28rem;
        color: rgb(103,107,117);
        margin-bottom: .05rem;
        text-align: center;
    }
    .teamTime{
        display: block;
        font-size: .26rem;
        color: rgb(166,173,188);
        text-align: center;
    }
    /*平台公告*/
    .content{
        width: 94%;
        margin: 0 auto;
        color: #666;
        padding-bottom:15px;
        font-size: 14px;
        font-family: "Microsoft Yahei",arial,tahoma,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
        overflow:hidden;
    }
    .content>>>img{
        width: 100%!important;
        height:auto!important;
        margin: 0 auto;
    }
    .content h3{
        font-size:16px;
        font-weight: bold;
        margin:1em 0;
        text-align: center;
    }
</style>