




$(function(){

    setproductlist($('.discount-product'), $.getUrlParam('productid'));

    function setproductlist(dom,productid,callback){
        Route.getdiscountchild(productid,function(res){
            var html=template('discountchildtmp',res);
            console.log(res);
            dom.html(html);
        })
    }


})