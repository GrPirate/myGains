import React, {Component} from 'react'

class ImgFigure extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  /*
   * imgFigure 的点击处理函数
   */
  handleClick = function (e) {

    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }

    e.stopPropagation();
    e.preventDefault();
  }

  render(){

    let styleObj = {};
    const { arrange: { pos, rotate, isCenter, isInverse }, data: { imageURL, title, desc } } = this.props;

    // 如果props属性中指定了这张图片的位置，则使用
    if (pos) {
      styleObj = pos;
    }

    // 如果图片的旋转角度有值并且不为0， 添加旋转角度
    if (rotate) {
      styleObj = {
        ...styleObj,
        transform: 'rotate(' + rotate + 'deg)'
      }
    }

    // 如果是居中的图片， z-index设为11
    if (isCenter) {
      // styleObj.zIndex = 11;
      styleObj = {
        ...styleObj,
        zIndex: 11
      }
    }

    let imgFigureClassName = 'img-figure';
    imgFigureClassName += isInverse ? ' is-inverse' : '';

    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={imageURL}
          alt={title}
        />
        <figcaption>
          <h2 className="img-title">{title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {desc}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default ImgFigure