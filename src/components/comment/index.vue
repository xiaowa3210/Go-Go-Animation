<template>
    <div class="comment-wrap">
        <div class="comment-item" v-for="(comment, key) in commentsList" :key="key">
            <div class="comment-info">
                <div>
                    <span class="info-name">{{comment.cuid}}:</span>
                    <span class="info-text">{{comment.info}}</span>
                </div>
                <button class="info-btn" @click="addReply(comment.cuid)">回复</button>
            </div>
            <div class="reply-item" v-for="(reply, index) in comment.reply" :key="index">
                <div v-if="reply.reviewer" class="reply-info">
                    <div>
                        <span class="reply-cuid">
                            {{reply.cuid}}
                            <span class="reply">回复</span>
                            @{{reply.reviewer}}:
                        </span>
                        <span class="reply-text">{{reply.info}}</span>
                    </div>
                    <button class="info-btn" @click="addReply(comment.cuid, reply.cuid)">回复</button>
                </div>
                <div v-else class="reply-info">
                    <div>
                        <span class="reply-cuid">{{reply.cuid}}:</span>
                        <span class="reply-text">{{reply.info}}</span>
                    </div>
                    <button class="info-btn" @click="addReply(comment.cuid, reply.cuid)">回复</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rawList: [
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
            ],
            commentsList: []
        }
    },
    mounted() {
        this.rawList.forEach(item => {
            let res = this.getComments(item);
            this.commentsList.push(res);
        })
    },
    methods: {
        getComments(item) {
            let comment = {};
            comment.cuid = item.cuid;
            comment.info = item.info;
            comment.reviewer = item.reviewer;
            comment.reply = [];
            if (item.reply.length) {
                this.recursiveTraverse(item.reply, comment.reply);
            }
            return comment;
        },
        recursiveTraverse(node, res) {
            if (!node || !node.length) {
                return;
            }
            node.forEach(node =>{
                let item = {};
                item.cuid = node.cuid;
                item.info = node.info;
                item.reviewer = node.reviewer;
                res.push(item);
                this.recursiveTraverse(node.reply, res);
            })
        },
        addReply(cuid, reviewer = '') {
            this.commentsList.some(ele => {
                if (ele.cuid === cuid) {
                    let reply = {};
                    reply.cuid = '小薪';
                    reply.reviewer = reviewer;
                    reply.info = '这是一条回复';
                    ele.reply.push(reply);
                    return true;
                }
            });
        }
    }
}
</script>
<style scoped>
.comment-item {
    width: 400px;
    margin: 10px auto;
}
.comment-info, .reply-info {
    display: flex;
    justify-content: space-between;
}
.reply-item {
    margin-left: 50px;
    padding-left: 10px;
    background: #eee;
}
.reply-cuid {
    color: blue;
}
.reply {
    display: inline-block;
}
</style>