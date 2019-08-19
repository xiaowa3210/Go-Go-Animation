
const commentsList = [
    {
        cuid: '小瓦',
        info: '啊啊啊超漂亮',
        reviewer: '',
        reply:[
            {
                cuid: '小计',
                info: '对呀对呀对啊',
                reviewer: '',
                reply: [
                    {
                        cuid: '小红',
                        info: '英雄所见略同',
                        reviewer: '小计',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        cuid: '小当',
        info: '想吃雪糕啊啊啊啊',
        reviewer: '',
        reply: [
            {
                cuid: '小东',
                info: '我也想我也想',
                reviewer: '',
                reply: []
            }
        ]
    }
]

function getComments(item) {
    let comment = {};
    comment.cuid = item.cuid;
    comment.info = item.info;
    comment.reviewer = item.reviewer;
    comment.reply = [];
    if (item.reply.length) {
        recursiveTraverse(item.reply, comment.reply);
    }
    return comment;
}

function recursiveTraverse(node, res) {
    if (!node || !node.length) {
        return;
    }
    node.forEach(node =>{
        let item = {};
        item.cuid = node.cuid;
        item.info = node.info;
        item.reviewer = node.reviewer;
        res.push(item);
        recursiveTraverse(node.reply, res)
    })
}

let resList = [];
commentsList.forEach(item => {
    let res = getComments(item);
    resList.push(res);
})

console.dir(resList);