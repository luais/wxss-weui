// pages/index/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips:false,

    radioItems:[
      {name:'cell standard', value:'0'},
      {name:'cell standard', value:'1',checked:true}
    ],

    checkboxItems:[
      { name: 'standard is dealt for u.', value: '0', checked:true},
      { name: 'standard is dealicient for u.', value: '1'}],
      date:"2017-09-01",
      time:"12:01",

      countryCodes:["+86","+80","+84","+87"],
      countryCodeIndex:0,

      accounts:["QQ","Wechat","Email"],
      accountIndex:0,

      countries:["USA","CHN","IND","JP"],
      countryIndex:0,
      isAgree:false
  },

  radioChange:function(e){
    var radioItems = this.data.radioItems;
    for(var i=0,len=radioItems.length; i<len;++i){
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems:radioItems
    });
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },

  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },

  bindTimeChange:function(e){
    this.setData({
      time:e.detail.value
    })
  },

  bindCountryCodeChange:function(e){
    console.log('picker country code 发生改变,值为',e.detail.value);
    this.setData({
      countryCodeIndex:e.detail.value
    })
  },
  bindAccountChange:function(e){
    console.log('account code 发生改变,值为',e.detail.value);
    this.setData({
      accountIndex:e.detail.value
    })
  },

  bindCountryChange:function(e){
    console.log('country code 发生改变 值为',e.detail.value);
    this.setData({
      countryIndex:e.detail.value
    })
  },

  bingAgreeChange:function(e){
    this.setData({
      isAgree:!!e.detail.value.length
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})