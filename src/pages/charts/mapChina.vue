<template>
    <e-chart
            :id="chartData.id"
            :width="chartData.width"
            :height="chartData.height"
            :op="chartData.option"
            ref="maps"
    ></e-chart>
</template>

<script>
    import EChart from '@/components/EChart';
    import 'echarts/map/js/china.js';

    export default {
        name: "mapChina",
        components: {
            EChart,
        },
        data() {
            return {
                chartData: {
                    id: 'map-china',
                    width: '100%',
                    height: `calc(100vh - 102px)`,
                    option: {}
                }
            };
        },
        mounted() {
            this.init();
        },
        watch: {
            '$route.path': {
                handler(val) {
                    if (val && val === '/mapChina') {
                        let vm = this;
                        vm.$nextTick(() => {
                            vm.init();
                            vm.$refs.maps.buildResize();
                        });
                    }
                },
                immediate: true,
            }
        },
        methods: {
            init() {
                let vm = this;
                // vm.chartData.option = {
                //     series: [{
                //         type: 'map',
                //         map: 'china'
                //     }]
                // };
                let option = {
                    title: {
                        text: 'iphone销量',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['iphone3', 'iphone4', 'iphone5']
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: 'iphone3',
                            type: 'map',
                            mapType: 'china',
                            roam: true,
                            mapStyle: {

                            },
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '重庆', value: Math.round(Math.random() * 1000)},
                                {name: '河北', value: Math.round(Math.random() * 1000)},
                                {name: '河南', value: Math.round(Math.random() * 1000)},
                                {name: '云南', value: Math.round(Math.random() * 1000)},
                                {name: '辽宁', value: Math.round(Math.random() * 1000)},
                                {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                                {name: '湖南', value: Math.round(Math.random() * 1000)},
                                {name: '安徽', value: Math.round(Math.random() * 1000)},
                                {name: '山东', value: Math.round(Math.random() * 1000)},
                                {name: '新疆', value: Math.round(Math.random() * 1000)},
                                {name: '江苏', value: Math.round(Math.random() * 1000)},
                                {name: '浙江', value: Math.round(Math.random() * 1000)},
                                {name: '江西', value: Math.round(Math.random() * 1000)},
                                {name: '湖北', value: Math.round(Math.random() * 1000)},
                                {name: '广西', value: Math.round(Math.random() * 1000)},
                                {name: '甘肃', value: Math.round(Math.random() * 1000)},
                                {name: '山西', value: Math.round(Math.random() * 1000)},
                                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                                {name: '陕西', value: Math.round(Math.random() * 1000)},
                                {name: '吉林', value: Math.round(Math.random() * 1000)},
                                {name: '福建', value: Math.round(Math.random() * 1000)},
                                {name: '贵州', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '青海', value: Math.round(Math.random() * 1000)},
                                {name: '西藏', value: Math.round(Math.random() * 1000)},
                                {name: '四川', value: Math.round(Math.random() * 1000)},
                                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                                {name: '海南', value: Math.round(Math.random() * 1000)},
                                {name: '台湾', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        },
                        {
                            name: 'iphone4',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '重庆', value: Math.round(Math.random() * 1000)},
                                {name: '河北', value: Math.round(Math.random() * 1000)},
                                {name: '安徽', value: Math.round(Math.random() * 1000)},
                                {name: '新疆', value: Math.round(Math.random() * 1000)},
                                {name: '浙江', value: Math.round(Math.random() * 1000)},
                                {name: '江西', value: Math.round(Math.random() * 1000)},
                                {name: '山西', value: Math.round(Math.random() * 1000)},
                                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                                {name: '吉林', value: Math.round(Math.random() * 1000)},
                                {name: '福建', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '西藏', value: Math.round(Math.random() * 1000)},
                                {name: '四川', value: Math.round(Math.random() * 1000)},
                                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        },
                        {
                            name: 'iphone5',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '台湾', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        }
                    ]
                };
                vm.chartData.option = option;
                // vm.$refs.maps._resetOption(vm.chartData.option);
                this.handleReal();
            },
            handleReal() {
                let vm = this;
                vm.timerOne = setInterval(() => {
                    let option = {
                        data1: [
                            {name: '北京', value: Math.round(Math.random() * 1000)},
                            {name: '天津', value: Math.round(Math.random() * 1000)},
                            {name: '上海', value: Math.round(Math.random() * 1000)},
                            {name: '重庆', value: Math.round(Math.random() * 1000)},
                            {name: '河北', value: Math.round(Math.random() * 1000)},
                            {name: '河南', value: Math.round(Math.random() * 1000)},
                            {name: '云南', value: Math.round(Math.random() * 1000)},
                            {name: '辽宁', value: Math.round(Math.random() * 1000)},
                            {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                            {name: '湖南', value: Math.round(Math.random() * 1000)},
                            {name: '安徽', value: Math.round(Math.random() * 1000)},
                            {name: '山东', value: Math.round(Math.random() * 1000)},
                            {name: '新疆', value: Math.round(Math.random() * 1000)},
                            {name: '江苏', value: Math.round(Math.random() * 1000)},
                            {name: '浙江', value: Math.round(Math.random() * 1000)},
                            {name: '江西', value: Math.round(Math.random() * 1000)},
                            {name: '湖北', value: Math.round(Math.random() * 1000)},
                            {name: '广西', value: Math.round(Math.random() * 1000)},
                            {name: '甘肃', value: Math.round(Math.random() * 1000)},
                            {name: '山西', value: Math.round(Math.random() * 1000)},
                            {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                            {name: '陕西', value: Math.round(Math.random() * 1000)},
                            {name: '吉林', value: Math.round(Math.random() * 1000)},
                            {name: '福建', value: Math.round(Math.random() * 1000)},
                            {name: '贵州', value: Math.round(Math.random() * 1000)},
                            {name: '广东', value: Math.round(Math.random() * 1000)},
                            {name: '青海', value: Math.round(Math.random() * 1000)},
                            {name: '西藏', value: Math.round(Math.random() * 1000)},
                            {name: '四川', value: Math.round(Math.random() * 1000)},
                            {name: '宁夏', value: Math.round(Math.random() * 1000)},
                            {name: '海南', value: Math.round(Math.random() * 1000)},
                            {name: '台湾', value: Math.round(Math.random() * 1000)},
                            {name: '香港', value: Math.round(Math.random() * 1000)},
                            {name: '澳门', value: Math.round(Math.random() * 1000)}
                        ],
                        data2: [
                            {name: '北京', value: Math.round(Math.random() * 1000)},
                            {name: '天津', value: Math.round(Math.random() * 1000)},
                            {name: '上海', value: Math.round(Math.random() * 1000)},
                            {name: '重庆', value: Math.round(Math.random() * 1000)},
                            {name: '河北', value: Math.round(Math.random() * 1000)},
                            {name: '安徽', value: Math.round(Math.random() * 1000)},
                            {name: '新疆', value: Math.round(Math.random() * 1000)},
                            {name: '浙江', value: Math.round(Math.random() * 1000)},
                            {name: '江西', value: Math.round(Math.random() * 1000)},
                            {name: '山西', value: Math.round(Math.random() * 1000)},
                            {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                            {name: '吉林', value: Math.round(Math.random() * 1000)},
                            {name: '福建', value: Math.round(Math.random() * 1000)},
                            {name: '广东', value: Math.round(Math.random() * 1000)},
                            {name: '西藏', value: Math.round(Math.random() * 1000)},
                            {name: '四川', value: Math.round(Math.random() * 1000)},
                            {name: '宁夏', value: Math.round(Math.random() * 1000)},
                            {name: '香港', value: Math.round(Math.random() * 1000)},
                            {name: '澳门', value: Math.round(Math.random() * 1000)}
                        ],
                        data3: [
                            {name: '北京', value: Math.round(Math.random() * 1000)},
                            {name: '天津', value: Math.round(Math.random() * 1000)},
                            {name: '上海', value: Math.round(Math.random() * 1000)},
                            {name: '广东', value: Math.round(Math.random() * 1000)},
                            {name: '台湾', value: Math.round(Math.random() * 1000)},
                            {name: '香港', value: Math.round(Math.random() * 1000)},
                            {name: '澳门', value: Math.round(Math.random() * 1000)}
                        ]
                    };
                    vm.chartData.option.series.map((item,index)=>{
                        let num = index + 1;
                        let data = 'data'+num;
                        item.data = option[data];
                    });
                    // vm.$refs.maps._resetOption(vm.chartData.option);
                }, 6000);
            }
        }
    }
</script>

<style scoped lang="scss">
</style>