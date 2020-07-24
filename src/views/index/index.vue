<template>
    <div class="parent">
        <header><main-menu :menuListData="menuList" :newPath="newPath"  @locationPush="handleLocationPush"/></header>
        <div class="content">
<!--            <div class="left-side">-->
<!--                <tree-menu :treeMenuListData="treeMenuList" :newTreePath="newTreePath" @locationJump="handleLocationJump"/>-->
<!--            </div>-->
            <div class="main">
                <router-view></router-view>
            </div>
            <!--         <div class="right-side">Right Sidebar</div>-->
        </div>
        <!--     <footer class="green">Footer</footer>-->
    </div>
</template>

<script>
    import MainMenu from '@/components/MainMenu';
    import TreeMenu from '@/components/TreeMenu';
    import menuList from "@/assets/javascripts/menu";
    export default {
        name: "home_index",
        components: {
            MainMenu,
            // TreeMenu,
        },
        data() {
            return {
                activeStyle: {},
                menuList:menuList,
                newPath: '/home',
                treeMenuList: [],
                newTreePath: "",
            };
        },
        watch: {
            '$route.path': {
                handler(val) {
                    val !== this.newPath ? this.newPath = val : '';
                },
                immediate: true,
            }
        },
        computed: {

        },
        mounted() {
            // let arr = [
            //     {
            //         _id: '1',
            //         name: 'htmlPAGE',
            //         path: '',
            //         icon: 'iconchuangzuo',
            //         show: true,
            //         children: [
            //             {
            //                 _id: '1-1',
            //                 name: '星球动画',
            //                 path: '/html_page',
            //                 icon: 'iconwode2',
            //             }
            //         ]
            //     },
            //     {
            //         _id: '2',
            //         name: 'CSSPAGE',
            //         path: '/css_page',
            //         icon: 'iconchuangzuo',
            //         show: true,
            //         children: []
            //     }
            // ];
            // this.treeMenuList = arr;
            // this.newTreePath = arr[0].children[0].path;
        },
        beforeDestroy() {
            // removeEventListener('resize',this.handleResize());
        },
        methods: {
            handleLocationPush(path) {
                this.$router.push(path);
            },
            handleLocationJump(path) {
                this.$router.push(path);
            },
            handleResize() {
                // let w = document.documentElement.clientWidth;
                // let h = document.documentElement.clientHeight;
                let w = document.documentElement.offsetWidth;
                let h = document.documentElement.offsetHeight;
                this.activeStyle = {
                    width: w,
                    height: h,
                };
            }
        }
    }
</script>

<style scoped lang="scss">
    .parent {
        width: 100%;
        min-width: 1320px;
        height: 100%;
        overflow: hidden;
        background-color: #2AAADF;

        header {
            width: 80%;
            height: 50px;
            margin: 0 auto;
        }
        .content {
            width: 100%;
            height: 100%;
            /*height: calc(100% - 50px);*/
            position: absolute;
            top: 50px;
            left: 0;
            background-color: #E6E6E6;
            padding: 20px 10px;
            .left-side {
                width: 150px;
                height: 100%;
                background: #F4F5F7;
                float: left;
            }

            .main {
                /*width: calc(100% - 150px);*/
                width: 80%;
                min-width: 1320px;
                height: 100%;
                /*padding: 10px 10px 0 10px;*/
                margin: 0px auto;
                background-color: #fff;
                box-shadow: 0px 0px 10px 10px #888;
                /*margin-left: 150px;*/

            }

            /*.right-side {*/
            /*    display: inline-block;*/
            /*    width: 150px;*/
            /*    height: 100%;*/
            /*}*/
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
        }
    }
</style>