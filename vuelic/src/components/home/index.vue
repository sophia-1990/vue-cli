<template>
    <div>
        <button>提交</button>
        <button @click="delConfirm">删除</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Confirm from '../confirm'
    Vue.use(Confirm)
    export default {
        name: "index",
        data(){
            return {
            }
        },
        methods:{
            delConfirm(){
                this.$confirm('确定要删除吗?',[
                    {
                        text:'取消',
                        onPress:()=>{
                            console.info('取消')
                        }
                    },
                    {
                        text:'确定',
                        onPress:()=>{
                            console.info('确定')
                        }
                    }
                ])
            }
        }
    }
</script>

<style scoped>

</style>