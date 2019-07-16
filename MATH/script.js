var total = 0;

function calculate_max_payments() {

  var subtotal = this.value;
  var maxPayments = 0;


  total = (subtotal * 1.07) + 25;

  document.getElementById('subtotal2').innerHTML = subtotal
  document.getElementById('tax').innerHTML = parseFloat(subtotal * .07)
  document.getElementById('grandtotal').innerHTML = total
  document.getElementById('downpayment').innerHTML = total * 0.1


  if (500 <= total && total < 1001) {
    maxPayments = 12;
  }

  if (1001 <= total && total < 2001) {
    maxPayments = 16;
  }

  if (2001 <= total && total <= 3000) {
    maxPayments = 20
  }

  document.getElementById('message').innerHTML = "(Maximum payments allowed " + maxPayments + ")"

}


function payments() {

  var num_of_payments = this.value;
  var downPayment = total * 0.1
  var newDownPayment = downPayment + ((total - downPayment) % num_of_payments)
  var payments = (total - newDownPayment) / num_of_payments


  document.getElementById('downpayment').innerHTML = total * 0.1 + ((total - total * 0.1) % num_of_payments)

  document.getElementById('monthly').innerHTML = payments;
}


document.getElementById('subtotal1').onblur = calculate_max_payments;
document.getElementById('payment1').onblur = payments;





// function calculate() {
//
//   var subtotal = document.getElementById(subtotal1)
//   subtotal.value = 0;
//   var tax = 1.07
//
//
//   if (subtotal.innerHTML.value < "3000") {
//
//     var total = (subtotal.innerHTML.value * tax.toFixed(2)) + 25;
//     var down = total * .10;
//     var afterDown = total - down;
//
//
//
//   }
//
// }