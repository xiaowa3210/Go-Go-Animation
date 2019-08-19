<template>
    <div class="comment-wrap">
        <div :class="deep >= 1 ? 'reply-item': 'comment-item'" :style="'margin-left:' + deep*30 + 'px'">
            <div class="comment-title">
                <div class="comment-id">{{comment.cuid}}</div>
                <button class="btn" @click="addReply(comment.cuid)">回复</button>
            </div>
            <div v-if="comment.reviewer" class="comment-text">
                回复<span>@{{comment.reviewer}}:</span>{{comment.info}}
            </div>
            <div v-else class="comment-text">
                {{comment.info}}
            </div>
        </div>
        <comment-tree
            v-for="(item, key) in reply"
            :key="key"
            :reply="item.reply"
            :comment="item"
            :deep="deep+1"
        />
    </div>
</template>
<script>
export default {
    name: 'comment-tree',
    props: ['comment', 'reply', 'deep'],
    data() {
        return {
        }
    },
    methods: {
        addReply(cuid) {
            let item = {};
            item.cuid = '小新';
            item.info = '这是一条回复';
            if (this.deep >= 1) {
                item.reviewer = cuid;
            }
            item.reply = [];
            this.reply.unshift(item);
        }
    }
}
</script>
<style scoped>
i {
    font-style: normal;
    color: blue;
}
.comment-wrap {
    width: 1000px;
    margin: 0 auto;
}
.comment-item {
    margin: 10px 0;
}
.reply-item {
    margin: 5px 0 5px 20px;
}
.comment-title {
    display: flex;
    justify-content: space-between;
}
.comment-text {
    padding-left: 10px;
    border-left: 5px solid #ddd;
}
</style>