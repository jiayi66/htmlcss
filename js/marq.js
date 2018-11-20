/**
* @author 靖鸣君
* @email jingmingjun92@163.com
* @description 滚动
* @class Marquee
* @param {Object}
*/
var Marquee = function(){
    this.direction = "top";
    this.speed = 30;
};

Marquee.prototype = {
    //initial
    init: function(obj, setttings){
        this.obj = obj;
        this._createBox();
        this.scroll();
        if(settings){
            settings.direction && (this.direction = settings.direction);
            settings.speed && (this.speed = settings.speed);
        }
    },
    _createBox: function(){
        //create inner box A
        this.iBox = document.createElement("div");
        var iBox = this.iBox;
        with(iBox.style){
            width = "100%";
            height = "100%";
            overflow = "hidden";
        }
        iBox.setAttribute("id", "marqueeBoxA");
        iBox.innerHTML = obj.innerHTML;

        //clone inner box B
        var iBox2 = iBox.cloneNode(true);
        iBox2.setAttribute("id", "marqueeBoxB");

        //append to obj Box
        this.obj.innerHTML = "";
        this.obj.appendChild(iBox);
        this.obj.appendChild(iBox2);
    },
    //animation
    scroll: function() {
        var _self = this;
        this.timer = setInterval(function(){
            _self._ani();
        }, this.speed);
    },
    //setInterval function
    _ani: function() {
        if(obj.clientHeight - obj.scrollTop <= 0){
            obj.scrollTop = obj.offsetHeight - obj.scrollTop + 1;
        } else {
            obj.scrollTop++;
            console.log(obj.offsetHeight, obj.scrollTop);
        }
    },
    stop: function(){
        clearInterval(this.timer);
    },
    start: function(){
        this.scroll();
    }
};