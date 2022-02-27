use std::mem;

pub fn run() {
    let mut numbers: Vec<i32> = vec![1, 2, 3, 4];

    // re-assign value
    numbers[2] = 20;

    // add onto vectors
    numbers.push(5);
    numbers.push(6);

    // pop off last value
    numbers.pop();

    println!("{:?}", numbers);

    // get single value
    println!("Single value: {}", numbers[0]);

    // get vector length
    println!("Vector length: {}", numbers.len());

    // vectore are stack allocated
    println!("Vector occupies {} bytes", mem::size_of_val(&numbers));

    // get slice
    let slice: &[i32] = &numbers[0..2];
    println!("Slice: {:?}", slice);

    // loop through vectors values
    for x in numbers.iter() {
        println!("Number: {}", x);
    }

    // loop and mutate values
    for x in numbers.iter_mut() {
        *x *= 2;
    }
    println!("Number Vec: {:?}", numbers);
}
