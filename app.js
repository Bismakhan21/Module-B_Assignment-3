let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]

console.log(arr);

const box_content = document.getElementById("box_content");

arr.map((render,index) => {
    
    const {brand,model,price,camera,ram,rom} = render;
    return (box_content.innerHTML += `<ul id="list_items">
    <li>brand: ${brand}</li>
    <li>model: ${model}</li>
    <li>price: ${price}</li>
    <li>camera: ${camera}</li>
    <li>ram: ${ram}</li>
    <li>rom: ${rom}</li>  
    </ul>`);

})

// function search_filter(){

//     const dropdown = document.getElementById("Dropdown").value;
//     const search = document.getElementById("search-bar").value.toLowerCase();
//     // const list_items = document.getElementById("list_items");

//     const filtered_array = arr.filter((current_object) => {
//         if (dropdown === "brand") {
//             return current_object.brand.toLowerCase() === search;
//         } else if (dropdown === "model") {
//             return current_object.model.toLowerCase() === search;
//         } else if (dropdown === "price") {
//             return current_object.price.toLowerCase() === search;
//         } else if (dropdown === "camera") {
//             return current_object.camera.toLowerCase() === search;
//         }

//     });

//     console.log(filtered_array);

// };
  
// search_filter();


function searchMobiles() {
    const searchBy = document.getElementById("searchBy").value;
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const mobilesList = document.getElementById("mobilesList");
    mobilesList.innerHTML = ""; // Clear previous results

    const filteredMobiles = arr.filter(mobile => mobile[searchBy].toLowerCase().includes(searchInput));
    
    if (filteredMobiles.length === 0) {
        mobilesList.innerHTML = "No matching mobile phones found.";
    } else {
        filteredMobiles.forEach(mobile => {
            const mobileDetails = document.createElement("div");
            mobileDetails.innerHTML = `
                <h3>${mobile.brand} ${mobile.model}</h3>
                <p>Price: ${mobile.price}</p>
                <p>Camera: ${mobile.camera}</p>
                <p>RAM: ${mobile.ram}</p>
                <p>ROM: ${mobile.rom}</p>
            `;
            mobilesList.appendChild(mobileDetails);
        });
    }
}