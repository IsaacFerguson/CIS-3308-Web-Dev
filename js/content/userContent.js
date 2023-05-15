"use strict";

function userContent(){
    var castleTableDiv = document.createElement("div");
    var flexBox = document.createElement("div");
    flexBox.classList.add('clickSort'); // see styling in this file, above...
    castleTableDiv.appendChild(flexBox);
    ajax("webAPIs/listUsersAPI.jsp", processUserData, flexBox);
    
    


    function processUserData (obj) { // callback function

        // now userList has been populated with data from the AJAX call to file users.json
        console.log("entering user list");
        console.log(obj); 
        
       
        if (obj.dbError.length > 0) {
            castleTableDiv.innerHTML += "Database Error Encountered: " + obj.dbError;
            return;
        }

        var heading = Utils.make({
            htmlTag: "h2",
            parent: castleTableDiv
        });
        Utils.make({// don't need reference to this span tag...
            htmlTag: "span",
            innerHTML: "User Insert ",
            parent: heading
        });
        var img = Utils.make({
            htmlTag: "img",
            parent: heading
        });    

        img.src = "icons/insert.png";
        img.onclick = function () {
            // By changing the URL, you invoke the user insert. 
            window.location.hash = "#/register";
        };

        // Create new object list where all properties are <td> elements
        var newUserList = [];
        for (var i = 0; i < obj.webUserList.length; i++) {
            newUserList[i] = {};
            newUserList[i].User_Email = SortableTableUtils.makeText(obj.webUserList[i].userEmail);
            newUserList[i].User_Image = SortableTableUtils.makeImage(obj.webUserList[i].image, "50%");
            newUserList[i].User_Web_id = SortableTableUtils.makeText(obj.webUserList[i].webUserId);
            newUserList[i].Birthday = SortableTableUtils.makeDate(obj.webUserList[i].birthday);
            newUserList[i].Mem_fee = SortableTableUtils.makeNumber(obj.webUserList[i].membershipFee);
            newUserList[i].User_role = SortableTableUtils.makeText(obj.webUserList[i].userRoleType);
        }

        // MakeTableBetter expects all properties to be <td> elements.
        var myReport1 = MakeClickSortTable({
            Title: "User List",
            ObjList: newUserList,
            SortOrderPropName: "User_Web_id",
            SortIcon: "icons/sortUpDown16.png"
        });
        //var myReport1 = MakeClickSortTable("User List", newUserList, "User_Web_id", "icons/sortUpDown16.png");
        myReport1.classList.add("clickSort");
        flexBox.appendChild(myReport1);

    } // processUserData 
    
    return castleTableDiv;
}