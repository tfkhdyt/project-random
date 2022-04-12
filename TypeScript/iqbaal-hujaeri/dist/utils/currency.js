"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
class Currency {
    constructor() {
        this.formatter = new Intl.NumberFormat(`id-ID`, {
            currency: 'IDR',
            style: 'currency',
            minimumFractionDigits: 0
        });
    }
    format(num) {
        return this.formatter.format(num);
    }
}
exports.Currency = Currency;
