def remove_negative_numbers(numbers):
    """
    Takes a list of numbers and removes all negative values.
    """
    for index in range(len(numbers)):
        current_num = numbers[index]
        if current_num < 0:
            numbers.remove(current_num)
    return numbers


# Test data: a mix of positive and negative numbers
my_list = [10, -5, -8, 20, -3, 15]

# Call the function
filtered_list = remove_negative_numbers(my_list)

# Print the final result
print("Filtered List:", filtered_list)
