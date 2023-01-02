class Rotate {
    constructor() {
        this.el = null;
    }

    init(par, cls) {
        this.rotateEl = par
        this.el = cls

        return this
    }

    RotateWheel() {
        this.rotateEl.onwheel = (e) => {
            let delta = (e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1))

            if (delta > 0) {//放大
                // 向上滚
                let oWidth = this.el.offsetWidth;//取得图片的实际宽度
                let oHeight = this.el.offsetHeight; //取得图片的实际高度

                this.el.style.width = (oWidth + 50) + "px"
                this.el.style.height = (oHeight + 50 / oWidth * oHeight) + "px"

            } else if (delta < 0) {//缩小
                //向下滚
                let oWidth = this.el.offsetWidth; //取得图片的实际宽度
                let oHeight = this.el.offsetHeight; //取得图片的实际高度

                if (this.el.offsetWidth > 100 || this.el.offsetHeight > 75) {//判断如果图片缩小到原图大小就停止缩小(100和75分别为原图的宽高)
                    this.el.style.width = oWidth - 50 + "px"
                    this.el.style.height = oHeight - 50 / oWidth * oHeight + "px"
                }
            }
        }
    }
}

class Drag {
    constructor() {
        this.el = null;
        this.dragEl = null;
        this.defaultEvent = false;
    }

    init(drag, move, defaultEvent = false) {
        this.dragEl = drag
        this.el = move
        this.defaultEvent = defaultEvent

        return this
    }

    DragWheel() {
        this.dragEl.onmousedown = (e) => {
            if (this.defaultEvent) {
                e.preventDefault()
            }

            this.dragEl.onmousemove = ({ movementX, movementY }) => {
                let getStyle = window.getComputedStyle(this.el),
                    left = parseInt(getStyle.left),
                    top = parseInt(getStyle.top);

                this.el.style.left = `${left + movementX}px`;
                this.el.style.top = `${top + movementY}px`;
            }
        }

        this.el.onmouseup = () => {
            this.dragEl.onmousemove = null
        }

        this.el.onmouseover = () => {
            this.dragEl.onmousemove = null
        }
    }
}

const boxHeight = body.offsetHeight;
const boxWidth = body.offsetWidth;

const range = 6
const amend = -range

function getPicStretchingEvent(element) {
    element.onmousemove = e => {
        // 盒子到屏幕左边，上边的距离，，和鼠标位置
        let left = getAbsLeft(element),
            top = getAbsTop(element),
            x = e.clientX,
            y = e.clientY,
            width = element.offsetWidth,
            height = element.offsetHeight;

        if (width + left - x < range && height + top - y < range) {
            //  right down
            element.style.cursor = "se-resize";

            this.onmousedown = function (e) {
                Stretching_RightDown(e, element)
            };
        } else if (width + left - x < range) {
            // right
            element.style.cursor = "e-resize";

            this.onmousedown = function (e) {
                Stretching_Right(e, element)
            };
        } else if (height + top - y < range) {
            // down
            element.style.cursor = "s-resize";

            this.onmousedown = function (e) {
                Stretching_Down(e, element)
            };
        } else {
            element.style.cursor = "default";

            this.onmousedown = null;
        }
    }
}

function getAbsLeft(obj) {
    var l = obj.offsetLeft;

    while (obj.offsetParent != null) {
        obj = obj.offsetParent;
        l += obj.offsetLeft;
    }

    return l;
}

function getAbsTop(obj) {
    var top = obj.offsetTop;

    while (obj.offsetParent != null) {
        obj = obj.offsetParent;
        top += obj.offsetTop;
    }

    return top;
}

function Stretching_Down(e, element) {
    const top = element.offsetTop;
    const height = element.offsetHeight;
    const nowY = e.clientY;

    document.onmousemove = function (e) {
        e = e || window.event;

        element.style.height = Dragging_Height(
            height + e.clientY - nowY,
            top, 100
        ) + "px";
    }
}

function Stretching_Right(e, element) {
    const left = element.offsetLeft;
    const width = element.offsetWidth;
    const nowX = e.clientX;

    document.onmousemove = function (e) {
        e = e || window.event;

        element.style.width = Dragging_Width(
            width + e.clientX - nowX,
            left, 100
        ) + "px";
    }
}

function Stretching_RightDown(e, element) {
    const left = element.offsetLeft;
    const top = element.offsetTop;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const nowX = e.clientX;
    const nowY = e.clientY;

    document.onmousemove = function (e) {
        e = e || window.event;

        element.style.width = Dragging_Width(
            width + e.clientX - nowX,
            left, 100
        ) + "px";

        element.style.height = Dragging_Height(
            height + e.clientY - nowY,
            top, 100
        ) + "px";
    }
}

function Dragging_Width(width, left, minWidth) {
    width = (width + left > boxWidth ? boxWidth - left : width) - range - amend;

    return width < minWidth ? minWidth : width;
}

function Dragging_Height(height, top, minHeight) {
    height = (height + top > boxHeight ? boxHeight - top : height) - range - amend;

    return height < minHeight ? minHeight : height;
}

document.onmouseup = function () {
    document.onmousemove = null;
}

/**
 * remove pic panel
 * @param {Node} element 
 */
function remove_pic_show(element) {
    function opacityDown() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                element.classList.add('closing');
                resolve(0)
            }, 0)
        })
    }

    function removeElement() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                pic_show.removeChild(element)
            }, 300)
        })
    }

    opacityDown().then(() => { removeElement() })
}

/**
 * create pic panel
 * @param {Node} element 
 */
function add_pic_show(element) {
    function createElement() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                pic_show.appendChild(element)
                resolve(0)
            }, 0)
        })
    }

    function removeClassListOpacity() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                element.classList.remove('closing');

                new Rotate().init(element.querySelector('.pic-area'), element.querySelector('.pic-area').querySelector('img')).RotateWheel()
                new Drag().init(element.querySelector('.dragging-top'), element, false).DragWheel()
                new Drag().init(element.querySelector('.pic-area').querySelector('img'), element.querySelector('.pic-area').querySelector('img'), true).DragWheel()
                getPicStretchingEvent(element)
            }, 0)
        })
    }

    createElement().then(() => { removeClassListOpacity() })
}
