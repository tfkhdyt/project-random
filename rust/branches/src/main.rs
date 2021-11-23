fn main() {
    let number = 7;

    if number < 5 {
        println!("Kondisinya benar!");
    } else {
        println!("Kondisinya salah!");
    }

    let condition = true;
    let number = if condition { 6 } else { 9 };
    println!("The value of the number is {}", number);
}
