<template>
    <div>
        <div class="box1">
            <div class="box1-left"></div>
            <div class="box1-right"></div>
        </div>
        <div class="box2">
            <div class="box2-left"></div>
            <div class="box2-right"></div>
        </div>
        <div class="box3">
            <div class="box3-left"></div>
            <div class="box3-right"></div>
        </div>
        <div class="box4">
            <div class="box4-left"></div>
            <div class="box4-right"></div>
        </div>
        <div class="box5">
            <div class="box5-left"></div>
            <div class="box5-right"></div>
        </div>
        <div class="box6">
            <div class="box6-left"></div>
            <div class="box6-right"></div>
        </div>
        <div class="box7">
            <div class="box7-left"></div>
            <div class="box7-right"></div>
        </div>
        <div class="box8">
            <div class="box8-left">
                <div class="left"></div>
            </div>
            <div class="box8-right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "controlList",
        components: {}
    }
</script>

<style scoped lang="scss">
    .box8 {
        display: table;
        width: 100%;
        .box8-left {
            display: table-cell;
            width: 0.1%;
            .left {
                width: 200px;
                margin-right: 20px;
                background: #ffdd31;
                height: 200px;
            }
        }
        .box8-right {
            display: table-cell;
            background: #ff6666;
        }
    }
    .box7 {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-gap: 20px;
        .box7-left {
            background: red;
            height: 200px;
        }
        .box7-right {
            height: 300px;
            background: #2AAADF;
        }
    }
    .box6 {
        width: 100%;
        height: 300px;
        display: flex;
        .box6-left {
            width: 400px;
            height: 200px;
            background: #20A0FF;
        }
        .box6-right {
            flex: 1;
            height: 300px;
            background: #999999;
        }
    }
    .box5 {
        width: 100%;
        height: 300px;
        position: relative;
        .box5-left {
            position: absolute;
            width: 100px;
            height: 200px;
            background: #2AAADF;
        }
        .box5-right {
            margin-left: 100px;
            height: 300px;
            background: #f1ffa1;
        }
    }
    .box1 {
        height: 300px;
        width: 100%;
        font-size: 0;

        .box1-left {
            display: inline-block;
            width: 100px;
            height: 200px;
            background: red;
            vertical-align: top;
        }

        .box1-right {
            display: inline-block;
            width: calc(100% - 100px);
            height: 255px;
            background: #ff6666;
            vertical-align: top;
        }
    }

    .box2 {
        width: 100%;
        height: 300px;

        .box2-left {
            float: left;
            width: 150px;
            height: 200px;
            background: #ff6666;
        }

        .box2-right {
            float: left;
            width: calc(100% - 150px);
            height: 255px;
            background: red;
        }
    }

    .box3 {
        width: 100%;
        height: 300px;

        .box3-left {
            float: left;
            width: 200px;
            height: 200px;
            background: #e7e1cd;
        }

        .box3-right {
            margin-left: 200px;
            height: 255px;
            background: #0086b3;
        }
    }

    .box4 {
        width: 100%;
        height: 300px;
        overflow: hidden;

        .box4-left {
            float: left;
            width: 300px;
            height: 200px;
            background: #2c3e50;
        }
        .box4-right {
            overflow: auto;
            height: 300px;
            background: #ff6666;
        }
    }
</style>