let shoppingList = [];

function addItem(){
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;
    const category = document.getElementById("category").value;

    shoppingList.push({name: item, quantity: quantity, category: category});
    document.getElementById("item").value = "";
    document.getElementById("quantity").value="";
    console.log(shoppingList);
    updateDisplay();
}

function updateDisplay(){
    const disp = document.getElementById("shoppingList");4
    disp.innerHTML = "Shopping List : " + JSON.stringify(shoppingList.map(a => `${a.quantity} ${a.name}`));

    const orderedDisp = document.getElementById("orderedItems");
    let orderedItems = {};

    shoppingList.forEach(item => {
        if(!orderedItems[item.category])
            orderedItems[item.category] = [];
        orderedItems[item.category].push(`${item.quantity} ${item.name}`);
    });

    let displayText = "<h3>Items by Category:</h3>";
    for(const category in orderedItems){
        displayText += `<strong>${category}:</strong><ul>`;
        orderedItems[category].forEach(item => {
            displayText +=`<li>${item}</li>`;
        });
        displayText += "</ul>";
    }
    orderedDisp.innerHTML = displayText;
}

function removeLast(){
    if(shoppingList.length > 0){
        shoppingList.pop();
        updateDisplay();
    }
    else{
        alert("There are no items!");
    }
}

function sortItems(){
    shoppingList.sort((a,b) => a.name.localeCompare(b.name));
    updateDisplay();
}