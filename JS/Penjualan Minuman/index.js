import input from 'input';
import boxen from 'boxen';

class MesinMinuman {
  constructor() {
    this._jenisVarian = {
      sweet: {
        harga: 10000,
      },
      soda: {
        harga: 8000,
      },
    };
    this._jenisTopping = {
      pudding: {
        harga: 3000,
      },
      jelly: {
        harga: 2500,
      },
    };
    this._varian;
    this._topping;
    this._size;
    this._harga = 0;
  }

  set varian(varian) {
    this._varian = varian;
  }

  get varian() {
    return this._varian;
  }

  set topping(topping) {
    this._topping = topping;
  }

  get topping() {
    return this._topping;
  }

  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  showHeader() {
    return 'Penjual Minuman Kekinian';
  }

  showMenu() {
    return `Varian:
  - Sweet (Rp10.000)
  - Soda (Rp8.000)

Topping:
  - Pudding (Rp3.000)
  - Jelly (Rp2.500)

Cup:
  - Normal
  - Large (+ Rp7.000)`;

    // console.log(text);
  }

  formatNumber(num) {
    return 'Rp' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  hitungHarga() {
    switch (this._varian) {
      case 'sweet':
        this._harga += this._jenisVarian.sweet.harga;
        break;
      case 'soda':
        this._harga += this._jenisVarian.soda.harga;
        break;
    }

    switch (this._topping) {
      case 'pudding':
        this._harga += this._jenisTopping.pudding.harga;
        break;
      case 'jelly':
        this._harga += this._jenisTopping.jelly.harga;
        break;
    }

    if (this._size == 'large') this._harga += 7000;
    return this.formatNumber(this._harga);
  }
}

const mesin = new MesinMinuman();

(async () => {
  console.log(
    boxen(
      mesin.showMenu(),
      {
        title: mesin.showHeader(),
        padding: 1
      }
    )
  );

  mesin.varian = await input.select('Pilih varian minuman', [
    {
      name: 'Sweet',
      value: 'sweet',
    },
    {
      name: 'Soda',
      value: 'soda',
    },
  ]);

  mesin.topping = await input.select('Pilih topping minuman', [
    {
      name: 'Pudding',
      value: 'pudding',
    },
    {
      name: 'Jelly',
      value: 'jelly',
    },
  ]);

  mesin.size = await input.select('Pilih ukuran minuman', [
    {
      name: 'Normal',
      value: 'normal',
    },
    {
      name: 'Large',
      value: 'large',
    },
  ]);

  console.log(
    boxen(
      `Total harga: ${mesin.hitungHarga()}`,
      {
        padding: 1
      }
    )
  );
})();
