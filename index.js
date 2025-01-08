const loadAllPhones = async (status, brandName) => {
    // spinner none/stop
    document.getElementById("spinner").style.display = "none";
    console.log(brandName);

    // fetching here
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    // using async await
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName ? brandName : "iphone"}`);
    const data = await response.json();
    // if said 6 data then use this method
    displayAllPhone(data.data.slice(0, 6));
    // displayAllPhone(data.data);
    // console.log(status);
    console.log(data);

    if (status == true) {
        displayAllPhone(data.data);
    }
    else {
        displayAllPhone(data.data.slice(0, 6));
    }
}

// another function

const displayAllPhone = (phones) => {
    // console.log(phones);

}

// show function

const handleShowAll = () => {
    // console.log("Hello");
    loadAllPhones(true);
}

// spinner timing set and call loadAll function from here
const handleSearch = () => {

    // spinner start
    document.getElementById("spinner").style.display = "block";

    const searchText = document.getElementById("Search-box").value;

    setTimeout(function () {
        loadAllPhones(false, searchText)
    }, 3000)
}
// globally calling function
loadAllPhones(false, "iphone");
