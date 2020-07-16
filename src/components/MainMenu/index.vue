<template>
    <ul class="menu-ul">
        <li class="menu-li activeClass"  v-for="item in menuListData" :key="item._id" @click="handleRouterClick(item)"  ><span class="menu-span">{{item.name}}</span></li>
    </ul>
</template>

<script>
    import menuList from "@/assets/javascripts/menu";
    export default {
        name: "main-menu-index",
        props: {
          activeRouter: {
              type: String,
              default: '/home_page'
          }
        },
        data() {
            return {
              menuListData: menuList,
              activeUrl: false,
            };
        },
        watch: {
          activeRouter: {
              handler (val,oldVal){
                  if(val !== oldVal) {
                      val === '/' ? val === '/home_page': '';
                      this.menuListData.map(item=>{
                          item && item.path === val ? this.activeUrl === true : '';
                      });
                      console.log(this.menuListData);
                  }
              },
              immediate: true,
          }
        },
        mounted() {

        },
        methods: {
            handleRouterClick(item) {
                let vm = this;
                vm.$router.push({path: item.path});
            }
        }
    }
</script>

<style scoped lang="scss">
.menu-ul {
    width: 100%;
    height: 100%;
    .menu-li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        &:hover {
            background: #ff6666;
        }
        .activeClass {
            border-right: 1px solid #ff6666 !important;
        }
        .menu-span {
            padding: 4px 0px 4px 10px;
        }
    }
}
</style>