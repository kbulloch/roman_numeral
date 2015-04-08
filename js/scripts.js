var coin_combo = function(input) {
    var penny = 0;
    var nickel = 0;
    var dime = 0;
    var quarter = 0;

    var change = input * 100;

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

    return [penny, nickel, dime, quarter];
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


    $('#change_returned').append(
        "<li class='text-primary'>Pennies: " + penny + "</li>" +
        "<li class='text-success'>Nickles: " + nickel + "</li>" +
        "<li class='text-danger'>Dimes: " + dime + "</li>" +
        "<li class='text-warning'>Quarters: " + quarter + "</li>");

    $("#change_returned").show();
    event.preventDefault();

    });
});
