"use strict";

function castleListContent(){
    
    function deleteCastle(castleId, td) {
        console.log("to delete user " + castleId);

        if (confirm("Do you really want to delete user " + castleId + "? ")) {
            
            ajax("webAPIs/deleteCastleAPI.jsp?deleteId=" + castleId, sucessAPI, errorMSG);
            function sucessAPI(obj){
                console.log(obj.errorMsg);
                if(obj.errorMsg.length === 0){
                    var message = "record " + castleId + "was deleted";
                    console.log(message);
                    errorMSG = message;
                } else {
                    errorMSG.innerHTML = "Error message from call is: " + obj.errorMsg;
                    console.log("error while trying to delete user: " + obj.errorMsg);
                }
                    
            }
            // HERE YOU HAVE TO CALL THE DELETE API and the success function should run the 
            // following (delete the row that was clicked from the User Interface).

            // get the row of the cell that was clicked 
            var dataRow = td.parentNode;
            var rowIndex = dataRow.rowIndex - 1; // adjust for oolumn header row?
            var dataTable = dataRow.parentNode;
            dataTable.deleteRow(rowIndex);
        }
    }
    
    var castleTableDiv = document.createElement("div");
    var flexBox = document.createElement("div");
    var errorMSG = document.createElement("div");
    flexBox.appendChild(errorMSG);
    flexBox.classList.add('clickSort'); // see styling in this file, above...
    castleTableDiv.appendChild(flexBox);
    ajax("webAPIs/listOtherAPI.jsp", processCastleData, flexBox);

    function processCastleData (obj) { // callback function

        // now userList has been populated with data from the AJAX call to file users.json
        console.log("entering castle list");
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
            innerHTML: "Castle Insert ",
            parent: heading
        });
        var img = Utils.make({
            htmlTag: "img",
            parent: heading
        });
        img.src = "icons/insert.png";
        img.onclick = function () {
            // By changing the URL, you invoke the user insert. 
            window.location.hash = "#/castleInsert";
        };

        // Create new object list where all properties are <td> elements
        var newCastleList = [];
        for (var i = 0; i < obj.castleList.length; i++) {
            newCastleList[i] = {};
            newCastleList[i].Castle_Email = SortableTableUtils.makeText(obj.castleList[i].userEmail);
            newCastleList[i].Castle_Name = SortableTableUtils.makeText(obj.castleList[i].castleName);
            newCastleList[i].Castle_Table_id = SortableTableUtils.makeNumber(obj.castleList[i].castleTableId);
            newCastleList[i].Castle_img = SortableTableUtils.makeImage(obj.castleList[i].imageURL, "50%");
            newCastleList[i].Web_User_role_id = SortableTableUtils.makeNumber(obj.castleList[i].userRoleId);
            newCastleList[i]._Update = SortableTableUtils.makeLink(
                    "<img src='icons/update.png' style='width:1rem' />", // innerHTML of link
                    '#/castleUpdate/' + obj.castleList[i].castleTableId             // href of link
                    );
            newCastleList[i]._Delete = SortableTableUtils.makeImage("icons/delete.png", '1rem');
            
            const userId = obj.castleList[i].castleTableId;
            newCastleList[i]._Delete.onclick = function () {
                console.log(userId);
                deleteCastle(userId, this);
            };
        }

        // MakeTableBetter expects all properties to be <td> elements.
        var myReport1 = MakeClickSortTable({
            headingDOM: heading,
            objList: newCastleList,
            initialSortCol: "Castle_Name",
            sortIcon: "icons/sortUpDown16.png"
        });
        //var myReport1 = MakeClickSortTable("Castle List", newCastleList, "Castle_Name", "icons/sortUpDown16.png");
        myReport1.classList.add("clickSort");
        flexBox.appendChild(myReport1);

    } // processUserData 
    
    return castleTableDiv;
}