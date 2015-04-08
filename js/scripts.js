var coin_combo = function(input) {
    var change = input * 100;

    var penny = 0;
    var nickel = 0;
    var dime = 0;
    var quarter = 0;
    var dollar = 0;
    var five = 0;
    var ten = 0;
    var twenty = 0;
    var fifty = 0;
    var hundred = 0;

    while((change - 10000) >= 0)
    {
        hundred++;
        change-= 10000;
    }
    while((change - 5000) >= 0)
    {
        fifty++;
        change-= 5000;
    }
    while((change - 2000) >= 0)
    {
        twenty++;
        change-= 2000;
    }
    while((change - 1000) >= 0)
    {
        ten++;
        change-= 1000;
    }
    while ((change - 500) >= 0)
    {
        five++;
        change -= 500;
    }
    while ((change - 100) >= 0)
    {
        dollar++;
        change -= 100;
    }
    while ((change - 25) >= 0)
    {
        quarter++;
        change -= 25;
    }
    while ((change - 10) >= 0)
    {
        dime++;
        change -= 10;
    }

    while ((change - 5) >= 0)
    {
        nickel++;
        change -= 5;
    }

    penny = Math.round(change);
    //used round because of 2.000000001 pennies being returned on 0.07

    return [penny, nickel, dime, quarter, dollar, five, ten, twenty, fifty, hundred];
};

$(document).ready(function() {
    $("form#changeInput").submit(function(event) {
    var change = parseFloat($("input#change_amount").val());

    var result = coin_combo(change);

    $('#change_returned').empty();

    var penny = result[0];
    var nickel = result[1];
    var dime = result[2];
    var quarter = result[3];
    var dollar = result[4];
    var five = result[5];
    var ten = result[6];
    var twenty = result[7];
    var fifty = result[8];
    var hundred = result[9];


    $('#change_returned').append(
        "<li class='text-primary'>Pennies: " + penny + "</li>" +
        "<li class='text-success'>Nickles: " + nickel + "</li>" +
        "<li class='text-danger'>Dimes: " + dime + "</li>" +
        "<li class='text-warning'>Quarters: " + quarter + "</li>" +
        "<li class='text-warning'>Dollars: " + dollar + "</li>" +
        "<li class='text-warning'>Fives: " + five + "</li>" +
        "<li class='text-success'>Tens: " + ten + "</li>" +
        "<li class='text-success'>Twenties: " + twenty + "</li>" +
        "<li class='text-success'>Fifties: " + fifty + "</li>" +
        "<li class='text-success'>Hundreds: " + hundred + "</li>");


    $("#change_returned").show();
    event.preventDefault();

    });
});
