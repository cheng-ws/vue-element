<template>
    <div class="parent">
        <header class="pink">Header<i class="iconfont iconaixin"></i></header>
        <div class="content">
            <div class="left-side">
                <main-menu :menuListData="menuList"  @locationPush="handleLocationPush"/>
            </div>
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
    import menuList from "@/assets/javascripts/menu";
    export default {
        name: "home_index",
        components: {
            MainMenu,
        },
        data() {
            return {
                activeStyle: {},
                menuList:menuList,
            };
        },
        watch: {

        },
        computed: {

        },
        mounted() {
        },
        beforeDestroy() {
            // removeEventListener('resize',this.handleResize());
        },
        methods: {
            handleLocationPush(obj) {
                this.$router.push(obj.path);
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
        height: 100%;

        header {
            width: 100%;
            height: 50px;
        }

        .content {
            position: absolute;
            top: 50px;
            bottom: 100px;
            width: 100%;
            height: calc(100% - 50px);

            .left-side {
                display: inline-block;
                width: 150px;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                background: #F4F5F7;
            }

            .main {
                display: inline-block;
                width: calc(100% - 150px);
                height: 100%;
                box-sizing: border-box;
                overflow: hidden;
                padding: 10px 10px 0 10px;
            }

            .right-side {
                display: inline-block;
                width: 150px;
                height: 100%;
            }
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
        }
    }
</style>