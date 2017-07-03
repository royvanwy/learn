



$(function(){
    setcouponproduct($('.coupon-list'), $.getUrlParam('couponid'));

    function setcouponproduct(dom,couponid,callback){
        Route.getcouponproduct(couponid,function(res){
            var html=template('couponproducttmp',res);
            console.log(res);
            dom.html(html);

        })
    }




})