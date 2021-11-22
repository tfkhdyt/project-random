use std::io;
use rand::Rng;

fn main() {
    println!("Tebak angkanya!");
    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("Angka rahasianya adalah: {}", secret_number);
    println!("Masukkan tebakan mu: ");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    println!("Kamu menebak: {}", guess);
}
