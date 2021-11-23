use rand::Rng;
use std::cmp::Ordering;
use std::io;
use std::io::Write;

fn main() {
    // deklarasi variabel
    let mut percobaan = 5;
    let secret_number = rand::thread_rng().gen_range(1..101);

    println!("Tebak angkanya!");
    loop {
        if percobaan == 0 {
            println!(
                "Sisa percobaan anda telah habis!\n\
                Anda kalah!\n\
                Jawabannya adalah: {}",
                secret_number
            );
            break;
        }
        // input
        print!("Masukkan tebakan mu: ");
        io::stdout().flush().unwrap();
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // ubah input menjadi integer
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!();
                continue;
            }
        };

        // mengecek apakah input sesuai dengan secret number
        match guess.cmp(&secret_number) {
            Ordering::Less => {
                percobaan -= 1;
                println!(
                    "Terlalu kecil!\n\
                    Sisa percobaan anda: {}\n",
                    percobaan
                );
            }
            Ordering::Greater => {
                percobaan -= 1;
                println!(
                    "Terlalu besar!\n\
                    Sisa percobaan anda: {}\n",
                    percobaan
                );
            }
            Ordering::Equal => {
                println!("Kamu menang!");
                break;
            }
        }
    }
}
