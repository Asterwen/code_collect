# code_collect
job_coding  for next Project


# div 垂直居中
// 1. 行内元素
.parent{ height: cc} .son{ line-height: cc}    
// 2. table
.parent{ display: table} .son{ display: table-cell; vertical-align: middle;}
// 3. flex
.parent{ display: flex; align-items: center}
// 4. 绝对定位
.son{ position: absolute; top: 50%; transform: translate(0, -50%)}
// 5. top/bottom:0
.son{ position: absolute; height: cc; top: 0; bottom: 0; margin: auto 0;}

# flex
display: flex;
flex-direction: row, row-reverse, column, column-reverse;
flex-wrap: nowrap, wrap, wrap-reverse;
flex-flow:  flex-direction + flex-wrap 简写
justify-content: flex-start, flex-end, center, space-between, space-around;
align-items: flex-start, flex-end, center, baseline, stretch;

# flex 子元素属性
order  排序 值小的排前面
flex-grow  弹性设置 在当前行的宽度  总值为1
flex-shrink  收缩
flex-basis  (length,auto) 设置基准值
align-self  设置盒子 的对齐方式  可以覆盖父容器的对齐方式

# 让元素消失
visibility: hidden;
display: none;
z-index: -1;
opacity: 0;

# 清除浮动
1. 在浮动元素 的样式中添加  clear: both;
2. 给父元素添加 overflow: hidden; 触发BFC
3. 使用伪元素
  .clearfix{ zoom: 1;}
4  .clearfix:after{ content:""; height: 0; clear: both; display: block; visibility: hidden;}

# calc函数
width: calc(100% / (100px / 2));  注意计算符号前后加空格

# 移动端rem   //设置默认750
(function(){
  var html = document.documentElement;
  function onWindowResize(){
    html.style.fontSize = html.getBoundingClientRect().width / 7.5 +'px';  
  }
  window.addEventListener('resize', onWindowRsize)
  onWindowResize()
})()
  
 # 移动端 1px
                .border,.border-left,.border-right,.border-top,.border-bottom{
                    position: relative;
                    border:none;
                }
                .border:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border: 1px solid #f00;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                .border-left:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-left: 1px solid #f00;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                .border-right:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-right: 1px solid #f00;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                .border-top:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-top: 1px solid #f00;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                .border-bottom:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-bottom: 1px solid #f00;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                @media only screen and (-webkit-device-pixel-ratio:2){
                    .border:after{
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-left:after{
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-right:after{
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-top:after{
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-bottom:after{
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                }
                @media only screen and (-webkit-device-pixel-ratio:3){
                    .border:after{
                        width: 300%;
                        height: 300%;
                        -webkit-transform: scale(0.33333);
                        transform: scale(0.33333);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-left:after{
                        width: 300%;
                        height: 300%;
                        -webkit-transform: scale(0.33333);
                        transform: scale(0.33333);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-right:after{
                        width: 300%;
                        height: 300%;
                        -webkit-transform: scale(0.33333);
                        transform: scale(0.33333);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-top:after{
                        width: 300%;
                        height: 300%;
                        -webkit-transform: scale(0.33333);
                        transform: scale(0.33333);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    .border-bottom:after{
                        width: 300%;
                        height: 300%;
                        -webkit-transform: scale(0.33333);
                        transform: scale(0.33333);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                }

# 圣杯布局 和双飞翼布局 本职上是一样的 就是元素包裹不一样 
圣杯布局 有共同的 container
双飞翼 是分开的

# 伪类和 伪元素


伪元素 有 ::before, ::after, ::first-line, ::first-letter, ::selection, ::placeholder  


# css 画图形
/* 半圆 */
.half-circle{
    height: 50px;
    border-radius: 50px 50px 0 0;
}
/* 扇形 */
.sector{
    border-radius: 100px 0 0;
}
/* 三角 */
.triangle{
    width: 0px;
    height: 0px;
    background: none;
    border: 50px solid red;
    border-color: red transparent transparent transparent;
}
/* 梯形 */
.ladder{
    width: 50px;
    height: 0px;
    background: none;
    border: 50px solid red;
    border-color: red transparent transparent transparent;
}

# 防抖
function debounce(fn, delay){
  let timer = null
  return function(){
    timer = setTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

# 节流
function throttle(fn, cycle){
  let start = Date.now()
  let now
  let timer
  return function(){
    now = Date.now()
    clearTimeout(timer)
    if(now - start >= cycle){
      fn.apply(this, arguments)
      start = now
    }else{
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, cycle)
    }
  }
}








