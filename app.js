
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
    var grid = document.getElementById("grdSchedule");

    function formatDollars(val) {
        return "$" + val.toFixed(2);
    }

    function addScheduleItem(item) {
        var newRow = document.createElement("div");
        newRow.className = "row";

        var newPCol = document.createElement("div");
        newPCol.className ="col-md-1";
        newPCol.innerText = formatDollars(item.principal);
        newRow.appendChild(newPCol);

        var newICol = document.createElement("div");
        newICol.className ="col-md-1";
        newICol.innerText = formatDollars(item.interest);
        newRow.appendChild(newICol);

        var newBCol = document.createElement("div");
        newBCol.className ="col-md-1";
        newBCol.innerText = formatDollars(item.balance);
        newRow.appendChild(newBCol);

        grid.appendChild(newRow);
    }

    scheduleItems.forEach(addScheduleItem);
}

document.getElementById("btnCalculate").addEventListener("click", getMonthlyPayment);