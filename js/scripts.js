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

    penny = change;



    return [penny, nickel, dime, quarter];
};

// it('it will return one nickel for a change amount of 0.05', function() {
//     expect(coin_combo(0.05)).to.eql([0, 1, 0, 0]);
// });
//
// $(document).ready(function() {
//     $("form#coords").submit(function(event) {
//     var enemy_x = parseInt($("input#enemy_x").val());
//     var enemy_y = parseInt($("input#enemy_y").val());
//
//     var queen_x = parseInt($("input#queen_x").val());
//     var queen_y = parseInt($("input#queen_y").val());
//
//     var result = queenAttack([queen_x, queen_y], [enemy_x, enemy_y]);
//
//     if (!result) {
//         $(".not").text("not");
//     }
//
//     else {
//         $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//
//     });
// });
