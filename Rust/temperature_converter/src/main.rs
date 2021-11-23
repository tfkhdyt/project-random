use std::io;
use std::io::Write;

fn c_to_f(c: f32) -> f32 {
    (c * 1.8) + 32.0
}

fn f_to_c(f: f32) -> f32 {
    0.56 * (f - 32.0)
}

fn main() {
    println!("=== Temperature Converter ===");
    println!(
        "Menu:\n\
         [1] Celsius to Fahrenheit\n\
         [2] Fahrenheit to Celsius"
    );
    '_loop: loop {
        // input
        print!("\nPilih menu> ");
        io::stdout().flush().unwrap();
        let mut pilihan = String::new();
        io::stdin().read_line(&mut pilihan).expect("Input gagal!");

        // ubah input menjadi integer
        let pilihan: usize = match pilihan.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Tolong masukkan angka!");
                continue;
            }
        };

        match pilihan {
            1 => loop {
                // input celsius
                print!("Masukkan suhu (Celsius)> ");
                io::stdout().flush().unwrap();
                let mut celsius = String::new();
                io::stdin()
                    .read_line(&mut celsius)
                    .expect("Input bukan angka");

                // ubah jadi float
                let celsius: f32 = match celsius.trim().parse() {
                    Ok(num) => num,
                    Err(_) => {
                        println!("Tolong masukkan angka!");
                        continue;
                    }
                };
                let hasil = c_to_f(celsius);
                println!("Hasil konversi {}°C ke °F adalah: {}°F", celsius, hasil);
                break '_loop;
            },
            2 => loop {
                // input fahrenheit
                print!("Masukkan suhu (Fahrenheit)> ");
                io::stdout().flush().unwrap();
                let mut fahrenheit = String::new();
                io::stdin()
                    .read_line(&mut fahrenheit)
                    .expect("Input bukan angka");

                // ubah jadi float
                let fahrenheit: f32 = match fahrenheit.trim().parse() {
                    Ok(num) => num,
                    Err(_) => {
                        println!("Tolong masukkan angka!");
                        continue;
                    }
                };
                let hasil = f_to_c(fahrenheit);
                println!("Hasil konversi {}°F ke °C adalah: {}°C", fahrenheit, hasil);
                break '_loop;
            },
            _ => println!("Menu tidak ada"),
        }

        // println!("Input anda {}", pilihan);
    }
}
