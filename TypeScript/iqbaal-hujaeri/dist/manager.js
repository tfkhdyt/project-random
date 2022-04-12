"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const pegawai_1 = require("./pegawai");
class Manager extends pegawai_1.Pegawai {
    constructor(tunjangan, gaji, nama) {
        super(gaji, nama);
        this.tunjangan = tunjangan;
    }
    getTunjangan() {
        return this.tunjangan;
    }
    setTunjangan(tunjangan) {
        this.tunjangan = tunjangan;
    }
    infoTunjangan() {
        console.log(`Tunjangan ${this.getNama()}: ${this.formatter.format(this.getTunjangan())}`);
    }
}
exports.Manager = Manager;
