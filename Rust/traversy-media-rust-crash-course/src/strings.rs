pub fn run() {
    let mut hello = String::from("Hello ");

    // get length
    println!("Length: {}", hello.len());

    // push char
    hello.push('W');

    // push string
    hello.push_str("orld!");

    // capacity in bytes
    println!("Capacity: {}", hello.capacity());

    // check if empty
    println!("Is empty: {}", hello.is_empty());

    // contains
    println!("Contains 'World': {}", hello.contains("World"));

    println!("{}", hello);
}
