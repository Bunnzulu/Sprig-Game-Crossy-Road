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
const Ocar = "o"
const Yellow = "y"
const White = "W"
const Black = "B"
const Wall = "w"
var gameLoop;

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
  [Ocar, bitmap`
0000000000000000
0000000000000000
0000000440000000
0000044444400000
0000447777440000
0000447777440000
0004444444444000
0044444444444400
0044444444444400
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
wBBBoBBw
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
  Collision()
})
onInput("w", () => {
  getFirst(player).y -= 1
  Collision()
})
onInput("a", () => {
  getFirst(player).x -= 1
  Collision()
})
onInput("d", () => {
  getFirst(player).x += 1
  Collision()
})

function Collision() {
  if (tilesWith(car,player).length > 0 || tilesWith(Ocar,player).length > 0) {
     getFirst(player).x = 3
     getFirst(player).y = 6
   };
}


function Move_RedCars(Steps) {
  for (let i = 0; i < getAll(car).length; i++) {
    dcar = getAll(car)[i]
    dcar.x += Steps
    Collision()
    if (dcar.x >= 6) {
      dcar.x = 1
    }
    }}
function Move_GreenCar(Steps) {
    getFirst(Ocar).x -= Steps
    Collision()
    if (getFirst(Ocar).x === 1) {
      getFirst(Ocar).x = 6
    };
};

    
afterInput(() => {
  Collision()
  if (gameLoop === undefined) {
  gameLoop = setInterval(() => {
    Move_RedCars(1);
    Move_GreenCar(1);
    Collision();
  }, 1000);
  }
})