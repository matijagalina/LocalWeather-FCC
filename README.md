# Local Weather App

One-page app which uses users location and **Free Code Camp Weather API** [found here](https://fcc-weather-api.glitch.me/) to show the local weather.

Users location is acquired using **HTML5 Geolocation API** which opens the popup on the start of the page.
While waiting for the user to give it's permission to use the location, the loading animation is shown in the main container under the header.
The refusal of permission will activate the alert popup with an error message - which is the main pattern for any error down the line.
![Screenshot](https://github.com/matijagalina/LocalWeather-FCC/blob/master/img/screenshot1.PNG)

After receiving the permission to use it's location, the app will send the ajax request to the API and receive the data.
Weather data values will be added to html elements and sorted into two views - *mainWeather* view and *detailedWeather* view which is hidden by default on the start of the app. **JQuery** and **ajax** are used for handling the apps functionality and data requests.
![Screenshot2](https://github.com/matijagalina/LocalWeather-FCC/blob/master/img/screenshot2.PNG)

The app is equiped with two buttons in it's *mainWeather* view which add more functionality to the app. Under the current temperature value (which is by default shown in *°C* measuring unit) is the toggle button to change the temperature value by displaying it in Celsius or Fahrenheit.
At the bottom of the first view is another button which displays more detailed weather data values by showing the hidden *detailedWeather* view. On another click it hides the detailed weather again.
![Screenshot3](https://github.com/matijagalina/LocalWeather-FCC/blob/master/img/screenshot3.PNG)

The project fulfills the provided user stories:

*User Story: I can see the weather in my current location.*
*User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.*
*User Story: I can push a button to toggle between Fahrenheit and Celsius.*

**Codepen** link to quickly see how it looks and behaves: [codepen link](https://codepen.io/matijagalina/pen/YeWMXo)
