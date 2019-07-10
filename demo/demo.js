Page({
  onLoad() {
    console.log('Page Load...')
  },
  
  // saveRef 方法的参数 ref 为自定义组件实例，运行时由框架传递给 saveRef
  saveRef(ref) {
	// 存储自定义组件实例，方便以后调用
    this.passwordBox = ref;
  },
  data: {
    tipText: '请输入六位数字密码',
    // 用于页面样式的
    valueIsShow: false,
    // 记录临时的值，点击按钮后再保存到对应变量中
    currentValue: '',
    firstValue: '',
    secondValue: ''
  },
  // 调用组件中的方法
  toggleValue() {
    this.setData({
      valueIsShow: !this.data.valueIsShow
    }) 
  },
  inputChange(e) {
    let currentValue = e 
    this.setData({
      currentValue
    })
    console.log(this.data.currentValue)
  },
  saveInputValue() {
    let value = this.data.currentValue
    console.log(this.data)
    if (value.length < 6) {
      return
    }
    if (this.data.firstValue == '') {
      // 调用组件中的方法，清除之前的值
      this.passwordBox.clearCurrentValue() 
      // 重置页面初始的数据，以及文案的修改
      this.setData({
        firstValue: value,
        currentValue: '',
        valueIsShow: false,
        tipText: '请再次确认6位数数字密码'
      })
    } else {
      this.setData({
        secondValue: value
      })
    }
  },
  checkPassword(){
    this.saveInputValue()
    console.log('验证密码...')
  }
})
