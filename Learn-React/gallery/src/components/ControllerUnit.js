import React, { Component } from 'react'

// 控制组件
class ControllerUnit extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = function (e) {

    // 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }

    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    let controlelrUnitClassName = "controller-unit";
    const { isCenter, isInverse } = this.props.arrange;
    
    // 如果对应的是居中的图片，显示控制按钮的居中态
    if (isCenter) {
      controlelrUnitClassName += " is-center";

      // 如果同时对应的是翻转图片， 显示控制按钮的翻转态
      if (isInverse) {
        controlelrUnitClassName += " is-inverse";
      }
    }

    return (
      <span className={controlelrUnitClassName} onClick={this.handleClick}></span>
    );
  }
}  

export default ControllerUnit
