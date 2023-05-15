function MakeCastle(params){
    "use strict";
    
    if (!params) {
        throw "Error: MakeCarParamObj requires a parameter object";
    }
    
    var castleObj = document.createElement("div");
    
    castleObj.name = params.name || "no name entered";
    castleObj.forSale = params.forSale || "not for sale";
    var price = params.price || 0;
    var imgURL = params.imgURL || "pics/noPic.png";
    
    //add style sheet
    castleObj.classList.add("castle");
    
    
    castleObj.reducePricePercent = function (newPercent){
       var sub = price * (newPercent / 100);
       price = (price - sub);
       display();
    };
    
    castleObj.changeForSale = function (newForSale){
        castleObj.forSale = newForSale;
        display();
    };
    
    //display for each employee
    var castleInfo = document.createElement("div");
    castleObj.appendChild(castleInfo);
    
    var display = function (){
        castleInfo.innerHTML = "Castle Name: " + castleObj.name + 
                "<br/> On the Market? " + castleObj.forSale + 
                "<br/> Price: " + price;
    };
    
    var castleImg = document.createElement("img");
    castleImg.src = imgURL;
    castleObj.appendChild(castleImg);
    
    // for sale button
    var forSaleButton = document.createElement("button");
    forSaleButton.innerHTML = "Choose if castle is for sale: ";
    castleObj.appendChild(forSaleButton);
    
    var newForSaleInput = document.createElement("input");
    castleObj.appendChild(newForSaleInput);
    
    forSaleButton.onclick = function (){
        castleObj.changeForSale(newForSaleInput.value);
    };
    
    // price reduction button
    var discountButton = document.createElement("button");
    discountButton.innerHTML = "Percent to reduce price by: ";
    castleObj.appendChild(discountButton);
    
    var newDiscountInput = document.createElement("input");
    castleObj.appendChild(newDiscountInput);
    
    discountButton.onclick = function (){
        castleObj.reducePricePercent(newDiscountInput.value);
    };
    
    
    display();
    return castleObj;
}
