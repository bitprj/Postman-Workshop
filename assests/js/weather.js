let submit = document.getElementById("submit");
let key = YOUR_API_KEY;

submit.addEventListener("click", function() {
  let city = document.getElementById("city").value;
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    key +
    "&units=imperial";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
    //   let info = document.getElementById("info");
    //   info.textContent = response.main.temp;
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
      let info = document.getElementById("info");
      info.textContent = "Invalid city name";
    });
});
