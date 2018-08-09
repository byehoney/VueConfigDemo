const MessageIndex = () => import ('@/components/message/Index');
const MessageDetail = () => import ('@/components/message/pages/MessageDetail');
const MessageCenter = ()=> import ('@/components/Message/pages/MessageCenter');
export default [
    {
        path: "/message",
        name: "MessageIndex",
        component: MessageIndex,
        children: [
            {
                path: "/",
                name: "MessageCenter",
                component: MessageCenter,
                meta: {
                    title: "消息中心"
                }
            },
            {
                path: "messageDetail",
                name: "messageDetail",
                component: MessageDetail,
                meta: {
                    title: "消息详情"
                }
            }
        ]
    }
]