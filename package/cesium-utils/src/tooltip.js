let TooltipDiv = (function () {
  let isInit = false

  function _() {}

  _.initTool = function (frameDiv) {
    if (isInit) {
      return
    }

    let div = document.createElement('DIV')
    div.className = 'toolTip-left' //

    // var arrow = document.createElement('DIV');
    // arrow.className = "tooltipdiv-arrow";
    // div.appendChild(arrow);

    let title = document.createElement('DIV')
    title.className = 'tooltipdiv-inner'
    div.appendChild(title)

    this._div = div
    this._title = title

    frameDiv.appendChild(div)

    isInit = true
  }

  _.setVisible = function (visible) {
    if (!isInit) {
      return
    }
    this._div.style.display = visible ? 'block' : 'none'
  }

  /*
    position屏幕坐标
    显示在屏幕上
    */
  _.showAt = function (position, message) {
    if (!isInit) {
      return
    }
    if (position && message) {
      this.setVisible(true)
      this._title.innerHTML = message
      this._div.style.position = 'absolute'
      this._div.style.left = position.x + 60 + 'px'
      this._div.style.top = position.y - this._div.clientHeight / 2 + 'px'
    }
  }

  return _
})()

export default TooltipDiv
