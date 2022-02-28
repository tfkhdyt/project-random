pub fn run() {
    greetings("Halo", "Taufik");
    
    // bind functions values to variables
    let get_sum = add(6, 9);
    println!("Sum: {}", get_sum);

    // closures
    let n3: i32 = 10;
    let add_nums = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("C sum: {}", add_nums(3, 3));
}

fn greetings(greet: &str, name: &str) {
    println!("{} {}, nice to meet you!", greet, name);
}

fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2
}
