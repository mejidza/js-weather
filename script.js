 let addButton = document.getElementById("addButton")
 addButton.addEventListener("click",() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=2e91651b68de96e0310715de0d64e9e9")
    .then (function(resp){ return resp.json() })
    .then (function(data) {
        console.log(data)
    })
    .catch(function(){
    
    }) 
 })
 let cityAdd = document.createElement("cityAdd")
 cityAdd.addEventListener("click", () => {
    cityAdd.classList.add("addButton")
 })
 
 

