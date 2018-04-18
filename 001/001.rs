// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

fn main() {
    let sum = (1..1000)
        .into_iter()
        .filter(is_multiple_of_3_or_5)
        .fold(0, sum);

    println!("{}", sum);
}

fn is_multiple_of<'a, 'b>(n: & 'a u32, m: & 'b u32) -> bool {
    return n % m == 0;
}

fn is_multiple_of_3<'a>(n: & 'a u32) -> bool {
    return is_multiple_of(n, &3);
}

fn is_multiple_of_5<'a>(n: & 'a u32) -> bool {
    return is_multiple_of(n, &5);
}

fn is_multiple_of_3_or_5<'a>(n: & 'a u32) -> bool {
    return is_multiple_of_3(n) || is_multiple_of_5(n);
}

fn sum(acc: u32, n: u32) -> u32 {
    return acc + n;
}
