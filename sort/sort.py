from operator import itemgetter

L=[[9, 1, 9], [0, 2, 10], [4, 4, 100]]
new_value = sorted(L, key=itemgetter(0))
print(new_value)

