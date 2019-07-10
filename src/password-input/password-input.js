Component({
  mixins: [],
  data: {
    // input是否获取焦点
    inputFocus: false,
    // 初始input值为空
    currentValue: ''
  },
  props: {
    // 激活状态边框颜色
    activeBorderColor: '#118EE9',
    // 输入框的数量
    inputLength: 6,
    // 单个输入框的宽度
    inputWidth: '80rpx',
    inputHeight: '74rpx',
    // 是否显示输入的值，默认隐藏
    showValue: false,
    onInputChange: () => {},
    onInputComplate: () => {}
  },
  didMount() {},
  didUpdate() {
    console.log('更新')
    console.log(this.props)
  },
  didUnmount() {},

  methods: {
    // 设置当前的值
    _setCurrentValue(e) {
      // 在此处判断满6（inputLength）位，把值返回给上级父组件或页面
      // 改变时，派发一个事件，如果父组件或页面中需要实时获取改变后的值，可以监听这个事件。
      this.props.onInputChange(e.detail.value)
      this.setData({
        currentValue: e.detail.value
      }) 
    },
    // 点击伪装的input时，让隐藏的input获得焦点
    _focusInput() {
      this.setData({
        inputFocus: true
      })
    },
    _inputBlur() {
      console.log(11)
      this.setData({
        inputFocus: false
      })
    },
    // 清除input当前的值
    clearCurrentValue() {
      this.setData({
        currentValue: ''
      })
    }
  },
});
