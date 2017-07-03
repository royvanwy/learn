



$(function(){
    setmoneyctrlproduct($('.money-product'), $.getUrlParam('productid'));

    function setmoneyctrlproduct(dom,productid,callbacck){
           Route.getmoneyctrlproduct(productid,function(data){
               console.log(data);
               var html=template('moneyproducttmp',data);
               dom.html(html);

           })
    }

})