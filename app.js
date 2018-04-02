
function getMonthlyPayment(){
    // Get Inputs
    var loanAmount = document.getElementById("txtLoanAmount").value;
    var interestRate = document.getElementById("txtInterestRate").value;
    var totalPayments = document.getElementById("txtTotalMonthlyPayments").value;

    // Caclulate data
    var monthlyInterestRate = calcPeriodRate(interestRate);
    var monthlyPayment = calcMontlyPayment(loanAmount, interestRate, totalPayments);
    var totalCost = calcTotalCost(monthlyPayment, totalPayments);
    var totalInterest = calcTotalInterest(totalCost, loanAmount);
    var scheduleItems = calcAmortizationSchedule(loanAmount, monthlyInterestRate, monthlyPayment);

    // Assign values to view
    document.getElementById("txtMonthlyPayment").value = monthlyPayment;
    document.getElementById("txtTotalCost").value = totalCost;
    document.getElementById("txtTotalInterest").value = totalInterest;

    // Add grid items for each schedule Item
    // https://www.w3schools.com/js/js_htmldom_nodes.asps
}

document.getElementById("btnCalculate").addEventListener("click", getMonthlyPayment);