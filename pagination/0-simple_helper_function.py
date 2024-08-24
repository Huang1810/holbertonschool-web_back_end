#!/usr/bin/env python3
"""
Main file
"""

def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple containing a start index and an end index corresponding to the
    range of indexes to return in a list for the given pagination parameters.
    
    Parameters:
    - page (int): The current page number (1-indexed).
    - page_size (int): The number of items per page.

    Returns:
    - tuple: A tuple containing the start index and the end index.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index


if __name__ == "__main__":
    res = index_range(1, 7)
    print(type(res))
    print(res)

    res = index_range(page=3, page_size=15)
    print(type(res))
    print(res)
