describe('coin_combo', function() {

    it('it will return one penny for a change amount of 0.01', function() {
        expect(coin_combo(0.01)).to.eql([1, 0, 0, 0]);
    });

    it('it will return one nickel for a change amount of 0.05', function() {
        expect(coin_combo(0.05)).to.eql([0, 1, 0, 0]);
    });

    it('it will return one penny and one nickel for a change amount of 0.06', function() {
        // expect(coin_combo(0.06)).to.eql([1, 1, 0, 0,]);
        expect(coin_combo(0.07)).to.eql([2, 1, 0, 0,]);
    });

});

//return look like :  [penny, nickel, dime, quarter]
//coins[p] = 1
// "penny = 1, nickel = x"
