var roman = function(input) {

    var input1 = parseInt(input);
    var output = "";

    if (input1 > 3999)
    {
        return "That number is too big to be converted!";
    }

    else
    {

        /*
        Symbol  Value
        I       1
        V       5
        X       10
        L       50
        C       100
        D       500
        M       1,000
*/
        while(input1 >= 1000) {
            output += "M";
            input1 -= 1000;
        }

        while(input1 >= 500) {
            output += "D";
            input1 -= 500;
        }

        if(input1 >= 400) {
            output += "CD";
            input1 -= 400;
        }

        while(input1 >= 100) {
            output += "C";
            input1 -= 100;
        }

        if(input1 >= 90) {
            output += "XC";
            input1 -= 90;
        }

        while(input1 >= 50) {
            output += "L";
            input1 -= 50;
        }

        if(input1 >= 40) {
            output += "XL";
            input1 -= 40;
        }

        while(input1 >= 10) {
            output += "X";
            input1 -= 10;
        }

        if(input1 < 4)
        {
            for(var i = 0; i < input1; i++)
            {
                output += "I";
            }
        }

        else if(input1 % 10 === 4)
        {
            output += "IV";
        }

        else if(input1 % 10 === 9)
        {
            output += "IX";
        }

        else if(input1 % 5 === 0)
        {
            output += "V";
        }

        else if((input1 % 10 === 6) ||
                (input1 % 10 === 7) ||
                (input1 % 10 === 8))
        {
            output += "V";
            var rem = input1 - 5;
            for(var i = 0; i < rem; i++)
            {
                output += "I";
            }
        }

     }

    return output;
};

$(document).ready(function() {

  $("form#input").submit(function(event){
    event.preventDefault();
    var input = $("input#number").val();
    var output = roman(input);
    console.log(input);

    $(".output").text(output);
  });
});
