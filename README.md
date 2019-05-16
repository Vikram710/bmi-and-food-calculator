# delta-web-dev-task1
<html>
    <head>
        <link href="task1.css" rel="stylesheet" type="text/css">
        <script src="task1.js" type="text/javascript"></script>
    </head>
    <body >
        <div class="cdr">
        Height: <br>
        <input type="text" id="h" placeholder="000cm"><br>
        weight:<br> 
        <input type="text" id="w" placeholder="000kg"><br>
        Age: <br> 
        <input type="text" id="a"  placeholder="Years" ><br>

        Gender: <br> 
        <input type="radio", name="sex" id="male"> Male<br>
        <input type="radio", name="sex" id="female">Female<br>

        Excercise level:<br>
        <select id="ex">
            <option>Little</option>
            <option>Light</option>
            <option>Moderate</option>
            <option>Heavy</option>
        </select><br>

        <button onclick="caldr()">Calorie requirment</button>
    
        <p id="dr" ></p>
        </div>
        <div class="ft" >
        Food name: <br><input type="text" id="food"  placeholder="Food name"><br>
        Carbs:<br> <input type="text"  id="carbs" placeholder="000g" ><br>
        Fat: <br><input type="text" id="fat"placeholder="000g" ><br>
        Protien:<br> <input type="text"  id="protien"  placeholder="000g"><br>
        Water:<br> <input type="text"  id="water"  placeholder="000ml"><br>
        
        <button onclick="addRow()">Add Row</button><br>
        </div>
        <br>
        <div class="tbl">
        
        <table border=3px  align="center" id="table">
            <tr>
                <th>Food name</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Protien</th>
                <th>Water</th>
            </tr>
        </table>

        <button onclick="calwat()">Calories consumed</button>
        <p id="val"></p>
        </div>

    </body>

</html>
