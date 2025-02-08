const url = "https://cat-fact.herokuapp.com/facts";
const button = document.querySelector("#btn");
const factpara = document.querySelector("#factpara");

const getData = async () => {
    console.log("getting the data ..... ");
    let response = await fetch(url);   // now this data is coming into the json format  so we need to convert it into understandable format (i.e., in the JS Object format).
    console.log(response);

    // so we'll use json() method to convert the json format into js object format : 
    // using the json() method will also return second promise so we need to use "await" while conversion :
    let data = await response.json();
    console.log(data[0].text);
    factpara.innerHTML = data[1].text;
};


button.addEventListener("click", getData);
