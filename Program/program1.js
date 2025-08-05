<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            text-align:center;
        }
        input,select,button{
            margin: 10px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>CALCULATOR PROGRAM</h1>
  <input type="number" placeholder="Enter the first value" id="num1">
  <input type="number" placeholder="Enter the second value" id="num2">
  <select id="operation">
    <option value="add">add</option>
    <option value="multiplication">multiplication</option>
    <option value="division">division</option>
    <option value="subtraction">subtraction</option>
  </select>
  <button onclick="calculate()">calculate</button>
  <div id="result">Result</div>
  <script>
    function calculate(){
        let num1=parseFloat(document.getElementById("num1").value);
        let num2=parseFloat(document.getElementById("num1").value);
        let operation=document.getElementById("operation").value;
        let result;
        if(isNaN(num1)||isNaN(num2)){
            result="check your entered input";
        }
        else{
    switch(operation){
                case "add":result = num1+num2;
                break;
                case "multiplication":result = num1*num2;
                break;
                case "division":result = num1/num2;
                break;
                case "subtraction":result = num1-num2;
                break;

            }
        }
    document.getElementById("result").innerText="result is:"+result;
    }
  </script>
</body>
</html>
