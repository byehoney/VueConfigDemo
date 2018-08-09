<template>
    <div class="account">
        <collapse :foldLists='foldLists'></collapse>
    </div>
</template>
<script>
    import Collapse from '@/components/common/Collapse'
    export default{
        name:'LockQuestionPage',
        data(){
            return{
                foldLists:[
                    {
                        "title":"1.“盈钱计划锁定期”与“聚利计划”有什么区别？",
                        "content":"“盈钱计划锁定期”的用户资金将自动分散出借于不同的借款项目，实现优选资产、分散风险的目的，是盈钱计划的升级产品。每个聚利计划的项目则只出借于单一的借款人。"
                    },
                    {
                        "title":"2.加入后何时开始计息？何时收到利息？",
                        "content":"加入当日开始计息，出锁定期后一次性还本付息。"
                    },
                    {
                        "title":"3.锁定期内，资金可以赎回吗？",
                        "content":"不可以。出锁定期后，转入账户余额的资金可随时申请提现至银行卡。"
                    },
                    {
                        "title":"4.出锁定期后，资金的去向？",
                        "content":"根据您加入时进行的选择，出锁定期后可选择继续复投或者转入账户余额。"
                    },
                    {
                        "title":"5.已选择到期后资金去向，可以再次修改吗？",
                        "content":"可以。需要在锁定期结束7日前，通过[我的账户]-[锁定期在投]找到需要修改的项目，进行资金去向的修改。"
                    }
                ]
            }
        },
        components:{
            Collapse
        }
    }
</script>
<style scoped>
    .account{
        width: 100%;
        margin: 0 auto;
    }
</style>