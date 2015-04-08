var roman = function(input) {

    var input1 = parseInt(input);
    var output = "";

    if (input1 > 3999)
    {
        return "That number is too big to be converted!";
    }

    else
    {


        // possible structure for input numbers > 9
        // var split_input = input.split("");
        //
        // for(var i = 0; i< split_input.length; i++)
        // {
        //     if([split_input.length-1] === 1)
        //     {
        //         output += "I";
        //     }
        // }
        //

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

        while(input1 >= 100) {
            output += "C";
            input1 -= 100;
        }

        while(input1 >= 50) {
            output += "L";
            input1 -= 50;
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

// trying it out II


// trying it out!

// var roman = function(input) {
//
//     var input1 = parseInt(input);
//
//     if (input1 > 3999)
//     {
//         return "That number is too big to be converted!";
//     }
//
//     else if(input1 % 5 === 0)
//     {
//         output += "V";
//     }
//     return output;
// };

//input = 2
//output = "II"
