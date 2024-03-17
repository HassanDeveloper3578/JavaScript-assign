
// Alert Name 

document.getElementById("alertName").onclick = function () {
    
    alert("Hassan-Ur-Rehman");

    let statement = "alert('Hassan-Ur-Rehman')";

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "";
}

// alertNumber

document.getElementById("alertNumber").onclick = function () {

    alert("329903");

    let statement = "alert('329903');";

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "";
}

// variableNames

document.getElementById("variableNames").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and  <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";

    document.getElementById("output").innerHTML = html;

}

// showCamelCaseExamples

document.getElementById("camelCaseExamples").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let html = "<h3>Examples</h3><ul><li><code>User</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";

    document.getElementById("output").innerHTML = html;

}

// sum2Numbers

document.getElementById("sum2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let num1 = 100;
    let num2 = 200;
    let sum = num1 + num2;

    let statement = "let num1 =" + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 + num2;";

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>";

}

// subtract2Numbers

document.getElementById("subtract2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let num1 = 30;
    let num2 = 60;
    let subtract = num1 - num2;

    let statement = "let num1 =" + num1 + ";<br>let num2 = " + num2 + ";<br>let subtract = num1 - num2;";

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + subtract + "</p>";

}


// multiply2Numbers

document.getElementById("multiply2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let num1 = 3;
    let num2 = 6;
    let multiply = num1 * num2;

    let statement = "let num1 =" + num1 + ";<br>let num2 = " + num2 + ";<br>let multiply = num1 * num2;";

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply + "</p>";

}


// divide2Numbers

document.getElementById("divide2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let num1 = 50;
    let num2 = 5;
    let divide = num1 / num2;

    let statement = "let num1 =" + num1 + ";<br>let num2 = " + num2 + ";<br>let divide = num1 / num2;";

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + divide + "</p>";

}


// calculateSomeNumbers

document.getElementById("calculateSomeNumbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
    let someCalculation = 60 / 6 * 3 + 5 ** 4 - (8 + 5);

    let statement = "60 / 6 * 3 + 5 ** 4 - (5+8);";

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + someCalculation + "</p>";

}

// Clear Statement 

document.getElementById("clearStatementButton").onclick = function () {

    document.getElementById("statement").innerHTML = "";

}

// Clear Output / Result 

document.getElementById("clearOutputButton").onclick = function () {

    document.getElementById("output").innerHTML = "";
    
}