<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4"  style="min-height: 100%;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router @select="handleSelect">
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-document"></i>组织</template>
                        <el-menu-item index="menuList">菜单</el-menu-item>
                        <el-menu-item index="controlList">权限</el-menu-item>
                        <el-menu-item index="roleList">角色</el-menu-item>
                        <el-menu-item index="userList">用户</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-map-location"></i>图表</template>
                        <el-menu-item index="pie">饼图</el-menu-item>
                        <el-menu-item index="mapChina">地图</el-menu-item>
                        <el-menu-item index="mapLine">线图</el-menu-item>
                        <el-menu-item index="mapCar">虚拟车</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-takeaway-box"></i>布局</template>
                        <el-menu-item index="layoutHor">水平</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="chat"><i class="el-icon-chat-line-square"></i>沟通</el-menu-item>
<!--                    <el-submenu index="4">-->
<!--                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>-->
<!--                        <el-menu-item index="visitor">用户分布</el-menu-item>-->
<!--                        &lt;!&ndash; <el-menu-item index="newMember">用户数据</el-menu-item> &ndash;&gt;-->
<!--                    </el-submenu>-->
<!--                    <el-submenu index="5">-->
<!--                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>-->
<!--                        &lt;!&ndash; <el-menu-item index="uploadImg">上传图片</el-menu-item> &ndash;&gt;-->
<!--                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>-->
<!--                    </el-submenu>-->
<!--                    <el-submenu index="6">-->
<!--                        <template slot="title"><i class="el-icon-setting"></i>设置</template>-->
<!--                        <el-menu-item index="adminSet">管理员设置</el-menu-item>-->
<!--                        &lt;!&ndash; <el-menu-item index="sendMessage">发送通知</el-menu-item> &ndash;&gt;-->
<!--                    </el-submenu>-->
<!--                    <el-submenu index="7">-->
<!--                        <template slot="title"><i class="el-icon-warning"></i>说明</template>-->
<!--                        <el-menu-item index="explain">说明</el-menu-item>-->
<!--                    </el-submenu>-->
<!--                    <el-submenu index="8">-->
<!--                        <template slot="title"><i class="el-icon-document"></i>HTML</template>-->
<!--                        <el-menu-item index="htmlFive">五角星</el-menu-item>-->
<!--&lt;!&ndash;                        <el-menu-item index="shopList">商家列表</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-menu-item index="foodList">食品列表</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-menu-item index="orderList">订单列表</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-menu-item index="adminList">管理员列表</el-menu-item>&ndash;&gt;-->
<!--                    </el-submenu>-->
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
    export default {
        name: "manage",
        components: {
          headTop,
        },
        data() {
            return {
                isRouterActive: true,
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