import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {
  AtButton,
  AtDrawer,
  AtIcon,
  AtAvatar,
  AtList, AtListItem
} from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Home extends Component {
  constructor(props: any) {
    super(props)
    //绑定他的this;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      list: [],
      start: '',
      msg: '1663',
      msg2: 'luodongdon',
      show: false,
    }
  }
  handleClick() {
    console.log()
    //修改他的值；
    this.setState(state => {
      //state代表它本身；
      return {
        msg: '996',
        show: true,
      }
    })
  }
  toUrl(type){
    console.log(type,'type')
    if(type == 2){
      Taro.navigateTo({
        url: '/pages/report-form/report-form'
      })
    } else if(type == 1){
      Taro.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
  onClose() {

  }
  componentWillMount() { }
  componentDidMount() {
    console.log()
  }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  render() {
    return (
      <View className='index'>
        <AtButton>clickme</AtButton>
      </View>
    )
  }
}

