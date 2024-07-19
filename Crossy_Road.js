/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Crossy Road
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const car = "c"
const Yellow = "y"
const White = "W"
const Black = "B"
const Wall = "w"

setLegend(
  [ player, bitmap`
................
................
................
................
................
................
......222.......
.....202022.....
....22222333....
...222222222....
..22222222222...
..22222222222...
.....6....6.....
.....6....6.....
.....6....6.....
.....6....6.....` ],
  [car, bitmap`
0000000000000000
0000000000000000
0000000330000000
0000033333300000
0000337777330000
0000337777330000
0003333333333000
0033333333333300
0033333333333300
0000LL0000LL0000
0000LL0000LL0000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
  [Black,bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [Yellow, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [White,bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [Wall,bitmap`
3333333333333333
3333333333333333
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
3333333333333333
3333333333333333
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
3333333333333333
3333333333333333
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
3333333333333333
3333333333333333
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`]
)

setSolids([Wall,car])


setMap(map`
wyyyyyyw
wBcBBBBw
wBBBcBBw
wyyyyyyw
wBBcBBBw
wBBBBBBw
wyyypyyw`)

setPushables({
  [ player ]: []
})
// setInterval
onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})

for (let i = 0; i < getAll(car).length; i++) {
  getAll(car)[i].dx = -1
};

function Move_Cars(Steps) {
  for (let i = 0; i < getAll(car).length; i++) {
    dcar = getAll(car)[i]
    if (dcar.dx === -1) {
      dcar.x -= Steps; // Left
    } else if (dcar.dx === 1) {
      dcar.x += Steps; //Right
    }
    if (tilesWith(car,Wall)) {
      dcar.dx *= -1;
    }
  }
};

    
afterInput(() => {
   if (tilesWith(car,player).length > 0) {
     getFirst(player).x = 3
     getFirst(player).y = 6
   };
  setInterval(() => Move_Cars(5), 10);

})