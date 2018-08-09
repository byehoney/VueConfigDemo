<template>
    <div class="collapseArea">
        <ul class="collapseList">
                <li @click='isOpen(index)'  v-for='(item,index) in foldLists' :key="item.title">
                    <div class="collapseTitle clearfix">
                        <span class="fl">{{item.title}}</span>
                        <i :class="[index==active ? 'arrDown' : '' ]"></i>
                    </div>
                    <div v-show='index==active' :class="['collapseCont',index==active ? 'bounceInUp':'bounceDown']">
                        <p>{{item.content}}</p>
                    </div>
                </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['foldLists'],
        data(){
            return{
                active:0
            }
        },
        methods:{
            isOpen:function (index) {
                this.active=index;
            }
        }
    }
</script>
<style scoped>
    .collapseList{
        margin:0 .1rem;
    }
    .collapseList li{
        position:relative;
        border-bottom: 1px solid #e6e6e6;
    }
    .collapseList i{
        float: right;
        width: .22rem;
        height: .22rem;
        border-top: .04rem solid #a7acb6;
        border-right: .04rem solid #a7acb6;
        -webkit-transform-origin: center center;
        -webkit-transform: rotate(45deg);
        -webkit-transition: all .2s linear;
        transform-origin: center center;
        transform: rotate(135deg);
        transition: all .3s linear;
        margin: .25rem .19rem 0 0;
    }
    .collapseList i.arrDown{
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        margin-top: .38rem;
    }
    .collapseTitle{
        height: .84rem;
        line-height: .84rem;
        font-size:.3rem;
        color:rgb(25,35,59);
    }
    .collapseCont{
        padding: .12rem .24rem;
    }
    .collapseCont p{
        line-height: 30px;
        font-size:.28rem;
        color:rgb(103,107,117);
        text-indent:2em;
    }
    .bounceInUp{
        animation:bounceInUp .5s ease;
        -webkit-animation:bounceInUp .5s ease;
    }
    .bounceDown{
        animation:bounceDown .5s ease;
        -webkit-animation:bounceDown .5s ease;
    }

    @keyframes bounceInUp{
        0% {
            -webkit-transform: translate3d(0, -.3rem, 0);
            transform: translate3d(0, -.3rem, 0);

        }
        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

        }
    }
    @-webkit-keyframes bounceInUp{
        from {
            -webkit-transform: translate3d(0, -.3rem, 0);
            transform: translate3d(0, -.3rem, 0);;

        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

        }
    }
    @keyframes bounceDown{
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, -.3rem, 0);
            transform: translate3d(0, -.2rem, 0);
        }
    }
    @-webkit-keyframes bounceDown{
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, -.3rem, 0);
            transform: translate3d(0, -.2rem, 0);
        }
    }
</style>