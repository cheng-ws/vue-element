<template>
 <div class="parent">
     <header class="pink">Header</header>
     <div class="content">
         <div class="left-side"><main-menu /></div>
         <div class="main">
             <router-view></router-view>
         </div>
<!--         <div class="right-side">Right Sidebar</div>-->
     </div>
     <footer class="green">Footer</footer>
 </div>
</template>

<script>
    import MainMenu from '@/components/MainMenu';
    export default {
        name: "home_index",
        components: {
          MainMenu,
        },
        data() {
            return {
              activeStyle:{}
            };
        },
        mounted() {
            // addEventListener('resize',this.handleResize());
        },
        beforeDestroy() {
            // removeEventListener('resize',this.handleResize());
        },
        methods: {
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
            height: calc(100% - 150px);
            .left-side {
                display: inline-block;
                width: 150px;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                background: rgba(0,0,0,0.05);
            }
            .main {
                display: inline-block;
                width: calc(100% - 150px);
                height: 100%;
                box-sizing: border-box;
                overflow: hidden;
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