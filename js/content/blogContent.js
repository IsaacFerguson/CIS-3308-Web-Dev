function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h1>My Blog</h1>
       
        <p>
            My Plan for the other table is to use it to store the info about
            each castle. The description attribute would be a description of
            the castle. My URL that points to an image would be each castle.
            My two nullable characters would be the date the castle was built
            and the price. Lastly, the additional fields would be time on market
            and people interested.
        </p>
            
        <p>
            I have little to no web experience. I took a class freshman year
            that went into the basics of HTML and CSS. Besides that, I have
            not done anything with web design and development. I have never done
            any work with JavaScript or MySQL. 
        </p>
        <h2>HomePage Homework 1</h2>
        <p>
            What I found the hardest was getting the flex box to work. It was 
            not working when I first tried to implement it into my code and
            took a while to resolve. I found choosing the background colors 
            easy. After getting the chrome extension setup picking the 
            background colors out of my image was super easy. I found
            the whole homework valuable. Having minimal experience with HTML
            I learned a lot while doing this assignment.
        </p>
        <h3>JU UI Homework 2</h3>
        <p>
            I found the hardest about this assignment was getting my CSS sheets to 
            apply their effects onto the new page. After some frustration, I 
            realized I had put my code into the wrong CSS file. I found modifying 
            the JS files. After doing the lab, I feel more comfortable with JS code.
            What I found most valuable was changing the CSS sheets. With two CSS 
            sheets, I better understand how you can style individual sections with 
            their CSS sheets.
        </p>
        <h3>JS OBJ Homework 3</h3>
        <p>
            I found creating the content function the easiest. There was not 
            much to add, and creating the parameter objects made sense after 
            doing the lab. What I found hardest was displaying the new content. 
            I was having an issue where it gave me an error and did not show the 
            correct info. My problem was putting the function into quotes for 
            the action in the drop-down. I found working on another make 
            function was the most valuable. The make function has a lot of 
            parts, and making another one helped me better understand how 
            they work.
        </p>
        <h4> Database HW 4</h4>
        <p>
            I have no experience with databases. They have always been something
            that I have wanted to learn but never have. After doing the 
            database work in class, I can say they seem super helpful but also 
            complicated. I can see how something like MySQL workbench makes 
            the process easier.
        </p>
        <p>
            I found creating the foreign keys to be the most difficult. It took 
            me a second to understand how the connection between the two columns
             worked. I found making the records. Entering the data was not 
            complicated with MySQL workbench. I found setting up and using MySQL
             workbench the most valuable part of this project. 
            Using the workbench help to demystify the process of creating 
            a database.
            Click <a target="_blank" href='documents/Ferguson_DatabaseHW.pdf'>here</a> 
            to see my database document.
        </p>
        <h5> WebAPI HW 5 </h5>
        <p>
            I have never written any server-side code before. What I found 
            most difficult about this assignment was making sure to tunnel in before 
            working on the homework. I would always forget to tunnel and get confused 
            about why nothing was working. I found connecting to the database 
            to be the easiest part. The SQL commands are nice and simple, 
            and switching the files to run on our database was not difficult. 
            Click <a target="_blank" href='documents/Error_messages.pdf'>here</a>
            to see my web API error document.
        </p>
        <h6> Click sort HW 6 </h6>
        <p>
            I found creating the click sort content functions to be the 
            harddest. I could not get it to diplay properly for a long time.
            Eventually I realized I needed to use the sorted tables instead
            of tableutils. I found switching the make clicksort to params the
            easiest. We have done that several times and it was not hard.
        </p>
    
        <h7> Logon HW 7 </h7>
        <p> 
            I found creating the account.buildProfile reusable function to be 
            the most difficult part. After creating the reusable function, I 
            could not get it to work inside the other functions. Eventually, 
            I realized I was calling the function incorrectly. I found 
            converting the logon/logoff/getprofile to work on the homework 
            the easiest. Only minimal changes were needed to allow it to work 
            with the new parameters.
            <br>
            <a target="_blank" href="webAPIs/listUsersAPI.jsp">list users</a>
            <br>
            <a target="_blank" href="webAPIs/login.jsp?email=fake@temple.edu&password=1234 ">Logon</a>
            <br>
            <a target="_blank" href="webAPIs/getProfile.jsp">get Profile</a>
            <br>
            <a target="_blank" href="webAPIs/logoff.jsp">Logoff</a>
        
    

        </p>
        
        <h8> Insert Hw 8 </h8>
        <p>
            Creating the user insert was the easiest part of this HW. When doing
            the lab, I created the insert code with all of the fields instead 
            of the few required ones. This allowed me to copy it to the HW, 
            which worked immediately. Creating the add user/other buttons on 
            the click sort tables was the hardest. It took me a little while to 
            get them to work, and I could not get them to appear at the top. 
            Instead, they appear at the bottom of the page.
        </p>
    
        <h9> UPDATE Hw 9 </h9>
        <p>
            I found updating the other table to be the hardest part of this 
            homework. When bringing over the code I used for the update lab, 
            it did not work correctly with the new code for this hw. It took 
            me a while to realize that when sending the updated info to the SQL 
            update statement, the other id was not being sent, causing the error. 
            The easiest part of the lab was getting the new update column to 
            appear on the two tables. By following the HW instructions adding 
            the new column with a link image worked easily. 
        </p>
        <h10> Delete Hw 10 </h10>
        <p>
            The easiest part of the HW was creating the table columns for each 
            table and adding the on-click functionality. Since this was similar 
            to the update homework we did, it was easy to add the new columns. 
            The hardest part was getting the delete function to call the delete 
            function in the DbMods file. I had forgotten that you must call the 
            webAPI to delete a row properly.
        </p>
        
        
    
    
    
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}