<template>
    <div class="chat-box">
        <div class="chat-left">
            <div class="chat-left-c chat-left-title">1111&2222</div>
            <div class="chat-left-c chat-left-l">1111</div>
            <div class="chat-left-c chat-left-r">2222</div>
        </div>
        <div class="chat-right">
            <div class="chat-user">
                <div class="chat-user-select">
                    <span>发送者：</span>
                    <el-select v-model="sendUser" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="chat-user-select">
                    <span>接收者：</span>
                    <el-select v-model="receiverUser" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="chat-send">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="sendMsg"
                        maxlength="300"
                        show-word-limit
                        class="chat-send-message"
                >
                </el-input>
                <el-button round class="chat-send-btn" @click="sendMessage">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    export default {
        name: "chat_index",
        data () {
            return {
                sendMsg: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                sendUser: '',
                receiverUser: ''
            };
        },
        mounted () {
            this.init();
        },
        methods: {
            init() {
                // console.log(io);
                const userInfo = this.$tools.getSession('userInfo','json');
                console.log(userInfo);
                const socket = io('/api');
                console.log(socket.on);
                socket.on('connection',()=>{
                    socket.emit('online',userInfo.username);
                });
            },
            sendMessage() {
                let vm = this;
                if(!vm.sendUser || !vm.receiverUser) {
                    return vm.$message({
                        message: '发送者和接受者不能为空',
                        type: 'warning'
                    });
                }
                if(vm.sendUser === vm.receiverUser) {
                    return vm.$message({
                        message: '发送者和接受者不能相同',
                        type: 'warning'
                    });
                }
                if(vm.sendMsg === '') {
                    return vm.$message({
                        message: '消息不能为空',
                        type: 'warning'
                    });
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .chat-box {
        display: flex;
        justify-content: space-around;
        align-items: start;

        .chat-left {
            flex: 1;
            height: calc(100vh - 100px);
            padding-right: 10px;

            .chat-left-c {
                flex: 1;
                height: 30px;
            }

            .chat-left-title {
                text-align: center;
                line-height: 30px;
                background: #e7e1cd;
            }

            .chat-left-l {
                background: #0086b3;
                text-align: left;
                padding-left: 10px;
            }

            .chat-left-r {
                background: #e6b8ff;
                text-align: right;
                padding-right: 10px;
            }
        }

        .chat-right {
            background: #d5c1df;
            flex: 1;
            height: calc(100vh - 100px);
            padding-left: 10px;

            .chat-user {
                padding-top: 10px;
                display: flex;
                justify-content: start;

                .chat-user-select {
                    flex: 1;
                }
            }

            .chat-send {
                margin: 10px auto;
                .chat-send-message {
                    width: 99%;
                }
                .chat-send-btn {
                    width: 50%;
                    margin: 10px 25%;
                }
            }

        }
    }
</style>