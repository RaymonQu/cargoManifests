function initialize(){
    counter = 10;
    maxSize = 0;
    curBoxSize = 0;
    curManList = [];
    curBoxList = [];
    manifestNum = generateRandomNum(4) + 1;
    isDone = false;

    document.getElementById("manifestCounter").innerHTML = "Manifest Items: " + manifestNum;
    const nokia = {
        name: "NokiaPhone",
        image: "nokia.png",
        size: 1
    };
    const bBat = {
        name: "BaseballBat",
        image: "nokia.png",
        size: 4
    };  
    const TV = {
        name: "TV",
        image: "tv.jpg",
        size: 7
    };  
    const laptop = {
        name: "Laptop",
        image: "laptop.jpg",
        size: 3
    };  
    const biden = {
        name: "Biden",
        image: "joebiden.png",
        size: 8
    };  
    const chainsaw = {
        name: "Chainsaw",
        image: "chainsaw.png",
        size: 6
    };  
    const lamp = {
        name: "Lamp",
        image: "lamp.jpg",
        size: 2
    };  
    items = [nokia, bBat, TV, laptop, biden, chainsaw, lamp];
    generateManItems();
}

function generateRandomNum(a){
	return Math.floor((Math.random() * a))
}

function addItemtoManView(idx){
    document.getElementById("manItems").innerHTML += "<p>" + items[idx].name;
}

function addItemtoBoxView(idx){
    document.getElementById("boxItems").innerHTML += "<p>" + items[idx].name;
}

function generateManItems(){
    for(i = 0; i < 10; i++){
        randomItem = Math.floor((Math.random() * 7));
        curManList[i] = items[randomItem];
        addItemtoManView(randomItem);
    }
}

function openBox(size){
    if(size == 0){
        maxSize = 3;
        document.getElementById("boxItems").innerHTML = "Items in the SMALL Box (size 3):";
    }
    else if(size == 1){
        maxSize = 6;
        document.getElementById("boxItems").innerHTML = "Items in the MEDIUM Box (size 6):";
    }
    else{
        maxSize = 10;
        document.getElementById("boxItems").innerHTML = "Items in the BIG Box (size 10):";
    }
}

function checkDone(){
    if(manifestNum < 0){
        document.getElementById("hiddenMessage").innerHTML = "Done";
        isDone = true;
    }
}

function react(e){
    if(e.target.tagName == "P" && !isDone){
        idx = items.findIndex(element => e.target.innerHTML == element.name);
        console.log(curBoxSize + items[idx].size);
        if(curBoxSize + items[idx].size < maxSize + 1){
            idx = items.findIndex(element => e.target.innerHTML == element.name);
            curBoxSize += items[idx].size;
            addItemtoBoxView(idx);
            counter--;
            e.target.remove();
        }
    }
}

function closeBox(){
    document.getElementById("boxItems").innerHTML = "Items in the Box";
    curBoxSize = 0;
    maxSize = 0;
    curBoxList.length = 0;
    console.log(counter);
    if(counter == 0){
        manifestNum--;
        if(manifestNum == -1){
            checkDone();
            return;
        }
        document.getElementById("manifestCounter").innerHTML = "Manifest Items: " + manifestNum;
        generateManItems();
    }
}