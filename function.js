let addkeychain1 = 0;
let addkeychain2 = 0;
let addkeychain3 = 0;
let addkeychain4 = 0;
let addkeychain5 = 0;
let addkeychain6 = 0;
let addbag1 = 0;
let addbag2 = 0;
let addbag3 = 0;
let addbag4 = 0;
let addbag5 = 0;
let addbag6 = 0;
let addshirt1 = 0;
let addshirt2 = 0;
let addshirt3 = 0;
let addshirt4 = 0;
let addshirt5 = 0;
let addshirt6 = 0;
let addmug1 = 0;
let addmug2 = 0;
let addmug3 = 0;
let addmug4 = 0;
let addmug5 = 0;
let addmug6 = 0;
let minuskeychain1 = 0;
let minuskeychain2 = 0;
let minuskeychain3 = 0;
let minuskeychain4 = 0;
let minuskeychain5 = 0;
let minuskeychain6 = 0;
let minusbag1 = 0;
let minusbag2 = 0;
let minusbag3 = 0;
let minusbag4 = 0;
let minusbag5 = 0;
let minusbag6 = 0;
let minusshirt1 = 0;
let minusshirt2 = 0;
let minusshirt3 = 0;
let minusshirt4 = 0;
let minusshirt5 = 0;
let minusshirt6 = 0;
let minusmug1 = 0;
let minusmug2 = 0;
let minusmug3 = 0;
let minusmug4 = 0;
let minusmug5 = 0;
let minusmug6 = 0;

var kcdecide = 1;
var kcdecide2 = 1;
var kcdecide3 = 1;
var kcdecide4 = 1;
var kcdecide5 = 1;
var kcdecide6 = 1;

var bagdecide = 1;
var bagdecide2 = 1;
var bagdecide3 = 1;
var bagdecide4 = 1;
var bagdecide5 = 1;
var bagdecide6 = 1;

var shirtdecide = 1;
var shirtdecide2 = 1;
var shirtdecide3 = 1;
var shirtdecide4 = 1;
var shirtdecide5 = 1;
var shirtdecide6 = 1;

var mugdecide = 1;
var mugdecide2 = 1;
var mugdecide3 = 1;
var mugdecide4 = 1;
var mugdecide5 = 1;
var mugdecide6 = 1;
/*ADDING Items from Cart*/
/*Adding Keychains*/
var order = [];
var key1 = {
    prod_name: "Keychain 1",
    prod_price: 20
};
var key2 = {
    prod_name: "Keychain 2",
    prod_price: 30
};
var key3 = {
    prod_name: "Keychain 3",
    prod_price: 50
};
var key4 = {
    prod_name: "Keychain 4",
    prod_price: 10
};
var key5 = {
    prod_name: "Keychain 5",
    prod_price: 20
};
var key6 = {
    prod_name: "Keychain 6",
    prod_price: 30
};


var bag1 = {
    prod_name: "Bag 1",
    prod_price: 20
};
var bag2 = {
    prod_name: "Bag 2",
    prod_price: 30
};
var bag3 = {
    prod_name: "Bag 3",
    prod_price: 50
};
var bag4 = {
    prod_name: "Bag 4",
    prod_price: 10
};
var bag5 = {
    prod_name: "Bag 5",
    prod_price: 20
};
var bag6 = {
    prod_name: "Bag 6",
    prod_price: 30
};


var shirt1 = {
    prod_name: "Shirt 1",
    prod_price: 20
};
var shirt2 = {
    prod_name: "Shirt 2",
    prod_price: 30
};
var shirt3 = {
    prod_name: "Shirt 3",
    prod_price: 50
};
var shirt4 = {
    prod_name: "Shirt 4",
    prod_price: 10
};
var shirt5 = {
    prod_name: "Shirt 5",
    prod_price: 20
};
var shirt6 = {
    prod_name: "Shirt 6",
    prod_price: 30
};

var mug1 = {
    prod_name: "Mug 1",
    prod_price: 20
};
var mug2 = {
    prod_name: "Mug 2",
    prod_price: 30
};
var mug3 = {
    prod_name: "Mug 3",
    prod_price: 50
};
var mug4 = {
    prod_name: "Mug 4",
    prod_price: 10
};
var mug5 = {
    prod_name: "Mug 5",
    prod_price: 20
};
var mug6 = {
    prod_name: "Mug 6",
    prod_price: 30
};

document.getElementById("totalprice").innerHTML = addkeychain1;
document.getElementById("totalprice").innerHTML = addkeychain2;
document.getElementById("totalprice").innerHTML = addkeychain3;
document.getElementById("totalprice").innerHTML = addkeychain4;
document.getElementById("totalprice").innerHTML = addkeychain5;
document.getElementById("totalprice").innerHTML = addkeychain6;

document.getElementById("totalprice").innerHTML = addbag1;
document.getElementById("totalprice").innerHTML = addbag2;
document.getElementById("totalprice").innerHTML = addbag3;
document.getElementById("totalprice").innerHTML = addbag4;
document.getElementById("totalprice").innerHTML = addbag5;
document.getElementById("totalprice").innerHTML = addbag6;

document.getElementById("totalprice").innerHTML = addshirt1;
document.getElementById("totalprice").innerHTML = addshirt2;
document.getElementById("totalprice").innerHTML = addshirt3;
document.getElementById("totalprice").innerHTML = addshirt4;
document.getElementById("totalprice").innerHTML = addshirt5;
document.getElementById("totalprice").innerHTML = addshirt6;

document.getElementById("totalprice").innerHTML = addmug1;
document.getElementById("totalprice").innerHTML = addmug2;
document.getElementById("totalprice").innerHTML = addmug3;
document.getElementById("totalprice").innerHTML = addmug4;
document.getElementById("totalprice").innerHTML = addmug5;
document.getElementById("totalprice").innerHTML = addmug6;

function AddKeychain1() {
    kcdecide = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc1" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 1</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveKC1()">Remove</button></li></div>';
    addkeychain1 += 20;
    AddCounter();
}

function AddKeychain2() {
    kcdecide2 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc2" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 2</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveKC2()">Remove</button></li></div>';
    addkeychain2 += 30;
    AddCounter();
}

function AddKeychain3() {
    kcdecide3 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc3" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 3</span> <p class="itempricedesign">Price: Php 50</p><button class="removebtn" type="button" onclick="RemoveKC3()">Remove</button></li></div>';
    addkeychain3 += 50;
    AddCounter();
}

function AddKeychain4() {
    kcdecide4 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc4" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 4</span> <p class="itempricedesign">Price: Php 10</p><button class="removebtn" type="button" onclick="RemoveKC4()">Remove</button></li></div>';
    addkeychain4 += 10;
    AddCounter();
}

function AddKeychain5() {
    kcdecide5 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc5" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 5</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveKC5()">Remove</button></li></div>';
    addkeychain5 += 20;
    AddCounter();
}

function AddKeychain6() {
    kcdecide6 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removekc6" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Keychain 6</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveKC6()">Remove</button></li></div>';
    addkeychain6 += 30;
    AddCounter();
}

/*Adding Bags*/
function AddBag1() {
    bagdecide = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag1" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 1</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveBag1()">Remove</button></li></div>';
    addbag1 += 20;
    AddCounter();
}

function AddBag2() {
    bagdecide2 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag2" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 2</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveBag2()">Remove</button></li></div>';
    addbag2 += 30;
    AddCounter();
}

function AddBag3() {
    bagdecide3 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag3" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 3</span> <p class="itempricedesign">Price: Php 50</p><button class="removebtn" type="button" onclick="RemoveBag3()">Remove</button></li></div>';
    addbag3 += 50;
    AddCounter();
}

function AddBag4() {
    bagdecide4 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag4" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 4</span> <p class="itempricedesign">Price: Php 10</p><button class="removebtn" type="button" onclick="RemoveBag4()">Remove</button></li></div>';
    addbag4 += 10;
    AddCounter();
}

function AddBag5() {
    bagdecide5 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag5" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 5</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveBag5()">Remove</button></li></div>';
    addbag5 += 20;
    AddCounter();
}

function AddBag6() {
    bagdecide6 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removebag6" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Bag 6</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveBag6()">Remove</button></li></div>';
    addbag6 += 30;
    AddCounter();
}

/*Adding Shirts*/
function AddShirt1() {
    shirtdecide = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt1" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 1</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveShirt1()">Remove</button></li></div>';
    addshirt1 += 20;
    AddCounter();
}

function AddShirt2() {
    shirtdecide2 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt2" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 2</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveShirt2()">Remove</button></li></div>';
    addshirt2 += 30;
    AddCounter();
}

function AddShirt3() {
    shirtdecide3 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt3" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 3</span> <p class="itempricedesign">Price: Php 50</p><button class="removebtn" type="button" onclick="RemoveShirt3()">Remove</button></li></div>';
    addshirt3 += 50;
    AddCounter();
}

function AddShirt4() {
    shirtdecide4 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt4" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 4</span> <p class="itempricedesign">Price: Php 10</p><button class="removebtn" type="button" onclick="RemoveShirt4()">Remove</button></li></div>';
    addshirt4 += 10;
    AddCounter();
}

function AddShirt5() {
    shirtdecide5 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt5" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 5</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveShirt5()">Remove</button></li></div>';
    addshirt5 += 20;
    AddCounter();
}

function AddShirt6() {
    shirtdecide6 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removeshirt6" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Shirt 6</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveShirt6()">Remove</button></li></div>';
    addshirt6 += 30;
    AddCounter();
}

/*Adding Mugs*/
function AddMug1() {
    mugdecide = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug1" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 1</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveMug1()">Remove</button></li></div>';
    addmug1 += 20;
    AddCounter();
}

function AddMug2() {
    mugdecide2 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug2" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 2</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveMug2()">Remove</button></li></div>';
    addmug2 += 30;
    AddCounter();
}

function AddMug3() {
    mugdecide3 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug3" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 3</span> <p class="itempricedesign">Price: Php 50</p><button class="removebtn" type="button" onclick="RemoveMug3()">Remove</button></li></div>';
    addmug3 += 50;
    AddCounter();
}

function AddMug4() {
    mugdecide4 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug4" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 4</span> <p class="itempricedesign">Price: Php 10</p><button class="removebtn" type="button" onclick="RemoveMug4()">Remove</button></li></div>';
    addmug4 += 10;
    AddCounter();
}

function AddMug5() {
    mugdecide5 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug5" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 5</span> <p class="itempricedesign">Price: Php 20</p><button class="removebtn" type="button" onclick="RemoveMug5()">Remove</button></li></div>';
    addmug5 += 20;
    AddCounter();
}

function AddMug6() {
    mugdecide6 = 0;
    document.getElementById('prodlist').innerHTML += '<div id="removemug6" class="marginbox"><li class="addeditemdesign"><span class="itemnamedesign">Mug 6</span> <p class="itempricedesign">Price: Php 30</p><button class="removebtn" type="button" onclick="RemoveMug6()">Remove</button></li></div>';
    addmug6 += 30;
    AddCounter();
}


/*REMOVING Items from Cart*/
/*Removing Keychains*/

function RemoveKC1() {
    kcdecide = 1;
    document.getElementById('removekc1').innerHTML = '';
    minuskeychain1 -= 20;
    AddCounter();
}

function RemoveKC2() {
    kcdecide2 = 1;
    document.getElementById('removekc2').innerHTML = '';
    minuskeychain2 -= 30;
    AddCounter();
}

function RemoveKC3() {
    kcdecide3 = 1;
    document.getElementById('removekc3').innerHTML = '';
    minuskeychain3 -= 50;
    AddCounter();
}

function RemoveKC4() {
    kcdecide4 = 1;
    document.getElementById('removekc4').innerHTML = '';
    minuskeychain4 -= 10;
    AddCounter();
}

function RemoveKC5() {
    kcdecide5 = 1;
    document.getElementById('removekc5').innerHTML = '';
    minuskeychain5 -= 20;
    AddCounter();
}

function RemoveKC6() {
    kcdecide6 = 1;
    document.getElementById('removekc6').innerHTML = '';
    minuskeychain6 -= 30;
    AddCounter();
}

/*Removing Bags*/
function RemoveBag1() {
    bagdecide = 1;
    document.getElementById('removebag1').innerHTML = '';
    minusbag1 -= 20;
    AddCounter();
}

function RemoveBag2() {
    bagdecide2 = 1;
    document.getElementById('removebag2').innerHTML = '';
    minusbag2 -= 30;
    AddCounter();
}

function RemoveBag3() {
    bagdecide3 = 1;
    document.getElementById('removebag3').innerHTML = '';
    minusbag3 -= 50;
    AddCounter();
}

function RemoveBag4() {
    bagdecide4 = 1;
    document.getElementById('removebag4').innerHTML = '';
    minusbag4 -= 10;
    AddCounter();
}

function RemoveBag5() {
    bagdecide5 = 1;
    document.getElementById('removebag5').innerHTML = '';
    minusbag5 -= 20;
    AddCounter();
}

function RemoveBag6() {
    bagdecide6 = 1;
    document.getElementById('removebag6').innerHTML = '';
    minusbag6 -= 30;
    AddCounter();
}

/*Removing Shirts*/
function RemoveShirt1() {
    shirtdecide = 1;
    document.getElementById('removeshirt1').innerHTML = '';
    minusshirt1 -= 20;
    AddCounter();
}

function RemoveShirt2() {
    shirtdecide2 = 1;
    document.getElementById('removeshirt2').innerHTML = '';
    minusshirt2 -= 30;
    AddCounter();
}

function RemoveShirt3() {
    shirtdecide3 = 1;
    document.getElementById('removeshirt3').innerHTML = '';
    minusshirt3 -= 50;
    AddCounter();
}

function RemoveShirt4() {
    shirtdecide4 = 1;
    document.getElementById('removeshirt4').innerHTML = '';
    minusshirt4 -= 10;
    AddCounter();
}

function RemoveShirt5() {
    shirtdecide5 = 1;
    document.getElementById('removeshirt5').innerHTML = '';
    minusshirt5 -= 20;
    AddCounter();
}

function RemoveShirt6() {
    shirtdecide6 = 1;
    document.getElementById('removeshirt6').innerHTML = '';
    minusshirt6 -= 30;
    AddCounter();
}

/*Removing Mugs*/
function RemoveMug1() {
    mugdecide = 1;
    document.getElementById('removemug1').innerHTML = '';
    minusmug1 -= 20;
    AddCounter();
}

function RemoveMug2() {
    mugdecide2 = 1;
    document.getElementById('removemug2').innerHTML = '';
    minusmug2 -= 30;
    AddCounter();
}

function RemoveMug3() {
    mugdecide3 = 1;
    document.getElementById('removemug3').innerHTML = '';
    minusmug3 -= 50;
    AddCounter();
}

function RemoveMug4() {
    mugdecide4 = 1;
    document.getElementById('removemug4').innerHTML = '';
    minusmug4 -= 10;
    AddCounter();
}

function RemoveMug5() {
    mugdecide5 = 1;
    document.getElementById('removemug5').innerHTML = '';
    minusmug5 -= 20;
    AddCounter();
}

function RemoveMug6() {
    mugdecide6 = 1;
    document.getElementById('removemug6').innerHTML = '';
    minusmug6 -= 30;
    AddCounter();
}

function OverallOrder() {
    if (kcdecide == 0) {
        order.push(key1);
    }
    if (kcdecide2 == 0) {
        order.push(key2);
    }
    if (kcdecide3 == 0) {
        order.push(key3);
    }
    if (kcdecide4 == 0) {
        order.push(key4);
    }
    if (kcdecide5 == 0) {
        order.push(key5);
    }
    if (kcdecide6 == 0) {
        order.push(key6);
    }

    if (bagdecide == 0) {
        order.push(bag1)
    }
    if (bagdecide2 == 0) {
        order.push(bag2)
    }
    if (bagdecide3 == 0) {
        order.push(bag3)
    }
    if (bagdecide4 == 0) {
        order.push(bag4)
    }
    if (bagdecide5 == 0) {
        order.push(bag5)
    }
    if (bagdecide6 == 0) {
        order.push(bag6)
    }

    if (shirtdecide == 0) {
        order.push(shirt1)
    }
    if (shirtdecide2 == 0) {
        order.push(shirt2)
    }
    if (shirtdecide3 == 0) {
        order.push(shirt3)
    }
    if (shirtdecide4 == 0) {
        order.push(shirt4)
    }
    if (shirtdecide5 == 0) {
        order.push(shirt5)
    }
    if (shirtdecide6 == 0) {
        order.push(shirt6)
    }

    if (mugdecide == 0) {
        order.push(mug1)
    }
    if (mugdecide2 == 0) {
        order.push(mug2)
    }
    if (mugdecide3 == 0) {
        order.push(mug3)
    }
    if (mugdecide4 == 0) {
        order.push(mug4)
    }
    if (mugdecide5 == 0) {
        order.push(mug5)
    }
    if (mugdecide6 == 0) {
        order.push(mug6)
    }

    var ordstring = JSON.stringify(order);
    document.getElementById("order").value = ordstring;
}
/*TOTAL Price*/
function AddCounter() {
    let newprice = addkeychain1 + addkeychain2 + addkeychain3 + addkeychain4 + addkeychain5 + addkeychain6 + addbag1 + addbag2 + addbag3 + addbag4 + addbag5 + addbag6 + addshirt1 + addshirt2 + addshirt3 + addshirt4 + addshirt5 + addshirt6 + addmug1 + addmug2 + addmug3 + addmug4 + addmug5 + addmug6 + minuskeychain1 + minuskeychain2 + minuskeychain3 + minuskeychain4 + minuskeychain5 + minuskeychain6 + minusbag1 + minusbag2 + minusbag3 + minusbag4 + minusbag5 + minusbag6 + minusshirt1 + minusshirt2 + minusshirt3 + minusshirt4 + minusshirt5 + minusshirt6 + minusmug1 + minusmug2 + minusmug3 + minusmug4 + minusmug5 + minusmug6;
    document.getElementById('totalprice').innerHTML = newprice;
}