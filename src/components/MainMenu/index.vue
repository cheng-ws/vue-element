<template>
    <ul class="menu-ul">
        <li class="menu-li" v-for="item in menuListData" :key="item._id" @click="handleRouterClick(item)">
            <span class="menu-span">{{item.name}}</span>
            <i class="iconfont iconaixin" :class="{'menu-active-icon': item.path === currentPath}"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "main-menu-index",
        props: {
            menuListData: {
                type: Array,
                default: ()=>[]
            },
        },
        data() {
            return {
                currentPath: '/home',
            };
        },
        watch: {

        },
        computed: {

        },
        mounted() {
        },
        methods: {
            handleRouterClick(item) {
                this.$emit('locationPush', item);
                this.currentPath = item.path;
            },
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

            .menu-active-icon {
                background-color: #ff6666;
            }

            .menu-span {
                padding: 4px 0px 4px 10px;
            }
        }
    }
</style>