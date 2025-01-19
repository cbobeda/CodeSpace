from random import *
def randomunit(loop):
    unit = [i*2 for i in range(1, 11)]
    for i in range(loop):
        r = randint(0, 9)
        if r > 5:
            r = randint(0, 9)
        print(f'<div class="cell size-{unit[r]}"></div>')

def randomcolor(nb = 1):
    color = ('FrenchBriste', 'MetallicSunBurst', 'DarkCamel', 'LightCamel', 'EarthYellow', 'SunRay', 'DarkMaxYellowRed', 'LightMaxYellowRed')
    for i in range(nb):
        r = randint(0, 7)
        print(color[r])

def randomset():
    for i in range(20):
        r = 0
        while r == 0:
            r = randint(-10, 10)*20
        print(f".row:nth-child({i+1}) " + "{" + f"--delay: {i+1}; --offset: {r}px" + "}")

for i in range(4):
    randomunit(12)
    print()