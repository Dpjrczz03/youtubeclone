for _ in range(int(input())):
    n, x, k, p = map(int, input().split())
    if k == n:
        print(p + x * 10 + (n - x - 1) * 5 + 20)
    elif k > x and k < n:
        print(p + x * 10 + (k - x) * 5)
    elif k <= x:
        print(p + k * 10)
