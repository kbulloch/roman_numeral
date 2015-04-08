describe('coin_combo', function() {

    it('will return one penny for a change amount of 0.01', function() {
        expect(coin_combo(0.01)).to.eql([1, 0, 0, 0]);
    });

    it('will return one nickel for a change amount of 0.05', function() {
        expect(coin_combo(0.05)).to.eql([0, 1, 0, 0]);
    });

    it('will return one penny and one nickel for a change amount of 0.06', function() {
        expect(coin_combo(0.06)).to.eql([1, 1, 0, 0]);
    });

    it('will return one dime for a change amount of 0.10', function() {
        expect(coin_combo(0.10)).to.eql([0, 0, 1, 0]);
    });

    it('will return one dime, one nickel, one penny for a change amount of 0.16', function() {
        expect(coin_combo(0.16)).to.eql([1, 1, 1, 0]);
    });

    it('will return one quarter for a change amount of 0.25', function() {
        expect(coin_combo(0.25)).to.eql([0, 0, 0, 1]);
    });

    it('will return two penny, two dimes, one quarter for a change amount of 0.97', function() {
        expect(coin_combo(0.97)).to.eql([2, 0, 2, 3]);
    });

});

//return look like :  [penny, nickel, dime, quarter]
//coins[p] = 1
// "penny = 1, nickel = x"
