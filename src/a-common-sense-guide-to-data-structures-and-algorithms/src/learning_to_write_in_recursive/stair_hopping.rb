#---
# Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit https://pragprog.com/titles/jwdsal2 for more book information.
#---
def number_of_paths(n)
  return 0 if n < 0
  return 1 if n == 1 || n == 0
  return number_of_paths(n - 1) + number_of_paths(n - 2) +
    number_of_paths(n - 3)
end