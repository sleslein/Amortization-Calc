

const calcPeriodRate = function(r) {
    return r/12;
};

// function calcPeriodRate(r) {
//     return r/12;
// };

function calcMontlyPayment(principal, rate, payments) {
    const convertedRate = rate/100;
    const periodicRate = calcPeriodRate(convertedRate);
    return (periodicRate*principal*(Math.pow((1+periodicRate),payments)))/(Math.pow((1+periodicRate),payments)-1);
}

function calcTotalCost(monthlyPmt, totalPayments) {
    return monthlyPmt * totalPayments;
}

function calcTotalInterest(totalCost, principal)
{
    return totalCost - principal;
}