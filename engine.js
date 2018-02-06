$(document).ready(function() {
  let longitude;
  let latitude;
  const apiUrl = "https://fcc-weather-api.glitch.me/api/current?";

  $('#detailedWeather').addClass('hideElement');

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showWeather(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    $.ajax({
      url: apiUrl + "lat=" + latitude + "&lon=" + longitude,
      type: "GET",
      dataType: "json",
      success(response) {
        $('#loader').hide();
        $('#details').show();

        $("#location").html(response.name + ", " + response.sys.country);
        $("#icon").attr("src", response.weather[0].icon);
        $("#weather").html(response.weather[0].main);
        $("#temp").html(response.main.temp + " °C");
        $("#maxTemp").html(
          "Max temperature: " + response.main.temp_max + " °C"
        );
        $("#minTemp").html(
          "Min temperature: " + response.main.temp_min + " °C"
        );
        $("#humidity").html("Humidity: " + response.main.humidity + " %");
        $("#pressure").html("Pressure: " + response.main.pressure + " hPa");
        $("#wind").html("Wind speed: " + response.wind.speed + " m/s");
      },
      error(jqXHR, status, errorThrown) {
        alert(jqXHR);
      }
    });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  $('#detailsBtn').click(function(){
    $('#detailedWeather').toggleClass('hideElement');
  });

  $('#convertBtn').click(function(){
    let tempValue = $('#temp').text().split(" ")[0];
    let tempUnit = $('#temp').text().split(" ")[1];
    if (tempUnit === '°C'){
      tempValue = (tempValue * 1.8) + 32;
      $('#temp').text(tempValue.toFixed(2) + " °F");
    } else {
      tempValue = (tempValue - 32) * 5 / 9;
      $('#temp').text(tempValue.toFixed(2) + " °C");
    }
  });

  getLocation();
});
