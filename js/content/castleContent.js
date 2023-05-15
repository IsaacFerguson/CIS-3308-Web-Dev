function castleContent(){
    "use strict";
    
    var content = ` 
      <h4>different castles in our system</h4>
      <p>
        Here is where you can see the castles and adjust the information about
        them.
      </p>
      <div id="container">
        </div>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    
    var castleContainer = document.createElement("div");
    ele.appendChild(castleContainer);
    
    var cast1 = MakeCastle({name: "Neuschwanstein", forSale: "Not for Sale",
        price: 20000000, imgURL: "pics/neuschwanstein.jpg"});
    castleContainer.appendChild(cast1);
    
    var cast2 = MakeCastle({name: "Cool castle 1", forSale: "For Sale",
        price: 10000000, imgURL: "pics/castle2.jpg"});
    castleContainer.appendChild(cast2);
    
    var cast3 = MakeCastle({});
    castleContainer.appendChild(cast3);
    
    return ele;
}