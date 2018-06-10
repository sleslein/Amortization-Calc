    var currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        // the default value for minimumFractionDigits depends on the currency
        // and is usually already 2
      });
function getMonthlyPayment(){
    // Get Inputs
    var loanAmount = document.getElementById("txtLoanAmount").value;
    var interestRate = document.getElementById("txtInterestRate").value;
    var totalPayments = document.getElementById("txtTotalMonthlyPayments").value;

    // Caclulate data
    var monthlyInterestRate = calcPeriodRate(interestRate/100);
    var monthlyPayment = calcMontlyPayment(loanAmount, interestRate, totalPayments);
    var totalCost = calcTotalCost(monthlyPayment, totalPayments);
    var totalInterest = calcTotalInterest(totalCost, loanAmount);
    var scheduleItems = calcAmortizationSchedule(loanAmount, monthlyInterestRate, monthlyPayment);

    // Assign values to view
    document.getElementById("txtMonthlyPayment").value = currencyFormatter.format(monthlyPayment);
    document.getElementById("txtTotalCost").value = currencyFormatter.format(totalCost);
    document.getElementById("txtTotalInterest").value = currencyFormatter.format(totalInterest);

    // Add grid items for each schedule Item
    // https://www.w3schools.com/js/js_htmldom_nodes.asps
    var grid = document.getElementById("grdSchedule");

    function addScheduleItem(item) {
        var newRow = document.createElement("div");
        newRow.className = "row";

        var newPCol = document.createElement("div");
        newPCol.className ="col-md-1";
        newPCol.innerText = currencyFormatter.format(item.principal);
        newRow.appendChild(newPCol);

        var newICol = document.createElement("div");
        newICol.className ="col-md-1";
        newICol.innerText = currencyFormatter.format(item.interest);
        newRow.appendChild(newICol);

        var newBCol = document.createElement("div");
        newBCol.className ="col-md-1";
        newBCol.innerText = currencyFormatter.format(item.balance);
        newRow.appendChild(newBCol);

        grid.appendChild(newRow);
    }

    scheduleItems.forEach(addScheduleItem);
}

document.getElementById("btnCalculate").addEventListener("click", getMonthlyPayment);