pub fn run() {
    // print to console
    println!("Hello from the print.rs file");
    
    // basic formatting
    println!("{} is from {}", "Taufik", "Bandung");

    // positional formatting
    println!("{0} is from {1} and {0} likes to {2}", "Taufik", "Bandung", "code");

    // named arguments
    println!("{name} likes to play {activity}", name = "Taufik", activity = "Gaming");

    // placeholder traits
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);

    // placeholder for debug traits
    println!("{:?}", (12, true, "Hello"));

    // basic math
    println!("10 + 10 = {}", 10 + 10);
}
