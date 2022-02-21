// import library yang dibutuhkan
#include <stdlib.h>
#include <stdio.h>
#include <malloc.h>
#include <string.h>

// deklarasi struct identitas
typedef struct {
  char programstudi[100];
  char nama[100];
} identitas;

// deklarasi struct elemen
typedef struct elmt *alamatelmt;
typedef struct elmt {
  identitas elmt;
  alamatelmt next;
} elemen;

// deklarasi struct stack
typedef struct {
  elemen *top;
} stack;

// deklarasi function untuk membuat elemen kosong pada stack
void createEmpty(stack *S) {
  (*S).top = NULL;
}

// deklarasi function untuk mengecek apakah elemen pada stack kosong atau tidak
int isEmpty(stack S) {
  int hasil = 0;
  if (S.top == NULL) {
    hasil = 1;
  }
  return hasil;
}

// deklarasi function untuk menghitung jumlah elemen pada stack
int countElement(stack S) {
  int hasil = 0;
  if (S.top != NULL) {
    elemen *elmt;
    elmt = S.top;
    while (elmt != NULL) {
      hasil = hasil + 1;
      elmt = elmt->next;
    }
  }
  return hasil;
}

// deklarasi function untuk mencari data pada stack
void search(stack S, char Cari[]) {
  if (S.top != NULL) {
    printf(" Cari Mahasiswa berdasarkan nama\n");
    printf("-----------------------------------\n");
    printf(" Nama Mahasiswa : ");
    fflush(stdin);
    gets(Cari);
    printf("-----------------------------------\n");
    elemen *elmt = S.top;
    int i = 1;
    int h = 1;
    int y = 0;
    while (elmt != NULL) {
      h = strcmp(Cari, elmt->elmt.nama);
      if (h == 0) {
        printf("-----------------------------------\n");
        printf("Mahasiswa Ke  : %d\n", i);
        printf("-----------------------------------\n");
        printf("Nama          : %s\n", elmt->elmt.nama);
        printf("Program Studi : %s\n", elmt->elmt.programstudi);
        y = y + 1;
      }
      elmt = elmt->next;
      i = i + 1;
    }
    if (y == 0) {
      printf("Data tidak ditemukan!\n");
    }
    printf("-----------------------------------\n");
  } else {
    system("clear");
    printf("-----------------------------------\n");
    printf(" Stack kosong !\n");
    printf("-----------------------------------\n");
  }
}

// deklarasi function untuk memasukkan data ke dalam stack
void push(char nama[], char programstudi[], stack *S) {
  elemen *elmt;
  elmt = (elemen *)malloc(sizeof(elemen));
  strcpy(elmt->elmt.nama, nama);
  strcpy(elmt->elmt.programstudi, programstudi);
  elmt->next = (*S).top;
  (*S).top = elmt;
}

// deklarasi function untuk menghapus data paling akhir pada stack
void pop(stack *S) {
  if ((*S).top != NULL) {
    elemen *elmt = (*S).top;
    (*S).top = (*S).top->next;
    elmt->next = NULL;
    free(elmt);
  } else {
    system("clear");
    printf("-----------------------------------\n");
    printf(" Stack kosong !\n");
    printf("-----------------------------------\n");
  }
}

// deklarasi function untuk mencetak isi stack
void printStack(stack S) {
  if (S.top != NULL) {
    elemen *elmt = S.top;
    printf("-----------------------------------\n");
    printf(" Stack Mahasiswa\n");
    int i = 1;
    while (elmt != NULL) {
      printf("-----------------------------------\n");
      printf("Mahasiswa Ke - %d\n", i);
      printf("-----------------------------------\n");
      printf("Nama          : %s\n", elmt->elmt.nama);
      printf("Program Studi : %s\n", elmt->elmt.programstudi);
      elmt = elmt->next;
      i = i + 1;
    }
    printf("-----------------------------------\n");
  } else {
    system("clear");
    printf("-----------------------------------\n");
    printf(" Stack kosong !\n");
    printf("-----------------------------------\n");
  }
}

// deklarasi utama
int main() {
  stack S; // membuat instansiasi dari stack
  createEmpty(&S); // membuat elemen kosong pada stack
  // deklarasi variabel yang dibutuhkan
  char nama[100], programstudi[100], Cari[100];
  int menu;
  // lakukan perulangan dan tampilkan menu
  do {
    system("clear"); // bersihkan layar
    printf("-----------------------------------\n");
    printf(" Database Mahasiswa \n");
    printf("-----------------------------------\n");
    printf(" 1. Tambah Mahasiswa\n");
    printf(" 2. Hapus Mahasiswa\n");
    printf(" 3. Cari Mahasiswa\n");
    printf(" 4. Tampilkan Semua\n");
    printf(" 5. Close\n");
    printf("-----------------------------------\n");
    printf("Menu : ");
    scanf("%d", &menu); // ambil input dari user dan simpan pada variabel menu
    switch (menu) { // cek isi variabel ini
      case 1: // jika variabel menu bernilai 1
        system("clear"); // bersihkan layar
        printf("-----------------------------------\n");
        printf(" Tambah Mahasiswa\n");
        printf("-----------------------------------\n");
        printf(" Nama          : ");
        fflush(stdin);
        // ambil input dari user dan simpan pada variabel nama
        gets(nama);
        printf(" Program Studi : ");
        fflush(stdin);
        // ambil input dari user dan simpan pada variabel programstudi
        gets(programstudi);
        // masukkan data yang telah di-input tadi ke stack
        push(nama, programstudi, &S);
        printf("-----------------------------------\n\n\n\n");
        system("read"); // kembali ke menu sebelumnya
        break;
      case 2:
        system("clear"); // bersihkan layar
        printf("-----------------------------------\n");
        printf("Data Mahasiswa Berhasil Dihapus !\n");
        printf("-----------------------------------\n");
        pop(&S); // menghapus data paling atas pada stack
        system("read"); // kembali ke menu sebelumnya
        break;
      case 3:
        system("clear"); // bersihkan layar
        search(S, nama); // mencari data pada stack berdasarkan nama
        system("read"); // kembali ke menu sebelumnya
        break;
      case 4:
        system("clear"); // bersihkan layar
        printStack(S); // tampilkan isi stack
        system("read"); // kembali ke menu sebelumnya
        break;
      case 5:
        system("exit"); // keluar dari program
        break;
      default:
      break;
    }
  } while (menu != 5); // ulangi perintah selama isi variabel menu bukan 5
  return 0; // keluar dari program
}