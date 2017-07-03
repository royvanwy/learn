
$(function(){
    setbrandlist($('.brand-list'), $.getUrlParam('brandtitleid'));

    function setbrandlist(dom,brandtitleid,callback){
        Route.getbrand(brandtitleid,function(res){
            var html=template('brandlisttmp',res);
            console.log(res);
            dom.html(html);
            setbrandproduct($('.product-list'),res.result[0].brandTitleId);
        })
    }

    function setbrandproduct(dom,brandtitleid,callback){
        var pagesize=4;
        Route.getbrandproductlist(brandtitleid,pagesize,function(res){
            var html=template('brandproducttmp',res);
            console.log(res);
            dom.html(html);
            setproductcom($('.product-com'),res.result);
        })
    }

    function setproductcom(dom,productlist,ccallback){
        var productid=[];
        for (var i=0;i<productlist.length;i++){
            productid.push(productlist[i].productId);
        }
        Route.getproduct(productid[0],function(res){
            var result=res.result;
            for(var j=0;j<result.length;j++){
                Route.getproductcom(productid[0],function(respro){
                    var data=respro.result;
                    var productcom=[];
                    for(var i=0;i<data.length;i++){
                        productcom.push({
                            "productName": result[0].productName,
                            "productImg": result[0].productImg,
                            "comContent": data[i].comContent,
                            "comTime": data[i].comTime,
                            "comFrom": data[i].comFrom,
                            "comName": data[i].comName
                        })
                    }
                    data={result:productcom};
                    var html=template('productcomtmp',data);
                    dom.html(html);
                })
            }
        })

    }


})