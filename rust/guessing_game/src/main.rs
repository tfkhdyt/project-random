use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Tebak angkanya!");
    let secret_number = rand::thread_rng().gen_range(1..101);
    // println!("Angka rahasianya adalah: {}", secret_number);
    loop {
        println!("Masukkan tebakan mu: ");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!();
                continue;
            }
        };
        // println!("Kamu menebak: {}", guess);
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Terlalu kecil!\n"),
            Ordering::Greater => println!("Terlalu besar!\n"),
            Ordering::Equal => {
                println!("Kamu menang!");
                break;
            }
        }
    }}
