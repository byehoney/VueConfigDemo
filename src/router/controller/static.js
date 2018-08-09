const HelloWorld = ()=> import ('@/components/HelloWorld');
const QianbaoIndex = ()=> import ('@/components/qianbao/Index');
const QianbaoDetail = () => import ('@/components/qianbao/pages/QianbaoDetail');
const QianbaoAll = () => import ('@/components/qianbao/pages/QianbaoAll');
const Risk = () => import ('@/components/riskAssessment/RiskAssessment');
const LockQuestionPage = () => import ('@/components/lockQuestionPage/LockQuestionPage');
const AssetFundsIntro = ()=> import ('@/components/static/AssetFundSIntro');
export default [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
        meta: {
            title: "启动页"
        }
    },
    {
        path: "/risk",
        name: "risk",
        component: Risk,
        meta: {
            title: "出借人风险评测"
        }
    },
    {
        path: "/lockQuestion",
        name: "LockQuestionPage",
        component: LockQuestionPage,
        meta: {
            title: "常见问题"
        }
    },
    {
        path: "/qianbao",
        component: QianbaoIndex,
        children: [
            {
                path: "/",
                component: QianbaoAll,
                name: "QianbaoAll",
                meta: {
                    title: "这个故事，涨知识"
                }
            },
            {
                path: "QianbaoDetail/:id",
                name: "QianbaoDetail",
                component: QianbaoDetail
            }
        ]
    },
    {
        path: "/assetFundsIntro",
        name: "AssetFundsIntro",
        component: AssetFundsIntro,
        meta: {
            title: "资产介绍"
        }
    }
]