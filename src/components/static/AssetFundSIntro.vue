<template>
    <section class="main">
        <div class="assetsSource">
            <h3 class="assetsTitle">精选资产来源</h3>
            <ul>
                <li class="clearfix" >
                    <div class="fl assetLeft">
                        <img src="../../assets/images/static/assetFundSIntro/person.png" alt="" class="person">
                        <span class="assetBrief">个人借款</span>
                    </div>
                    <div class="fl assetCont">
                        由个人以房产（车辆）抵（质）押方式进行借款，房产（车辆）均按照市场评估价格办理抵（质）押登记。所借款项仅限用于专项用途，如个人经营、资金周转等。</div>
                </li>
                <li class="clearfix">
                    <div class="fl assetLeft">
                        <img src="../../assets/images/static/assetFundSIntro/company.png" alt="" class="company">
                        <span class="assetBrief">企业借款</span>
                    </div>
                    <div class="fl assetCont noBorder">
                        由企业进行借款，借款企业需提供足值抵（质）押物作为反担保物。所借款项仅限用于专项用途，如筹建新厂、补充流动资金等。</div>
                </li>
            </ul>
        </div>
        <div class="assetIntroduce">
            <ul>
                <li>
                    <h3 class="introTitle mt13">严审借款资料</h3>
                    <div class="introCont ">风控中心以独创的大数据风控模型、实地尽职调查等方式对借款人资信及财务经营状况进行综合分析，客观的对风险进行评估，研判借款人还款能力。</div>
                </li>
                <li>
                    <h3 class="introTitle">全方位资信审查</h3>
                    <div class="introCont ">聚有钱全面接入同盾信贷风控系统对借款人提交的借款资料进行审核，有效的对借款人不良信用记录和多平台借贷记录等信息加以整合，从而识别高风险借款人及团伙欺诈、机构代办等风险因素。</div>
                </li>
                <li>
                    <h3 class="introTitle">预审会专业评估</h3>
                    <div class="introCont ">来自银行、担保公司、法律等行业组成的强大预审团队将对借款人进行借款资料、个人资信的全方位、多维度审核，只有通过预审会审核的项目，才初步具备借款条件。</div>
                </li>
                <li>
                    <h3 class="introTitle">贷后全流程追踪</h3>
                    <div class="introCont ">借款人借款后，聚有钱通过贷后定期回访、资产状况追踪、还款能力追踪等方式，密切关注借款人动态，一旦发现风险及时预警，从而提前降低逾期风险，保障投资人利益。</div>
                </li>
            </ul>

        </div>
        <div class="tips">截止目前，只有约5%的借款人可以顺利通过审核，进行线上借款。</div>
    </section>

</template>

<script>
    export default{
        name:'AssetFundsIntro',
        data(){
            return{
            }
        }
    }

</script>

<style scoped>
    .main{
        width: 7.1rem;
        margin: 0 auto;
        padding: .2rem .2rem .4rem;
        background-color:rgb(245,245,245);
    }
    .assetsSource{
        background-color: #ffffff;
        border-radius: .12rem;
        padding: .33rem .2rem 0 0;
        margin-bottom:.2rem;
    }
    .assetsTitle{
        font-size: .32rem;
        color: rgb(25,35,59);
        font-weight: normal;
        margin-bottom: .05rem;
        padding-left: .2rem;
    }
    .assetLeft{
        width: 1.6rem;
        text-align: center;
        font-size: 0;
    }
    .assetBrief{
        display: block;
        font-size: .24rem;
        color: rgb(25,35,59);
    }
    .person{
        display: inline-block;
        width: .44rem;
        margin: .5rem 0 .16rem 0;
    }
    .company{
        display: inline-block;
        width: .45rem;
        margin: .5rem 0 .16rem 0;
    }
    .assetCont{
        width: 5.3rem;
        font-size: .28rem;
        color: #a6adbc;
        padding: .22rem 0 .28rem 0;
        border-bottom: 1px solid rgb(226,226,226);
        line-height: .42rem;
        text-align: justify;
    }
    .noBorder{
        border-bottom: none;
    }
    .assetIntroduce{
        padding: .2rem .2rem .07rem;
        background-color: #ffffff;
        border-radius: .12rem;
    }
    .introTitle{
        font-size: .32rem;
        color: rgb(25,35,59);
        font-weight: normal;
        margin-bottom: .15rem;
    }
    .introCont{
        font-size: .28rem;
        color: rgb(166,173,188);
        padding-bottom: .26rem;
        text-align: justify;
        line-height: .42rem;
    }
    .mt13{
        margin-top: .13rem;
    }
    .tips{
        font-size: .24rem;
        color: rgb(166,173,188);
        margin-top: .4rem;
        text-align: center;
    }
</style>