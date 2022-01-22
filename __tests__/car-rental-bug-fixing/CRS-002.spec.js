const { describe, test, expect } = global;
import Car from '../../src/car-rental-bug-fixing/Car';
import Customer from '../../src/car-rental-bug-fixing/Customer';
import Rental from '../../src/car-rental-bug-fixing/Rental';

describe('CRS-002', function () {
    test('If car 1 is rented, the value must be 70', async function () {
        const car1 = new Car(1, 'Toyoda');
        const car2 = new Car(2, 'Mercedes‑Benz');
        const car3 = new Car(3, 'Audi');
        const rental1 = new Rental([car1, car2], 2);
        const rental2 = new Rental([car3], 3);
        const customer = new Customer('CRS', []);
        customer.addRental(rental1);
        customer.addRental(rental2);
        let fee = await customer.getTotalFees();
        return expect(fee).toBe("Customer CRS's total fees is 730");
    });

});
