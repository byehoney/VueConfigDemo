<!--tab切换组件-->
<template>
    <ul class="tabBar">
        <li v-for="(tab,index) in tabList"
            :key="tab.title"
            :class="{'active':currentIndex==index}"
            @click="activeThis(index)"
        >
            <div class="tabTitle">{{tab.title}}</div>
            <span v-if="currentIndex==index" class="activeBar"></span>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "TabBar",
        props:{
            tabList:{
                type:Array
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        mounted(){
            this.activeThis(0);
        },
        methods:{
            activeThis(index){
                if(index==this.currentIndex){
                    return ;
                };
                this.currentIndex = index;
                this.$emit('back',index)
            }
        }
    }
</script>
<style scoped>
    .tabBar{
        width:100%;
        height:1.31rem;
        border-bottom:1px solid rgb(226,226,226);
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
    }
    .tabBar li{
        height:1.3rem;
        font-size:.32rem;
        color:rgb(103,107,117);
        line-height: 1.3rem;
        text-align: center;
    }
    .tabBar li.active{
        color:rgb(241,92,2);
    }
    .activeBar{
        display: block;
        width: 34.38%;
        height:.04rem;
        border-radius: 2px;
        background:rgb(241,92,2);
        margin:-.1rem auto 0;
    }
</style>