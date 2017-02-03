$(document).ready(function()
{
    $(".mapp").click(function()
     {
        var a=parseFloat( $(this).find("input:hidden").attr("value")); //alert(a);
        var b= parseFloat($(this).find("input:hidden").attr("value1"));  // alert(b);  
        initMap(a,b);
      });

    function initMap(c,d) 
      {
         var location = {lat:c, lng:d};
         var map = new google.maps.Map(document.getElementById('map'),
         {
             zoom: 4,
             center: location,
          });
        var marker = new google.maps.Marker(
        {
            position: location,
            map: map,
          });
      }
      
});