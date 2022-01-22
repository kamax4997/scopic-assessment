const { describe, test, expect } = global;
import Car from '../../src/car-rental-bug-fixing/Car';
import Customer from '../../src/car-rental-bug-fixing/Customer';
import Rental from '../../src/car-rental-bug-fixing/Rental';

describe('CRS-003', function () {
    test('If car 1, 2, and 3 is rented, the detailed fee must be array of strings', async function () {
        const car1 = new Car(1, 'Toyoda');
        const car2 = new Car(2, 'Mercedes‑Benz');
        const car3 = new Car(3, 'Audi');
        const rental1 = new Rental([car1, car2], 2);
        const rental2 = new Rental([car3], 3);
        const customer = new Customer('CRS', []);
        customer.addRental(rental1);
        customer.addRental(rental2);
        let fee = await customer.getDetailedFees();
        return expect(fee).toStrictEqual([
            'Fees for Rental Number 1 is 340',
            'Fees for Rental Number 2 is 390',
        ]);
    });

});
