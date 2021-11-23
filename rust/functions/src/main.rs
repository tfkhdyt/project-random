fn sebut_nama(nama: String) {
    println!("Nama saya adalah {}", nama);
}

fn lima() -> u8 {
    5
}

fn tambah(x: isize, y: isize) -> isize {
    x + y
}

fn main() {
    println!("Hello, world!");
    sebut_nama("Taufik".to_string());
    println!("Nilai dari x adalah: {}", lima());
    println!("{} + {} = {}", 6, 9, tambah(6, 9));
}
