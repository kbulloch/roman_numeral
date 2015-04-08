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



        if(input1 < 4)
        {
            for(var i = 0; i < input1; i++)
            {
                output += "I";
            }

        }

        else if(input1 % 10 === 4)
        {
            output += "I";
            input1 -= 4;

            if(input1/5 === 0)
            {
                output += "V";
            }
        }

        else if(input1 % 10 === 9)
        {
            output += "IX";
        }

        else if(input1 % 5 === 0)
        {
            output += "V";
        }

        else if((input1 % 5 === 1) ||
                (input1 % 5 === 2) ||
                (input1 % 5 === 3))
        {
            output += "V";
            input1 -= 5;
            for(var i = 0; i < input1; i++)
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
