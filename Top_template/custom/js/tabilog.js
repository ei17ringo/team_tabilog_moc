// google map
function initMap() {


  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(-37.81319, 144.96298)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);



             // 情報ウィンドウ
			// var infowindow1 = new google.maps.InfoWindow({
			// 	position:map.getCenter(), 
   //              map:map,
			//   content: '場所：'+'メルボルン'+"<br />"+'おすすめ度：'+'★★★☆☆',
			// });


			  // マーカー
             var marker = new google.maps.Marker({ 
                position:map.getCenter(), 
                map:map,
            }); 

            　//マーカークリック時に動作する情報ウィンドウ 
            google.maps.event.addListener(marker, "click", function() {
			var infowindow = new google.maps.InfoWindow({
			content: '場所：'+'メルボルン'+"<br />"+'おすすめ度：'+'★★★☆☆'
			});
			infowindow.open(map, marker);
			});

}



// carousel
$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});