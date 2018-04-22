

const calcPeriodRate = function(r) {
    return r/12;
};

function calcMontlyPayment(principal, rate, payments) {
    const convertedRate = rate/100;
    const periodicRate = calcPeriodRate(convertedRate);
    return (periodicRate*principal*(Math.pow((1+periodicRate),payments)))/(Math.pow((1+periodicRate),payments)-1);
}

function calcTotalCost(monthlyPmt, totalPayments) {
    return monthlyPmt * totalPayments;
}

function calcTotalInterest(totalCost, principal) {
    return totalCost - principal;
}

function calcMonthyInfo (payment, principle, interestPercent) {
    var i = interestPercent * principle; // total toward interest
    var p = payment - i; //total toward principle

    return {
        balance: principle - p,
        interest: i,
        principal: p
    };
}

function calcAmortizationSchedule(principle, monthlyInterestPercent, montlyPayment) {
    var items = [];
    let p = principle;

    while (p > 0) {
        const item = calcMonthyInfo(montlyPayment, p, monthlyInterestPercent);
        p = p - item.principal;

        items.push(item);

    }
    return items;
}