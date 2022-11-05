   let cityName = document.getElementById("london")
   cityName.addEventListener("click", () => { 
      fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2e91651b68de96e0310715de0d64e9e9")
      .then (function(resp){ return resp.json() })
      .then (function(data) {
          console.log(data)
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;"
          document.querySelector(".disclamer").textContent = data.weather[0]["description"]
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".features").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
          document.querySelector(".city-name-subtext").textContent = data.sys.country
      })
      .catch(function(){
      }) 
   })
   let secondCityName = document.getElementById("tokyo")
   secondCityName.addEventListener("click", () => {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=2e91651b68de96e0310715de0d64e9e9")
      .then (function(resp){ return resp.json() })
      .then (function(data) {
          console.log(data)
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;"
          document.querySelector(".disclamer").textContent = data.weather[0]["description"]
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".features").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
          document.querySelector(".city-name-subtext").textContent = data.sys.country
         })
      .catch(function(){
      }) 
   })
   let thirdCityName = document.getElementById("moscow")
   thirdCityName.addEventListener("click", () => { 
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=2e91651b68de96e0310715de0d64e9e9")
      .then (function(resp){ return resp.json() })
      .then (function(data) {
          console.log(data)
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;"
          document.querySelector(".disclamer").textContent = data.weather[0]["description"]
          document.querySelector(".city-name-text").textContent = data.name
          document.querySelector(".features").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
          document.querySelector(".city-name-subtext").textContent = data.sys.country
         })
      .catch(function(){
      }) 
   })
  
 

 
 

