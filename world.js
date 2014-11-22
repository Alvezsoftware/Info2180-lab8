window.onload = function() {
returncountry();
    
};

 function returncountry()
 {
 //document.getElementById("lookup").onClick=
$("lookup").observe('click', function(){
           var term= $('term').getValue();
           new Ajax.Request(
               "world.php",
              {
                  parameters: {lookup:term},
                   method: "get",
                   onSuccess:function(response)
                   {
                       var data =response.responseText;
                       alert(data);
                       $('result').update(data);
                   }, onFailure: function(){
                       alert("There is no response");
                   }
                });
           
            });
        
 }
