$(function(){
    setproductlisttitle($('.product-list-title'), $.getUrlParam('pageid'));
    setproductlist($('#product-list>.product-list'), $.getUrlParam('categoryid'), $.getUrlParam('pageid'));

//Route.query(window.location.href);
    function setproductlisttitle(dom,categoryid,callback){

        Route.getcategorybyid(categoryid,function(res){
             var html=template('productlisttitletmp',res);
              dom.html(html);
        })
    }

    function setproductlist(dom,categoryid,pageid,callback){
        Route.getproductlist(categoryid,pageid,function(res){
            var html=template('productlisttmp',res);
            dom.html(html);
            $('#selectPage').on('change', function(e) {
                window.location.href = 'productlist.html?categoryid=' + $.getUrlParam('categoryid') + '&category=' + $('#category').html() + '&pageid='+ $(this).val();
                $(this).attr('selected',"selected");
            })
        })
    }



})