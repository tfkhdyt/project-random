"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pegawai = void 0;
const currency_1 = require("./utils/currency");
class Pegawai {
    constructor(gaji, nama) {
        this.gaji = gaji;
        this.nama = nama;
        this.formatter = new currency_1.Currency();
    }
    infoGaji() {
        console.log(`Gaji ${this.getNama()}: ${this.formatter.format(this.getGaji())}`);
    }
    getGaji() {
        return this.gaji;
    }
    setGaji(gaji) {
        this.gaji = gaji;
    }
    getNama() {
        return this.nama;
    }
    setNama(nama) {
        this.nama = nama;
    }
}
exports.Pegawai = Pegawai;
