describe('roman', function() {

    it('will return the string "I" for the number 1', function() {
        expect(roman(1)).to.equal("I");
    });

    it('will return the string "II" for the input number 2', function(){
        expect(roman(2)).to.equal("II");
    });

    it('will return the string "III" for the input number 3', function(){
        expect(roman(3)).to.equal("III");
    });

    it('will return the string "IV" for the input number 4', function(){
        expect(roman(4)).to.equal("IV");
    });

    it('will return the string "V" for the input number 5', function(){
        expect(roman(5)).to.equal("V");
    });

    it('will return the string "VI" for the input number 6', function(){
        expect(roman(6)).to.equal("VI");
    });

    it('will return the string "VII" for the input number 7', function(){
        expect(roman(7)).to.equal("VII");
    });

    it('will return the string "VIII" for the input number 8', function(){
        expect(roman(8)).to.equal("VIII");
    });

    it('will return the string "IX" for the input number 9', function(){
        expect(roman(9)).to.equal("IX");
    });

    it('will return the string "X" for the input number 10', function(){
        expect(roman(10)).to.equal("X");
    });

    it('will return the string "XI" for the input number 11', function(){
        expect(roman(11)).to.equal("XI");
    });

    it('will return the string "XII" for the input number 12', function(){
        expect(roman(12)).to.equal("XII");
    });

    it('will return the string "XIV" for the input number 14', function(){
        expect(roman(14)).to.equal("XIV");
    });

    it('will return the string "XV" for the input number 15', function(){
        expect(roman(15)).to.equal("XV");
    });

    it('will return the string "XVI" for the input number 16', function(){
        expect(roman(16)).to.equal("XVI");
    });

    it('will return the string "XIX" for the input number 19', function(){
        expect(roman(19)).to.equal("XIX");
    });

    it('will return the string "XX" for the input number 20', function(){
        expect(roman(20)).to.equal("XX");
    });

    it('will return the string "XXIV" for the input number 24', function(){
        expect(roman(24)).to.equal("XXIV");
    });

    it('will return the string "XL" for the input number 40', function(){
        expect(roman(40)).to.equal("XL");
    });

    it('will return the string "L" for the input number 50', function(){
        expect(roman(50)).to.equal("L");
    });

    it('will return the string "LIV" for the input number 54', function(){
        expect(roman(54)).to.equal("LIV");
    });

    it('will return the string "LXXVII" for the input number 77', function(){
        expect(roman(77)).to.equal("LXXVII");
    });

    it('will return the string "XC" for the input number 90', function(){
        expect(roman(90)).to.equal("XC");
    });

    it('will return the string "C" for the input number 100', function(){
        expect(roman(100)).to.equal("C");
    });

    it('will return the string "CXIV" for the input number 114', function(){
        expect(roman(114)).to.equal("CXIV");
    });

    it('will return the string "CXLIII" for the input number 143', function(){
        expect(roman(143)).to.equal("CXLIII");
    });

    it('will return the string "CCLXVII" for the input number 267', function(){
        expect(roman(267)).to.equal("CCLXVII");
    });

    it('will return the string "CCCXCIX" for the input number 399', function(){
        expect(roman(399)).to.equal("CCCXCIX");
    });

    it('will return the string "CD" for the input number 400', function(){
        expect(roman(400)).to.equal("CD");
    });

    it('will return the string "D" for the input number 500', function(){
        expect(roman(500)).to.equal("D");
    });

    it('will return the string "DCCLXXVII" for the input number 777', function(){
        expect(roman(777)).to.equal("DCCLXXVII");
    });





});
