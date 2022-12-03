   let cityWeatherIcon = document.getElementById("weatherIcon")
   let cityWeatherPrice = document.getElementById("cityWeatherInfo")
   let cityWeatherInfo = document.getElementById("cityText")
   let inputValue = ""
   let cityFindInput = document.getElementById("cityFindInput")
   cityFindInput.addEventListener("change", () => {
      inputValue = cityFindInput.value
   })
   let cityFindButton = document.getElementById("addCityButton")
   cityFindButton.addEventListener("click", () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=2e91651b68de96e0310715de0d64e9e9`)
      .then (res => res.json())
      .then (data => {
         console.log(data)
         cityWeatherInfo.innerText = data.name
         cityWeatherPrice.innerText = farinToCelsies(data.main.temp)
         cityWeatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })

   })
   function farinToCelsies(temp) {
      return (temp - 273.15).toFixed(1)
   }




   
  
 

 
 

