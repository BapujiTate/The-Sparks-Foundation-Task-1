
function sendMoney(){
  var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount >= myAccountBalance) {
      alert("Insufficient Balance.");
   } else {
      var finalAmount = parseInt(document.getElementById(enterName+"BankBalance").innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(enterName+"BankBalance").innerHTML = finalAmount;
      alert(`Successful Transaction !!
      ₹${enterAmount} is sent to ${enterName}@email.com.`);

      // transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
