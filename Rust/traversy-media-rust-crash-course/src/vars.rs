pub fn run() {
    let name = "Taufik";
    let mut age = 19;

    println!("My name is {} and I am {}", name, age);
    age = 20;
    println!("My name is {} and I am {}", name, age);

    // define constant
    const ID: i32 = 001;
    println!("ID: {}", ID);

    // assign multiple vars
    let (my_name, my_age) = ("Taufik", 20);
    println!("{} is {}", my_name, my_age);
}
