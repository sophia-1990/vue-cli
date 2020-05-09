import Confirm from './confirm'
export default {
    install(Vue){
        let confirmHtml = Vue.extend(Confirm) //继承
        Vue.prototype.$confirm=function(msg,btns){
            let confirmInit = new confirmHtml().$mount(document.createElement('div'))
           document.body.appendChild(confirmInit.$el)
            confirmInit.msg = msg
            if(btns && btns.length>0){
                confirmInit.btns = btns
            }
        }
    }
}