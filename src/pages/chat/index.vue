<template>
    <div class="chat-box">
        <div class="chat-left">
            <div class="chat-left-c chat-left-title">1111&2222</div>
            <div class="chat-left-c"  v-for="(item,index) in chatList" :class="item.receiverUser === sendUser ? 'chat-left-l': 'chat-left-r'" :key="index">
                <div v-if="item.type === 'text'">{{item.receiverUser === sendUser ? `${item.sendUser} -> ${item.receiverUser} : ${item.message}`: `${item.sendUser} -> ${item.receiverUser} : ${item.message}`}}</div>
                <div v-if="item.type === 'img'">{{item.receiverUser === sendUser ? `${item.sendUser} -> ${item.receiverUser} : `: `${item.sendUser} -> ${item.receiverUser} : `}}</div>
                <img v-if="item.type === 'img'" :src="item.message" width="100" height="100">
            </div>
        </div>
        <div class="chat-right">
            <div class="chat-user">
                <div class="chat-user-select">
                    <span>发送者：</span>
                    <el-input v-model="sendUser" :disabled="true"></el-input>
<!--                    <el-select v-model="sendUser" placeholder="请选择">-->
<!--                        <el-option-->
<!--                                v-for="item in options"-->
<!--                                :key="item.value"-->
<!--                                :label="item.label"-->
<!--                                :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
                </div>
                <div class="chat-user-select">
                    <span>接收者：</span>
                    <el-select v-model="receiverUser" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.socketId"
                                :label="item.username"
                                :value="item.username">
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
                <div>
                    <el-upload
                            class="upload-demo"
                            action="/api/upload"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :on-success="handleSuccess"
                    >
                        <el-button size="small" type="primary">发送图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
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
                options: [],
                sendUser: '',
                receiverUser: '',
                socket: '',
                chatList: [],
                fileList: [],
            };
        },
        created () {
            this.init();
        },
        destroyed () {
            this.socket.emit('disconnect',this.sendUser);
        },
        computed: {
            newMessage () {
                {{item.receiverUser === sendUser ? `${item.sendUser} -> ${item.receiverUser} : ${item.message}`: `${item.sendUser} -> ${item.receiverUser} : ${item.message}`}}
            }
        },
        methods: {
            init() {
                // console.log(io);
                let vm = this;
                const userInfo = this.$tools.getSession('userInfo','json');
                // console.log(userInfo);
                vm.sendUser = userInfo.username;
                const socket = io('127.0.0.1:3000');
                vm.socket = socket;
                // console.log(socket.on);
                vm.socket.on('connect',()=>{
                    vm.socket.emit('online',userInfo.username);
                });
                vm.socket.on('onLineUser',(data)=>{
                    console.log(data);
                    if(Object.keys(data).length > 0) {
                        let arr = [];
                        for(let key in data) {
                            let obj = {};
                            if(key.toString() !== vm.sendUser && data[key].status === 'ONLINE') {
                                obj.socketId = data[key].socketId;
                                obj.username = key;
                                arr.push(obj);
                            }
                        }
                        vm.options = arr;
                        console.log(vm.options);
                    }
                });
                vm.socket.on('reply_private_chat',(data)=>{
                    vm.chatList.push(data);
                });
                vm.socket.on('progress',(data)=>{
                    console.log(data);
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
                let params = {
                    sendUser: vm.sendUser,
                    receiverUser: vm.receiverUser,
                    message: vm.sendMsg,
                    type: 'text'
                };
                this.socket.emit('private_chat',JSON.stringify(params));
                vm.chatList.push(params);
                vm.sendMsg = '';
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleSuccess(res) {
                console.log(res);
                let vm = this;
                if(res.status === 200) {
                    let params = {
                        sendUser: vm.sendUser,
                        receiverUser: vm.receiverUser,
                        message: res.data,
                        type: 'img',
                    };
                    vm.socket.emit('private_chat',JSON.stringify(params));
                    vm.chatList.push(params);
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
            }

            .chat-left-title {
                text-align: center;
                line-height: 30px;
                background: #e7e1cd;
                height: 30px;
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
                /deep/ .el-input {
                    width: auto !important;
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