from math import sqrt
def premier(x):
    for i in range(2, (x//2)+1  ):
        if( x % i == 0 ):
            return False
    return True
def lisse(n):
    x=1
    for i in range( 2 , (n//2) +1):
        if( n % i == 0 and premier(i) ):
            x=i
    return ( x <= sqrt(n) )