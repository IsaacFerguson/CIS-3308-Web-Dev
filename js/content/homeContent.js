function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h2>Luxury Castles for purchase</h2>
    
            <p>
               Welcome to Castle Real Estate, the premier seller of luxury castles.
               We have listings on three continents and over 30 countries. 
               So do you want to live in a castle that's over 1000 years old? 
               Or a modern castle with insulation? Well, you are in luck as we have both.
               Find the castle of your dreams with Castle Real Estate. 
               Click <a href="https://www.zillow.com/homedetails/275-Redlands-St-Playa-Del-Rey-CA-90293/20386427_zpid/">here</a> 
               to see one of the beautiful castles we've sold.
            </p>

            <p style="text-align:center;">
                <img src="pics/MainPageCastle.jpg" style="width:50%; border-radius:10px;">
            </p>
           
            
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }