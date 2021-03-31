window.addEventListener("load", () => {
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let imageElement = document.querySelector("#icon");
  let temperatureSection = document.querySelector(".degree-section");
  let temperatureSpan = document.querySelector(".degree-section span");
  // let long;
  // let lat;
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     long = position.coords.longitude;
  //     lat = position.coords.latitude;
  //London API
  // const api = `https://api.weatherapi.com/v1/current.json?key=b5e48e55f0a441af9a0204223213003&q=London&aqi=yes
  //Tehran API
  const api = `
https://api.weatherapi.com/v1/current.json?key=b5e48e55f0a441af9a0204223213003&q=Tehran&aqi=yes`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { temp_f, condition, temp_c } = data.current;
      temperatureDegree.textContent = `${temp_f} F`;
      temperatureDescription.textContent = condition.text;
      imageElement.src = condition.icon;
      const { name } = data.location;
      locationTimezone.textContent = name;
      temperatureSection.addEventListener("click", () => {
        if (temperatureSpan.textContent === "F") {
          temperatureSpan.textContent = "C";
          temperatureDegree.textContent = temp_c;
        } else {
          temperatureSpan.textContent = "F";
          temperatureDegree.textContent = temp_f;
        }
      });
    });
});
//   }
// });
