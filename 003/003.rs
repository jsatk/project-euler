// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

fn get_all_factors_for(mut n: u64) -> Vec<u64> {
    let mut factors = Vec::new();
    let mut i = 2;
    let mut more_numbers_to_check = i <= n;

    while more_numbers_to_check {
        let mut is_factor = n % i == 0;

        while is_factor {
            factors.push(i);
            n /= i;
            is_factor = n % i == 0;
        }

        i += 1;
        more_numbers_to_check = i <= n;
    }

    return factors;
}

fn get_largest(mut v: Vec<u64>) -> u64 {
    v.sort();
    let tail = v.len() - 1;
    return v[tail];
}

fn main() {
    let big_number = 600_851_475_143;
    let factors = get_all_factors_for(big_number);
    let largest_prime_factor = get_largest(factors);

    println!("Answer: {}", largest_prime_factor);
}
