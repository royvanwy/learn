


$(function(){
    setcategorytitle($('.category-title'));
    function setcategorytitle(dom,callback){
        Route.getbrandtitle(function(res){
            var html=template('brandproducttmp',res);
            dom.html(html);
        })
    }

})