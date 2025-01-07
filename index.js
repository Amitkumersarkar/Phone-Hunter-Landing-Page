const loadAllPhones = async () => {
    // spinner none/stop
    document.getElementById("spinner").style.display = "none";
    console.log("wow 3s gone");

    // fetching here
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    // using async await
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    // if said 6 data then use this method
    // displayAllPhone(data.data.slice(0, 6));
    displayAllPhone(data.data);
}

// another function

const displayAllPhone = (phones) => {
    console.log(phones);
}

// show function

const handleShowAll = () => {
    console.log("Hello");
}

// spinner timing set and call loadAll function from here
const handleSearch = () => {

    // spinner start
    document.getElementById("spinner").style.display = "block";

    setTimeout(function () {
        loadAllPhones()
    }, 3000)
}
// globally calling function
loadAllPhones();
