use std::io;

fn main() {
    // shadowing
    let x = 5;
    let x = x + 1;
    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }
    println!("The value of x is: {}", x);

    let spaces = "   ";
    println!("Before: {}", spaces);
    let spaces = spaces.len();
    println!("After : {}", spaces);

    // number separator
    let angka = 69_420;
    println!("Saat ini jumlah uang ku adalah: Rp{}", angka);

    // floating data type
    let x = 2.0; // f64
    let y: f32 = 3.0; // f32
    println!("Nilai dari x adalah: {}", x);
    println!("Nilai dari y adalah: {}", y);

    // boolean data type
    let t = true;
    let f: bool = false; // with explicit type
    println!("t = {}\nf = {}", t, f);

    // character data type
    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';
    println!("c = {}\nz = {}\nheart_eyed_cat = {}", c, z, heart_eyed_cat);

    // tuple
    let tup = (500, 6.4, 1);
    let (x, y, z) = tup;
    let lima_ratus = tup.0;
    println!("Nilai dari x pada tuple adalah: {}", lima_ratus);
    println!("Nilai dari y pada tuple adalah: {}", y);

    // array
    let a = [1, 2, 3, 4, 5];
    let bulan = [
        "Januari",
        "Fabruari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    let bulan_kelahiran = bulan[3];
    println!("Bulan kelahiran ku adalah: {}", bulan_kelahiran);
    println!("Masukkan indeks dari array:");
    let mut index = String::new();
    io::stdin().read_line(&mut index).expect("Input gagal!");
    let index: usize = index.trim().parse().expect("Mohon masukkan angka");
    let elemen = a[index];
    println!(
        "Nilai dari elemen pada indeks ke-{} adalah: {}",
        index, elemen
    );
}
