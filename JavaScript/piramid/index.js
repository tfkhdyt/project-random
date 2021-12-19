const { println, print } = require('./utils/print')

for (let baris = 1; baris <= 5; baris++) {
	let selisih = 4
	for (let kolom = 1, x = baris; kolom <= 5; kolom++) {
		if (kolom <= baris) {
			print(x + ' ')
			x += selisih
			selisih--
		}
	}
	println()
}
