const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },      
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function displayProducts(product){

    products.forEach(index => {

        const box = document.createElement("option");
        
        box.value = index.id;
        box.textContent = capitalizeFirstWord(index.name);

        productsBox.appendChild(box);

    });

}


let productsBox = document.getElementById('product-name');
displayProducts(productsBox);

function capitalizeFirstWord(str) {
    if (!str) return str; // Return the original string if it's empty
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
  