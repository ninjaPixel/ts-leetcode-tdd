#---
# Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit https://pragprog.com/titles/jwdsal2 for more book information.
#---
STATUS_CODES = {200 => "OK", 301 => "Moved Permanently", 
                401 => "Unauthorized", 404 => "Not Found", 
                500 => "Internal Server Error"}

def status_code_meaning(number)
  return STATUS_CODES[number]
end