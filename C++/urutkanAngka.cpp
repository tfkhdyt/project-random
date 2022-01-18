#include<iostream>
using namespace std;

void urutkanAngka(int data[100], int jumlah) {
  int tmp;
  
  for(int i = 0; i < (jumlah - 1); i++) {
    for(int j = i + 1; j < jumlah; j++) {
      if(data[i] > data[j]) {
        tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
      }
    }
  }
}

int main() {
  int jumlah, data[100];
  
  cout << "Program Mengurutkan Angka Kecil Ke Besar" << endl;
  
  cout << "Masukkan jumlah angka : ";
  cin >> jumlah;
  cout << endl;
  
  for(int i = 0; i < jumlah; i++) {
    cout << "Masukkan Angka ke " << (i + 1) << " : ";
      cin >> data[i];
  }
  
  cout << endl;
  
  cout << "Data sebelum diurutkan : " << endl;
  for(int i = 0; i < jumlah; i++) {
    cout << data[i] << " ";
  }
  cout << endl;
  
  urutkanAngka(data, jumlah);

  cout << "Data setelah diurutkan : " << endl;
  for(int i = 0; i < jumlah; i++) {
    cout << data[i] <<" ";
  }
  
  return 0;
}