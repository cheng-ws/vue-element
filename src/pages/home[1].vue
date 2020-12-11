<template>
    <div class="home-G">
<!--        <head-top></head-top>-->
<!--        <section class="data_section">-->
<!--            <header class="section_title">数据统计</header>-->
<!--            <el-row :gutter="20" style="margin-bottom: 10px;">-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list today_head"><span class="data_num head">当日数据：</span></div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--            <el-row :gutter="20">-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list all_head"><span class="data_num head">总数据：</span></div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </section>-->
        <div class="home-chart">
<!--            <tendency :sevenDate='sevenDate' :sevenDay='sevenDay' v-if="flagActive"></tendency>-->
        </div>
    </div>

</template>

<script>
    // import headTop from '../components/copys/headTop'
    // import tendency from '../components/copys/tendency'
    // import dtime from 'time-formater'
    import {userCount, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount} from '@/api/nouse/getData'

    export default {
        name: "home",
        components: {
            // headTop,
            // tendency,
        },
        data() {
            return {
                userCount: null,
                orderCount: null,
                adminCount: null,
                allUserCount: null,
                allOrderCount: null,
                allAdminCount: null,
                sevenDay: [],
                sevenDate: [[], [], []],
                flagActive: true,
            };
        },
        inject: ['isRouterActive'],
        mounted() {
            // this.initData();
            // for (let i = 6; i > -1; i--) {
            //     const date = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD');
            //     this.sevenDay.push(date);
            // }
            // this.getSevenData();
        },
        watch: {
            isRouterActive: {
                handler() {
                    if (this.$route.path === '/manage') {
                        this.flagActive = false;
                      this.$nextTick(()=> {
                          this.flagActive = true;
                      });
                    }
                },
                immediate: true,
            }
        },
        methods: {
            async initData() {
                const today = dtime().format('YYYY-MM-DD');
                Promise.all([userCount(today), orderCount(today), adminDayCount(today), getUserCount(), getOrderCount(), adminCount()])
                    .then(res => {
                        // console.log(res);

                        this.userCount = res[0].data.count;
                        this.orderCount = res[1].data.count;
                        this.adminCount = res[2].data.count;
                        this.allUserCount = res[3].data.count;
                        this.allOrderCount = res[4].data.count;
                        this.allAdminCount = res[5].data.count;
                    }).catch(err => {
                    console.log(err);
                });
            },
            async getSevenData() {
                const apiArr = [[], [], []];
                this.sevenDay.forEach(item => {
                    apiArr[0].push(userCount(item));
                    apiArr[1].push(orderCount(item));
                    apiArr[2].push(adminDayCount(item));
                });
                const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]];
                Promise.all(promiseArr).then(res => {
                    const resArr = [[], [], []];
                    // console.log(res);
                    res.forEach((item, index) => {
                        if (item.data.status == 1) {
                            resArr[Math.floor(index / 7)].push(item.data.count);
                        }
                    });
                    this.sevenDate = resArr;
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/mixin';

    .data_section {
        padding: 20px;
        margin-bottom: 40px;

        .section_title {
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
        }

        .data_list {
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;

            .data_num {
                color: #333;
                font-size: 26px;

            }

            .head {
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }

        .today_head {
            background: #FF9800;
        }

        .all_head {
            background: #20A0FF;
        }
    }

    .wan {
        @include sc(16px, #333)
    }
</style>