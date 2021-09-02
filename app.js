const searchWeather=()=>{
    const inputField=document.getElementById('input-field');
    
    const inputText=inputField.value;
    console.log(inputText)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=fec39221c1f00535ed3c0d607a05e08b`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>DisplayWeather(data))
    .catch(res=>{
        const result=document.getElementById('result');
        const p=document.createElement("p");
        p.innerText="Please Type Right Name"
        result.appendChild(p)
    })
    document.getElementById('result').style.padding="10px"
    inputField.value=''
    
}


const DisplayWeather=(weathers)=>{
    const result=document.getElementById('result');
    result.textContent=''
    const kelvin=weathers.main.temp;
    const celcoius=(kelvin-273.15).toFixed(2);
    const div=document.createElement('div');
    div.innerHTML=`
    <img src="http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png"></img>
    <h3>${weathers.name}</h3>
    <h2>${celcoius}'C</h2>
    <h3>${weathers.weather[0].main}</h3>
    `;
    result.appendChild(div)
    

}


