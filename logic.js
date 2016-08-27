var box = document.getElementById('display');
var expr = "";
var opInProgress = false;

function addToScreen(x)
{
	console.log('addToScreen function called');

	expr += x;

	if (opInProgress == true)
	{
		box.value = x;
		opInProgress = false;
	}
	else
		box.value += x;


	if (x == 'c')
	{
		box.value = "";
		expr = "";
	}

}

function operation(x)
{
	console.log("Operation in progress")
	expr += x;
	opInProgress = true;
}

function power(x)
{
	result = Math.pow(expr,x);
	box.value = result;
}

function backspace()
{
	box.value = box.value.substring(0,box.value.length - 1);
}

function answer()
{
	console.log('Calculating answer');
	expr = eval(expr);
	box.value = expr;
}
