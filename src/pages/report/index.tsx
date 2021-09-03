import React, { Component } from 'react'
import { View, Text , Picker} from '@tarojs/components'
import {
  AtButton,
  AtDrawer,
  AtIcon,
  AtAvatar,
  AtList, AtListItem,
} from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Report extends Component {
  constructor(props) {
    super(props)
    //绑定他的this;
    this.handleClick = this.handleClick.bind(this);

  }
  state = {
    list: [],
    start: '',
    msg: '1663',
    msg2: 'luodongdon',
    show: false,
    //
    dateSel: '2018-04-22'
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
        url: '/pages/report/index'
      })
    } else if(type == 1){
      Taro.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
  onClose() {

  }
  onTimeChange(){}
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
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
        <AtIcon value='bullet-list' className="top-icon" size='60' color='#F00' onClick={this.handleClick}></AtIcon>
        
        <View className='page-section'>
            <View>
              <Picker mode='date' onChange={this.onDateChange.bind(this)}>
                <AtList>
                  <AtListItem title='请选择日期' extraText={this.state.dateSel} />
                </AtList>
              </Picker>
            </View>
          </View>
        <AtDrawer
          show={this.state.show}
          mask
          width='180px'
          className="left-bar"
        >
          <View className='out-box'>
            <View className='header-box'>
              <View className='text'>boss</View>
              <AtAvatar circle text='王总' className='header'></AtAvatar>
            </View>
            <AtList>
              <AtListItem
                title='销售'
                onClick={this.toUrl.bind(this,1)}
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
              <AtListItem
                title='报表'
                onClick={this.toUrl.bind(this,2)}
                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              />
            </AtList>

          </View>
        </AtDrawer>
      </View>
    )
  }
}

