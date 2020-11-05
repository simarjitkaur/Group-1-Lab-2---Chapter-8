outputCartRow();

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Subtotal" + "</td>");
document.write("<td> $" + allSubTotal.toFixed(2) + "</td>");
document.write("</tr>");

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Tax" + "</td>");
document.write("<td> $" + allTax() + "</td>");
document.write("</tr>");

document.write('<tr class="totals">');
document.write('<td colspan="4">' + "Shipping" + "</td>");
document.write("<td> $" + calcShipping() + "</td>");
document.write("</tr>");

document.write('<tr class="totals focus">');
document.write('<td colspan="4">' + "Grand Total" + "</td>");
document.write("<td> $" + grandTotal.toFixed(2) + "</td>");
document.write("</tr>");
