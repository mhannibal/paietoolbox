import { calcIrg, arrondiAuDizaineInferier } from './irg-calculator-page';

test('Irg of 30000 to equal 0', () => {
    expect(calcIrg(30000,false)).toBe(0);
});

test('Irg of 20000 to equal 0', () => {
    expect(calcIrg(20000,false)).not.toBe(5);
});

test('Irg of 84000 to equal 18700', () => {
    expect(calcIrg(84000,false)).toBe(18700);
});

test('Irg of 145 623,00 to equal 38467', () => {
    expect(calcIrg(145623,false)).toBe(38467);
});


test('Irg of 75000,00 to equal 16000', () => {
    expect(calcIrg(75000,false)).toBe(16000);
});

test('Irg of 36000,00 to equal 4 300,00', () => {
    expect(calcIrg(36000,false)).toBe(4300);
});

test('Irg of 30020,00 to equal 16', () => {
    expect(calcIrg(30020,false)).toBe(16);
});

test('Irg of 30120,00 to equal 96,00', () => {
    expect(calcIrg(30120,false)).toBe(96);
});

test('Irg of 32 125,00 to equal  1 696,00', () => {
    expect(calcIrg(32125,false)).toBe(1696);
});
 

 
test('Irg of 45 000,00 to equal 7 000,00', () => {
    expect(calcIrg(45000,false)).toBe(7000);
});
test('Irg of 53 265,00 to equal 9 478,00', () => {
    expect(calcIrg(53265,false)).toBe(9478);
});
test('Irg of 96 532,00 to equal  22 459,00', () => {
    expect(calcIrg(96532,false)).toBe(22459);
});

test('arrondiAuDizaineInferier of 96532 to equal  96530', () => {
    expect(arrondiAuDizaineInferier(96532)).toBe(96530);
});
test('arrondiAuDizaineInferier of 3652 to equal  3650', () => {
    expect(arrondiAuDizaineInferier(3652)).toBe(3650);
});

test('arrondiAuDizaineInferier of 5120 to equal  5120', () => {
    expect(arrondiAuDizaineInferier(5120,)).toBe(5120);
});

