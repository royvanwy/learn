



$(function(){
    setcoupon($('.coupon-title'));

    function setcoupon(dom,callback){
        Route.getcoupon(function(res){
            var html=template('coupontmp',res);
            dom.html(html);
        })
    }
})