/* define functions here */
var grandTotal = 0;

function calculateTotal(a,b) {
  subTotal = a * b ;
  grandTotal += subTotal;
  return subTotal.toFixed(2);
}

function outputCartRow () {
  allSubTotal = 0;
  for (i = 0; i < filenames.length; i++) {
     document.write("<tr>");
     document.write("<td>" + '<img src="./images/' + filenames[i] + '">' + "</td>");
     document.write("<td>" + titles[i] + "</td>");
     document.write("<td>" + quantities[i] + "</td>");
     document.write("<td> $" + prices[i].toFixed(2) + "</td>");
     document.write("<td>" + calculateTotal(quantities[i],prices[i]) + "</td>");
     document.write("</tr>");
     allSubTotal += subTotal;
  }
}

function calcShipping() {
  var shipping = 0;
  if (allSubTotal > 1000) {
     shipping = 0;
  }
  else shipping = 40;
  grandTotal += shipping;
  return shipping.toFixed(2);
}

function allTax() {
  var tax = allSubTotal * 0.10;
  grandTotal += tax;
  return tax.toFixed(2);
}

