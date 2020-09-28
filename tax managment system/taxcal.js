function validateForm() {
  var x = document.forms["myForm"]["EmpId"].value;

      if (x == "") 
  {
    alert("Employee Id must be filled out");
}
   if (x.length<5) 
   {
   	alert("Employee Id must be atleast 5 Characters");
  }
  } 

function expenseAmtval()
{
	var y=document.getElementById("ExpAmt").value
	if (isNaN(y) || y<0)
		
	alert("can't be a -ve value or not a number");
	if (y== "")
		alert("Expense Amount can not be blank");
	
}

function myexptype(x,y)
{
	var x = document.forms["myForm"]["ExpType"].value;
	var y=document.getElementById("ExpAmt").value
	console.log(x,y);
	if(x==="MedicalExpense")
	{
		if(y<=1000)
		{
			var tc=y*(15/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
			//alert("The tax claim for"+x+" with "+y+" expense amount is"+tc);
			// document.write("<h1>TMS:Tax Claim</h1>");
			// document.write("<h2>The tax claim for "+x+" with "+y+" expense amount is "+tc+"</h2>");
		}
		else if(y >=1001|| y <= 10000)
		{
			var tc=y*(20/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
		else 
		{
			var tc=y*(25/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
	}
	else if(x==="TravelExpense")
	{
		if(y<=1000)
		{
			var tc=y*(10/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
		else if(y >=1001|| y <= 10000)
		{
			var tc=y*(15/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
		else 
		{
			var tc=y*(20/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
	}
	else
	{
		if(y<=1000)
		{
			var tc=y*(5/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
		else if(y >=1001|| y <=10000)
		{
			var tc=y*(10/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
		else 
		{
			var tc=y*(15/100);
			//alert("tax amount is:+ ${tc}");
			console.log(tc);
		}
	}
	document.write("<h1>TMS:Tax Claim</h1>");
			document.write("<h2>The tax claim for "+x+" with "+y+" expense amount is "+tc+"</h2>");
}
	