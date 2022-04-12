"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programmer = void 0;
const pegawai_1 = require("./pegawai");
class Programmer extends pegawai_1.Pegawai {
    constructor(bonus, gaji, nama) {
        super(gaji, nama);
        this.bonus = bonus;
    }
    getBonus() {
        return this.bonus;
    }
    setBonus(bonus) {
        this.bonus = bonus;
    }
    infoBonus() {
        console.log(`Bonus ${this.getNama()}: ${this.formatter.format(this.getBonus())}`);
    }
}
exports.Programmer = Programmer;
