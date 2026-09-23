numbers = [1, 2, 3, 4]
for n in numbers:
    if n % 2 == 0:
        numbers.remove(n)  # Bug: Alters the list length during iteration
