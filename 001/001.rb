# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.
def is_multiple_of(multiple, n)
  n % multiple == 0
end

def is_multiple_of_3_or_5(n)
  is_multiple_of(3, n) || is_multiple_of(5, n)
end

multiples = (1..999).select do |n|
  is_multiple_of_3_or_5(n)
end

puts multiples.sum # `Array.sum` is new in Ruby 2.4
