
        $(document).ready(function () {
			var x="";
			
			x= prompt("Enter City name with Country Code:");
			/*$("#ibtn").click(function()
			{
				x= $("#input").attr("value");
				//alert(x);
			});*/
            /*if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function(position) {
								
							lati= position.coords.latitude;
							longi = position.coords.longitude;
							}
					*/		
													
		   
			 //  var url = "http://api.openweathermap.org/data/2.5/weather?q="+x+"&id=2172797&APPID=2f1a9cba462aba64869c3ac4e6643994";
              $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+x+"&id=2172797&APPID=2f1a9cba462aba64869c3ac4e6643994",function(data)
		   {
			   //Declare variables for temperature in kelvin, celcius and fahrenheit
			   var tik = "";
			   var tic = "";
			   var tif= "";
			   var winfo="";
			   var temp = true;
			   var wspeed="";
			   winfo= data.weather[0].main;
			   tik = data.main.temp;          // fetch temperature in kelvin
			   tic = Math.round(tik-273);                // convert temperature in celcius
			   tif= Math.round(1.8 *(tik - 273) + 32);  // convert temperature in fehrenheit
			   wspeed= Math.round((data.wind.speed)*2.237);
		       switch(winfo)
			   {				
					case "Clear Sky":
					$("img").attr("src","url(https://upload.wikimedia.org/wikipedia/commons/3/3a/Nuvola_weather_sunny.svg)");
					break;
					 case "Haze":
					 case "Scatter Clouds":
					 case "Broken clouds":
					 case "Clouds":
					$("img").attr("src","http://www.psdgraphics.com/file/weather-icon.jpg");
					break;					
					case "Shower rain":
					case "Rain":
					$("img").attr("src","http://www.iconsdb.com/icons/preview/caribbean-blue/rainy-weather-xxl.png");
					break;
					case "Thunderstorm":
					$("img").attr("src","https://cdn2.iconfinder.com/data/icons/weather-icon-set/256/thunderstorm.png");
					break;
					case "Snow":
					$("img").attr("src","http://icons.iconarchive.com/icons/icons8/windows-8/512/Weather-Snow-icon.png");					
					break;
					case "Mist":
					$("img").attr("src","https://cdn4.iconfinder.com/data/icons/heavy-weather/100/Weather_Icons_09_fog-512.png");
					break;
					default:
					$("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/3/3a/Nuvola_weather_sunny.svg");
					
				}
				
		//document.write(winfo)
		//document.write(data.name)
		//document.write(data.sys.country)
				// Display to HTML page
		
			    $("#long").html(winfo);
				$("#hum").html("Humidity:" +data.main.humidity +"%");
				
			    $("#ktemp").html("Temp in kelvin:"+tik);
				$("#city").html(data.name +","+data.sys.country);
				$("#winds").html("Wind Speed :"+wspeed +" mph");
				
				$("#ctemp").html("Temp in celcius:" +tic);
				//$("#ftemp").html("Temp in Fehrenheit:" +tif);
				
				$("#buttn").click(function()
				{
					if(temp ===false)
				{
					$("#ctemp").html(" Temperature in Celcius :" +tic);
					temp=true;
				}
				else
				{
					$("#ctemp").html("Temperature in Fahrenheit :" +tif );
					temp= false;
				}
				});
				
					
				
							
			   
			});
			
		});
			