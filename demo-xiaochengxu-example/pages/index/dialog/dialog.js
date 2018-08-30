// pages/index/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  openConfirm:function(){
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗难题荣，告知当前状态，信息和解决办法',
      confirmText:'主操作',
      cancelText:'辅助操作',
      success:function(res){
        console.log(res);
        if(res.confirm){
          console.log('用户点击祝操作')
        }else{
          console.log('用户点击辅助操作')
        }    
      }
    });
  },

  openAlert:function(){
    wx.showModal({
      
      content: '弹窗内容，告知当前状态信息和解决办法',
      showCancel: false,
      success:function(res){
        if(res.confirm){
          console.log('用户点击确定')
        }
      }
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