fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {}", count);

    // for
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("Nilainya adalah: {}", element);
    }

    for number in 1..4 {
        println!("{}!", number);
    }
    
    println!("ANGKAT!");
}
