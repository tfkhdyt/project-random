use std::io;

fn main() {
    println!("Tebak angkanya!");
    println!("Masukkan tebakan mu: ");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    println!("Kamu menebak: {}", guess);
}
