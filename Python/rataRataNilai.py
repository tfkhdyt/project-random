# CREATED BY TAUFIK HIDAYAT
# BANDUNG, 13 SEPTEMBER 2021

from tabulate import tabulate # import module untuk membuat tabel

data = [] # inisialisasi list data
jmlMhs = int(input('Masukkan jumlah mahasiswa: ')) # input jumlah mahasiswa

for i in range(jmlMhs):
  nama = input('\nMasukkan nama: ') # input nama
  nilai = int(input('Masukkan nilai: ')) # input nilai
  data.append([i + 1, nama, nilai]) # memasukkan data nama dan nilai ke list data
  
table = [['No', 'Nama', 'Nilai']] # membuat list table
table = table + data # concat list table dengan data

jmlNilai = 0
for j in data:
  jmlNilai = jmlNilai + j # menghitung jumlah nilai
nilaiRata = jmlNilai / jmlMhs # menghitung nilai rata-rata

print('\n' + tabulate(table, headers='firstrow', tablefmt='fancy_grid')) # mencetak tabel
print('\nJumlah Mahasiswa =', jmlMhs) # mencetak jumlah mahasiswa
print('Rata-rata =', nilaiRata) # mencetak nilai rata-rata