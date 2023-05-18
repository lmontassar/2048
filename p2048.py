from random import randint
class game:
    matrice = [[0]*4 for i in range(4)]
    def reset():
        game.matrice = [[0]*4 for i in range(4)]
        T = [0] * 4
        for i in range(4):
            T[i] = randint(0,3)
        game.matrice[  0  ][  2]  = 2
        game.matrice[  0  ][  3  ] = 2
    def afficher():
        for i in range(16):
            if( i % 4 == 0):
                print("")
            print(game.matrice[i // 4][ i % 4 ] ,end="")
    def add():
        while True:
            i=randint(0,3)
            j=randint(0,3)
            if( game.matrice[i][j] == 0 ):
                game.matrice[i][j] = randint(1,2) * 2
                break
    def placeEmpty():
        for i in range(16):
            if( game.matrice[i//4][i%4] == 0 ):
                return True
        return False
    def moveRightToLeft():
        ok = 0
        for i in range(4):
            for j in range(1,4):
                if(game.matrice[i][j] != 0):
                    k1=j-1
                    k2=j
                    while(k1>=0 ):
                        if( game.matrice[i][k1] == 0 ):
                            game.matrice[i][k1] = game.matrice[i][k2]
                            game.matrice[i][k2] = 0
                            ok = 1
                        elif( game.matrice[i][k1] == game.matrice[i][k2] ):
                            game.matrice[i][k1] *= 2 
                            game.matrice[i][k2] = 0
                            ok = 1
                            break
                        elif( game.matrice[i][k1] != game.matrice[i][k2]):
                            break
                        k2-=1
                        k1-=1
        if(ok == 1):
            if(game.placeEmpty()):
                    game.add()
            else:
                    ok=-1   
        return ok
    def moveLeftToRight():
        ok = 0
        for i in range(4):
            for j in range(2,-1,-1):
                if(game.matrice[i][j] != 0):
                    k1=j+1
                    k2=j
                    while(k1<=3 ):
                        if( game.matrice[i][k1] == 0 ):
                            game.matrice[i][k1] = game.matrice[i][k2]
                            game.matrice[i][k2] = 0
                            ok = 1
                        elif( game.matrice[i][k1] == game.matrice[i][k2] ):
                            game.matrice[i][k1] *= 2 
                            game.matrice[i][k2] = 0
                            ok = 1
                            break
                        elif( game.matrice[i][k1] != game.matrice[i][k2]):
                            break
                        k2+=1
                        k1+=1
        if(ok == 1):
            if(game.placeEmpty()):
                    game.add()
            else:
                    ok=-1
        return ok
    def moveDownToUp():
        ok = 0
        for j in range(4):
            for i in range(1,4):
                if(game.matrice[i][j] != 0):
                    k1=i-1
                    k2=i
                    while(k1>=0 ):
                        if( game.matrice[k1][j] == 0 ):
                            game.matrice[k1][j] = game.matrice[k2][j]
                            game.matrice[k2][j] = 0
                            ok = 1
                        elif( game.matrice[k1][j] == game.matrice[k2][j] ):
                            game.matrice[k1][j] *= 2 
                            game.matrice[k2][j] = 0
                            ok = 1
                            break
                        elif( game.matrice[k1][j] != game.matrice[k2][j]):
                            break
                        k2-=1
                        k1-=1
        if(ok == 1):
            if(game.placeEmpty()):
                    game.add()
            else:
                    ok=-1   
        return ok
    def moveUpToDown():
        ok = 0
        for j in range(4):
            for i in range(2,-1,-1):
                if(game.matrice[i][j] != 0):
                    k1=i+1
                    k2=i
                    while(k1<=3 ):
                        if( game.matrice[k1][j] == 0 ):
                            game.matrice[k1][j] = game.matrice[k2][j]
                            game.matrice[k2][j] = 0
                            ok = 1
                        elif( game.matrice[k1][j] == game.matrice[k2][j] ):
                            game.matrice[k1][j] *= 2 
                            game.matrice[k2][j] = 0
                            ok = 1
                            break
                        elif( game.matrice[k1][j] != game.matrice[k2][j]):
                            break
                        k2+=1
                        k1+=1
        if(ok == 1):
            if(game.placeEmpty()):
                    game.add()
            else:
                    ok=-1   
        return ok