import { createStore, applyMiddleware } from 'redux'
//import  { createAction, handleAction, combineActions } from 'redux-actions'//异步创建action库

//import promiseMiddleware from 'redux-promise'//可以使 store.dispatch 可以接受 promise 对象作为参数
//import createLogger from 'redux-logger'      //添加日志生成器
import thunk from 'redux-thunk'              //异步处理操作使用thunk,使用后action内就可以返回 (dispatch, getState) =>{} 操作函数了
import reducer from '../reducers'

//const logger = createLogger()

const store = createStore(reducer, applyMiddleware(thunk/*, promiseMiddleware, logger*/))

//获取当前值
let currentValue = store.getState()
//创建一个监听
store.subscribe(() => {
    const prevValue = currentValue
    currentValue = store.getState()
    console.log(prevValue , currentValue)
})

//分发任务
//store.dispatch(reducer())

export default store