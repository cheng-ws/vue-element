<template>
    <div class="content-G">
        <div class="base-list-container library-box">
            <div class="library">
                <div class="cycle" :class="{'animal': animal[0]}">1</div>
                <div class="cycle" :class="{'animal': animal[1]}">2</div>
                <div class="cycle" :class="{'animal': animal[2]}">3</div>
                <div class="cycle" :class="{'animal': animal[3]}">4</div>
                <div class="cycle" :class="{'animal': animal[4]}">5</div>
                <div class="cycle" :class="{'animal': animal[5]}">6</div>
                <div class="dot">......</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "library_list",
        data() {
            return {
                animal:[false,false,false,false,false,false]
            };
        },
        mounted () {
            this.run();
        },
        beforeDestroy () {
            clearInterval(this.runFlag);
        },
        methods: {
            run() {
                let vm = this;
                vm.runFlag = setInterval(()=>{
                    let index = vm.animal.findIndex(item=>item);
                    console.log(index);
                    if(index > -1){
                        if(index+1 > 5) {
                            vm.animal.splice(5,1,false);
                            vm.animal.splice(0,1,true);
                        }else {
                            vm.animal.splice(index,1,false);
                            vm.animal.splice(index+1,1,true);
                        }
                    }else{
                        vm.animal.splice(0,1,true);
                    }
                },500);
            }
        }
    };
</script>

<style scoped lang="scss">
    .library-box {
        height: 100%;

        .library {
            width: 100%;
            height: calc(100% - 0px);

            .cycle {
                /*font-size: 12px;*/
                width: 10px;
                height: 10px;
                border: 1px solid #ff6666;
                display: inline-block;
                border-radius: 50%;
                background: #ff6666;
                margin-left: 10px;
                /*animation: allCycle 1s linear infinite;*/
            }

            .animal {
                animation: myFirst 0.5s linear;
            }

            .cycle:hover {
                /*transform: scale3d(2, 2, 2);*/
            }

            .dot {
                font-size: 10px;
                width: 60px;
                height: 10px;
                display: inline-block;
                margin-left: 10px;
                letter-spacing: 5px;
                /*line-height: 10px;*/
            }
        }
    }

    @keyframes allCycle {
        0% {
            transform: scale3d(0, 0, 0);
        }
        50% {
            transform: scale3d(2, 2, 2);
        }
        100% {
            transform: scale3d(0, 0, 0);
        }
    }

    @keyframes myFirst {
        0% {
            transform: scale3d(0, 0, 0);
        }
        50% {
            transform: scale3d(2, 2, 2);
        }
        100% {
            transform: scale3d(0, 0, 0);
        }
    }

</style>