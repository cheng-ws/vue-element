<template>
    <div :id="id" :style="style"></div>
</template>

<script>
    export default {
        name: "echart_index",
        data() {
            return {
                chart:''
            };
        },
        props: {
            id: {
                type: String,
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            },
            option: {
                type: Object,
                default () {
                    return {
                        title: {
                            text: "vue-Echarts"
                        },
                        legend: {
                            data: []
                        },
                        xAxis: {
                            data: []
                        },
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '',
                                type: 'line',
                                data: []
                            }
                        ]
                    };
                }
            }
        },
        computed: {
            style () {
                return {
                    height: this.height,
                    width: this.width
                };
            },
        },
        watch: {
          option: {
              handler(newVal,oldVal) {
                  if(this.chart) {
                      if(newVal) {
                          this.chart.setOption(newVal);
                      }else {
                          this.chart.setOption(oldVal);
                      }
                  }else {
                      this.init();
                  }
              },
              deep: true,
          }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.chart = this.$echarts.init(document.getElementById(this.id));
                this.chart.setOption(this.option);
            },
            //父级请求动态刷新数据
            // refreshData() {
            //     //横轴数据
            //     let xData = this.chartData.xData,
            //         //系列值
            //         sData = this.chartData.sData;
            //     for(let i = 0;i<xData.length;i++) {
            //         setTimeout(() =>{
            //             this.option.xAxis.data.push(xData[i]);
            //             this.option.series[0].data.push(sData[i]);
            //         },1000*i);
            //     }
            // }
        }

    }
</script>

<style scoped>

</style>