


$(function(){

setproductlist($('.inland-discount-list'));

    function setproductlist(dom,callback){
        Route.getinlanddiscount(function(data){
            var html=template('discounttmp',data);
            dom.html(html);
            console.log(data);
            $('.loading').hide();
        })
    }

})