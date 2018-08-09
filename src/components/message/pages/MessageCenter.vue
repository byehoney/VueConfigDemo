<template>
    <div class="message">
        <div class="barBox">
            <Tab :tabList="tabList" @back="getType"></Tab>
        </div>
        <div class="loadModule" id="listBox">
            <mt-loadmore
                    @bottom-status-change="handleBottomChange"
                    @top-status-change="handleTopChange"
                    :top-method="loadTop"
                    :bottom-method="loadBottom"
                    :bottom-all-loaded="allLoaded"
                    ref="loadmore"
                    :autoFill=false
                    :topDistance="50"
                    :bottomDistance="50"
            >
                <div slot="top" class="mint-loadmore-top">
                    <div class="toptext" v-if="topStatus=='loading'">加载中...</div>
                    <div class="toptext" v-if="topStatus=='drop'">下拉刷新</div>
                </div>
                <div class="noData" v-if="numLen==0 && page==1">暂无信息</div>
                <ul class="messageItem" v-else>
                    <li v-for="item in messageList" :class="{'hasRead':item.isRead==1}" :key="item.id" @click="goDetailById(item.id,type)">
                        <div class="messageTitle">{{item.title}}</div>
                        <div class="messageTime">{{item.createTime | fmt}}</div>
                    </li>
                </ul>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <div class="toptext" v-if="bottomStatus=='loading'">加载中...</div>
                    <div class="toptext" v-if="bottomStatus=='drop'">上拉加载</div>
                </div>
                <div v-if="allLoaded" :class="['hasEnd',page==2?'sticker':'']">--------没有更多了哦--------</div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
    import Tab from '@/components/common/TabBar';
    export default {
        name: "MessageCenter",
        components:{
            Tab
        },
        data(){
            return {
                tabList:[{title:'我的消息'},{title:'平台公告'},{title:'项目公告'}],
                type:2,//1 平台公告 2 我滴消息 3 项目公告
                topStatus:'',
                bottomStatus:'',
                allLoaded:false,
                page:1,
                rows:10,
                messageList:[],
                numLen:0
            }
        },
        mounted(){
            this.getList();
            const ele = document.getElementById('listBox');
            ele.style.height=document.documentElement.clientHeight - ele.offsetTop+'px'
        },
        filters:{
            fmt(val){
                let time = new Date(val.replace(/-/g,'/'));
                let y = time.getFullYear();
                let m = time.getMonth()+1;
                let d = time.getDate();
                let h = time.getHours();
                let min = time.getMinutes();
                let s = time.getSeconds();
                return ''+y+'年'+(m>10?m:'0'+m)+'月'+(d>10?d:'0'+d)+'日  '+(h>10?h:'0'+h)+':'+(min>10?min:'0'+min)+':'+(s>10?s:'0'+s);
            }
        },
        methods:{
            getType(index){
                if(index==0){
                    this.type = 2;
                }else if(index==1){
                    this.type = 1;
                }else{
                    this.type = 3;
                }
                this.page = 1;
                this.allLoaded = false;
                this.messageList = [];
                this.getList();
            },
            goDetailById(id,type){
                this.$router.push('/message/messageDetail?id='+id+'&type='+type)
            },
            loadBottom(){
                if(this.allLoaded === false){
                    this.page++;
                    this.getList();
                }else{

                }
            },
            loadTop(){
                this.page =1;
                this.messageList = [];
                this.allLoaded = false;
                this.getList();
            },
            handleTopChange(status) {// 头部下拉刷新状态判断
                this.topStatus = status;
            },
            handleBottomChange(status){// 底部上拉状态判断
                this.bottomStatus = status;
            },
            getList(){ 
                let $this = this;
                this.$axios.post('/app/other/queryMessages.shtml',{page:this.page,rows:this.rows,type:this.type,token:this.$route.query.token})
                    .then(data=>{
                        $this.messageList = [...$this.messageList,...data.data.result];
                        $this.numLen = data.data.result.length;
                        if($this.page==1){//下拉刷新结束
                            $this.$refs.loadmore.onTopLoaded();
                        }else{//上拉加载完毕
                            $this.$refs.loadmore.onBottomLoaded();
                            if(data.data.result.length==0){//没有数据了
                                $this.allLoaded = true;
                            }
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .barBox{
        background:#fff;
        position: relative;
        z-index: 222;
    }
    .loadModule{
        overflow: scroll;
    }
    .messageItem{
        width:6.9rem;
        margin: 0 auto;
    }
    .messageItem li{
        width:6.9rem;
        text-align: left;
        border-bottom:1px solid #e2e2e2;
        color:#19233b;
        font-size:.3rem;
    }
    .messageItem li:last-child{
        border-bottom:none;
    }
    .messageTitle{
        line-height:.45rem;
        margin-top:.2rem;
    }
    .messageTime{
        height:.74rem;
        font-size:.24rem;
        line-height: .74rem;
    }
    .messageTime,.messageItem li.hasRead .messageTitle{
        color:#a6adbc;
    }
    .toptext{
        width:100%;
        height:.6rem;
        line-height: .6rem;
        font-size:.25rem;
        text-align:center;
        color:#666;
    }
    .hasEnd{
        text-align:center;
        font-size:.24rem;
        color:#a6adbc;
        padding: .5rem 0;
    }
    .noData{
        font-size:.16rem;
        text-align: center;
        padding-top: 3rem;
    }
    .sticker{
        position: fixed;
        bottom:0;
        width:100%;
        text-align:center;
    }
</style>