<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4"  style="min-height: 100%;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router @select="handleSelect">
                    <component class="menu-item" v-for="(value,index) in menuListData" :key="value.path+index"
                               :index="value.path" :is="(value.children && value.children.length>0)?'el-submenu':'el-menu-item'">
                        <template slot="title">
                            <i :class="[value.icon]"></i>
                            <span>{{value.title}}</span>
                        </template>
                        <template v-if="value.children && value.children.length>0">
                            <el-menu-item class="menu-item" v-for="(v,i) in value.children" :key="v.path+i" :index="v.path">
<!--                                <i :class="[v.icon]"></i>-->
                                <span slot="title">{{v.title}}</span>
                            </el-menu-item>
                        </template>
                    </component>
                </el-menu>
            </el-col>
            <el-col :span="20" style="overflow: auto;">
                    <head-top></head-top>
                    <keep-alive>
                        <div class="content-G">
                            <router-view v-if="isRouterActive"></router-view>
                        </div>
                    </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import headTop from '@/components/copys/headTop'
    import menuListData from "@/assets/menu";
    export default {
        name: "manage",
        components: {
          headTop,
        },
        data() {
            return {
                isRouterActive: true,
                menuListData: menuListData,
            };
        },
        provide() {
          return {
                isRouterActive: this.isRouterActive,
          };
        },
        computed: {
            defaultActive: function () {
                return this.$route.path.replace('/','');
            }
        },
        watch: {
          // '$route.path' (val) {
          //     // let path = val.replace('/','');
          //     // console.log(path);
          // }
        },
        methods: {
            handleSelect(index) {
                // console.log(index,indexPath);
                let path = this.$route.path.replace('/','');
                console.log(path,index);
                if(index === path) {
                    // console.log('1');
                    this.reload();
                }else {
                    // console.log('2');
                    this.$router.push(index);
                }

            },
            reload() {
                this.isRouterActive = false;
                this.$nextTick(()=>{
                    this.isRouterActive = true;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
@import "../assets/styles/mixin";
.manage_page{
 /*background: #2c3e50;background-color: #324057;*/
}
</style>