<template>
    <div class="confirmBox" v-if="isShow">
        <div class="confirmMain">
            <span class="message">{{msg}}</span>
            <div class="btns">
                <span v-for="(item,index) in btns" :key="index" @click="handle(index)">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirm",
        data(){
            return {
                msg:'',
                btns:[],
                isShow:true
            }
        },
        methods:{
            handle(index){
                if(this.btns[index].onPress()){
                    this.btns[index].onPress()
                }
                this.isShow=false
            }
        }
    }
</script>

<style scoped>
    .confirmBox{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,0.6);z-index:99;}
    .confirmMain{width:300px;height:150px;background:#fff;border-radius:5px;position:absolute;left:50%;top:50%;transform: translate(-50%,-50%);}
    .message{display:block;text-align:center;color:#000;padding-top:30px;font-size:14px;}
    .btns{display:flex;justify-content: space-around;border-top:solid 1px #eee;margin-top:25px;}
    .btns span{display:block;text-aling:center;padding-top:25px;cursor: pointer;font-size:14px;}
</style>