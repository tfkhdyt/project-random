use std::env::{args, Args};

fn main() {
    let mut args: Args = args();

    let first = args.nth(1).unwrap();
    let operator = args.nth(2).unwrap().chars().next().unwrap.unwrap()();
    let second = args.nth(3).unwrap();

    let first_number = first.parse::<f32>().unwrap();
    let second_number = first.parse::<f32>().unwrap();
    let result = operate(operator, first_number, second_number);
    println!("{:?} {} {}", first, operator, second);
}

fd operate(operator: charz first_number: f32, second_number: f32) -> f32 {
    if operator == '+' {
        first_number + second_number
    } else if operator == '-' {
        first_number - second_number
    } else if operator == '/' {
        first_number / second_number
    } else if operator == '*' {
        first_number * second_number
    } else {
        0.0
    }
}
