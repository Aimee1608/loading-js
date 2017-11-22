/**
 * Created by jiangqian on 2017/11/21.
 */
var loadingBox = function(obj){
    var self = this;
    //判断当前是否有参数传入
    if(obj){
        self.title = typeof (obj.title)=="undefined"?"请稍等！":obj.title;
        self.color = typeof (obj.color)=="undefined"?"rgb(56, 142, 122)":obj.color;
    }else{
        self.title = "请稍等！";
        self.color = "rgb(56, 142, 122)";
    }


    self.style = "#loadBox{width:100vw;height:100vh;background:rgba(22,22,22,0.2);z-index:100001;position:fixed;left:0;top:0;display:none;} " +
    "#loadBox .load-content{min-width:220px;height:30px;line-height:30px;padding:15px 20px;text-align:center;color:"+self.color+";background:rgb(49,41,35);border-radius: 12px;position: absolute;left:50%;top:50%;transform:translate(-50%,-50%)} " +
    "#loadBox .load-move{ position: absolute;left:0;top:-11px;width: 80px;height: 80px;background: transparent;} " +
    "#loadBox .load-loading{box-sizing: border-box;width: 80%;height: 80%;position: absolute;left: 10%;top: 10%;opacity: 1; -moz-animation: load 2.28s linear infinite; -webkit-animation: load 2.28s linear infinite;animation: load 2.28s linear infinite;} " +
    "#loadBox .load-loading:nth-child(1){ -moz-animation-delay: 0.4s; -webkit-animation-delay: 0.2s;animation-delay: 0.2s;}" +
    "#loadBox .load-loading:nth-child(2){ -moz-animation-delay: 0.4s; -webkit-animation-delay: 0.6s;animation-delay: 0.6s;}" +
    "#loadBox .load-loading:nth-child(3){ -moz-animation-delay: 0.4s; -webkit-animation-delay: 0.8s;animation-delay: 0.8s;}" +
    "#loadBox .load-loading:nth-child(4){ -moz-animation-delay: 0.4s; -webkit-animation-delay: 1s;animation-delay: 1s;}" +
    "#loadBox .load-loading span{box-sizing:border-box;display:inline-block;border-radius: 50%; margin-top: -6px;margin-left: -6px;width: 4px;height: 4px;background: rgb(113, 234, 113); filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);} " +
    "@keyframes load {0% { -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg);transform: rotate(0deg);}10% { -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -webkit-transform: rotate(45deg);transform: rotate(45deg);}50% {filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);opacity: 1; -moz-transform: rotate(160deg); -ms-transform: rotate(160deg); -webkit-transform: rotate(160deg);transform: rotate(160deg);}62% {filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity: 0;}65% {filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity: 0; -moz-transform: rotate(200deg); -ms-transform: rotate(200deg); -webkit-transform: rotate(200deg);transform: rotate(200deg);}90% { -moz-transform: rotate(340deg); -ms-transform: rotate(340deg); -webkit-transform: rotate(340deg);transform: rotate(340deg);}100% { -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg);transform: rotate(360deg);}}" +
    "#loadBox .load-content .load-title{ box-sizing:border-box;width: 100%;text-align:center;color: "+self.color+";font-size: 16px;padding: 2px 0;margin: 0;margin-right:0;padding-left:45px;white-space: nowrap;overflow: hidden; -ms-text-overflow: ellipsis; -o-text-overflow: ellipsis;text-overflow: ellipsis;}";
    self.initData();
};
loadingBox.prototype = {
    constructor:loadingBox,
    initData:function(){
        var self = this;
        var box = document.getElementById('loadBox');
        if(box){
            alert('id名重复--loadBox');
            return;
        }else{
            $("<style></style>").text(self.style).appendTo($("head"));
            var loading = '<div class="load-move">\
                                <div class="load-loading"><span></span></div>\
                                <div class="load-loading"><span></span></div>\
                                <div class="load-loading" ><span></span></div>\
                                <div class="load-loading" ><span></span></div>\
                                <div class="load-loading" ><span></span></div>\
                            </div>';
            var content = '<div class="load-content" ><p class="load-title">'+self.title+'</p>'+loading+'</div>';
            var loadBox = '<div id="loadBox" >'+content+
                '</div>';
            $(loadBox).appendTo('body');
        }

    },
    showLoad:function(title){
        if(title!=undefined){
            $('#loadBox .load-title').html(title);
        }
        $('#loadBox').show();
    },
    fadeInLoad:function(title){
        if(title!=undefined){
            $('#loadBox .load-title').html(title);
        }
        $('#loadBox').fadeIn();
    },
    hideLoad:function(){
        $('#loadBox').fadeOut();
    },
    fadeOutLoad:function(){
        $('#loadBox').fadeOut();
    }
}