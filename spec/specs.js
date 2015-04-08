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

});
