
function getMonthlyPayment(){
    var loanAmount = document.getElementById("txtLoanAmount").value;
    var interestRate = document.getElementById("txtInterestRate").value;
    var totalPayments = document.getElementById("txtTotalMonthlyPayments").value;

    var monthlyPayment = calcMontlyPayment(loanAmount, interestRate, totalPayments);
    document.getElementById("txtMonthlyPayment").value = monthlyPayment;
}

document.getElementById("btnCalculate").addEventListener("click", getMonthlyPayment);