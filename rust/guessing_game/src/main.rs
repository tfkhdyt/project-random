use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Tebak angkanya!");
    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("Angka rahasianya adalah: {}", secret_number);
    println!("Masukkan tebakan mu: ");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    let guess: u32 = guess.trim().parse().expect("Mohon masukkan angka!");
    println!("Kamu menebak: {}", guess);
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Terlalu kecil!"),
        Ordering::Greater => println!("Terlalu besar!"),
        Ordering::Equal => println!("Kamu menang!"),
    }
}
