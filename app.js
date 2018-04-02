
function getMonthlyPayment(){
    // Get Inputs
    var loanAmount = document.getElementById("txtLoanAmount").value;
    var interestRate = document.getElementById("txtInterestRate").value;
    var totalPayments = document.getElementById("txtTotalMonthlyPayments").value;

    // Caclulate data
    var monthlyPayment = calcMontlyPayment(loanAmount, interestRate, totalPayments);
    var totalCost = calcTotalCost(monthlyPayment, totalPayments);
    var totalInterest = calcTotalInterest(totalCost, loanAmount);

    // Assign values to view
    document.getElementById("txtMonthlyPayment").value = monthlyPayment;
    document.getElementById("txtTotalCost").value = totalCost;
    document.getElementById("txtTotalInterest").value = totalInterest;
}

document.getElementById("btnCalculate").addEventListener("click", getMonthlyPayment);