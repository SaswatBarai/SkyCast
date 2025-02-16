<<<<<<< HEAD
let btn = document.getElementById("btn")
let input = document.getElementById("city");
const API_KEY = "92ec64fd8a91ae9db1d5d1dc6456dd91";


//for api call and fecting data
const getData = async (city) => {
    try {

        //future ke liya agar dusra city dalna hoga toh woh first search box search box se city name remove kr dega  
        input.value = ""; 
        console.log("Fetching data for:", city);

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found!");
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error milgaya: ",error.message);
        alert("Failed to fetch data. Please check your internet connection.");
    }
};


//Adding the event listner
btn.addEventListener("click",(e)=>{
    //agar value present hai toh
    if(input.value){
        getData(input.value);
    }
})


=======
>>>>>>> 424012f937ed1631933ce2f361959887ffcfa601
