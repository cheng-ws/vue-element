<template>
    <div class="fillcontain">
        <div class="five">
            <canvas id="canvas" ></canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: "htmlFive",
        data() {
            return {

            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let vm = this;
                window.onload = function () {
                    let canvas = document.getElementById('canvas');
                    if(canvas) {
                        let context = canvas.getContext("2d");
                        vm.drawStar(context, 50,100,100);
                    }else {
                        document.writeln("浏览器不支持canvas组件");
                    }
                }
                // let xy=16(sint)3=13cost−5cos(2t)−2cos(3t)−cos(4t);
                // t=linspace(-6,6,1000);
                // x=16*(sin(t)).^3;
                // y=13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t);
                // plot(x,y);
            },
            drawStar(context ,r,x,y) {
                context.lineWidth = 5;
                context.beginPath();
                let dit = Math.PI * 4 / 5;
                let sin = Math.sin(0) * r + y;
                let cos = Math.cos(0) * r + x;
                console.log(0+":"+0);
                context.moveTo(cos,sin);
                for(let i=0;i< 5;i++) {
                    let temDit = dit * i;
                    sin = Math.sin(temDit) * r + y;
                    cos = Math.cos(temDit) * r + x;
                    context.lineTo(cos, sin);
                    console.log(sin+":"+sin+":"+temDit);
                }
                context.closePath();
                context.strokeStyle = "red";
                context.fillStyle = "#ffc107";
                context.fill();
            }
        }
    }
</script>

<style scoped lang="scss">
.fillcontain {
    position: relative;
    .five {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
    }
}
</style>