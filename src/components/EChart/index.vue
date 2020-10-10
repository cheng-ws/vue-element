<template>
    <div :id="id" :style="style"></div>
</template>

<script>
    export default {
        name: "chart_index",
        data() {
            return {
                chart:'',
                option: {}
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
                default: '100%'
            },
            op: {
                type: Object,
                default: ()=>{
                    return {};
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
          op: {
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
              // immediate:true,
          }
        },
        mounted() {
            this.init();
            this.buildResize();
        },
        methods: {
            init() {
                this.chart = this.$echarts.init(document.getElementById(this.id));
                this.chart.setOption(this.option);
            },
            _resetOption(data) {
                let op = JSON.parse(JSON.stringify(data));
                if(Object.keys(op).length > 0) {
                    this.chart.setOption(op);
                }
            },
            buildResize() {
              let vm = this;
              let flag = false;
              window.onresize = function () {
                  if(!flag) {
                      flag = true;
                      setTimeout(()=>{
                          vm.chart.resize();
                          flag = false;
                      },500);
                  }
              }
            }
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