<template>
    <div>
        首页
<!--        <div class="home-chart">-->
<!--            <e-chart id="home-e-chart" :option="optionData" width="50%" height="300px"></e-chart>-->
<!--        </div>-->
    </div>
</template>

<script>
    // import EChart from '@/components/EChart';
    export default {
        name: "home",
        components: {
            // EChart,
        },
        data() {
            return {
              optionData: {},
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const option = {
                    title: {
                        text: '2016年上半年全国规模以上工业企业用水情况（单位：亿立方米）',
                        subtext: '数据来源：国家统计局',
                        x: 'center',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            //坐标轴指示器，坐标轴触发有效
                            //默认为直线，可选为：'line' | 'shadow'
                            type: 'shadow'
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: "top",
                        padding: 50,
                        data: ['用水量', '减少量',]
                    },
                    grid: {
                        left: '10',
                        right: '60',
                        bottom: '3%',
                        height: '30%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        //设置坐标轴字体颜色和宽度
                        axisLine: {
                            lineStyle: {
                                color: 'yellow',
                                width: 2
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: 'yellow',
                                width: 2
                            }
                        },
                        data: ['东部地区', '中部地区', '西部地区',]
                    },
                    series: [
                        {
                            name: '用水量',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insidelift'
                                }
                            },
                            data: [109.2, 48.2, 41]
                        },
                        {
                            name: '减少量',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insidelift'
                                }
                            },
                            data: [1.638, 1.0122, 1.025]
                        },
                    ]
                };
                this.optionData = option;
            },
        }
    }
</script>

<style scoped>

</style>