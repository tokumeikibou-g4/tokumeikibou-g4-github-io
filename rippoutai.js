var cubes = [
  ["fff", "fff", "fff", "fff", "fff", "fff", "fff", "fff", "fff"],
  ["f00", "f00", "f00", "f00", "f00", "f00", "f00", "f00", "f00"],
  ["0f0", "0f0", "0f0", "0f0", "0f0", "0f0", "0f0", "0f0", "0f0"],
  ["fa0", "fa0", "fa0", "fa0", "fa0", "fa0", "fa0", "fa0", "fa0"],
  ["00f", "00f", "00f", "00f", "00f", "00f", "00f", "00f", "00f"],
  ["ff0", "ff0", "ff0", "ff0", "ff0", "ff0", "ff0", "ff0", "ff0"]
];
const initial = cubes.map(face => [...face]);
var record = "";

function kaiten1(){
  const old = cubes.map(face => [...face]);
  for (let i = 0; i < 3; i++){
    cubes[0][i] = old[4][i]
    cubes[2][i] = old[0][i]
    cubes[5][i] = old[2][i]
    cubes[4][i] = old[5][i]
  }
  
  cubes[1][0] = old[1][2]
  cubes[1][1] = old[1][5]
  cubes[1][2] = old[1][8]
  cubes[1][3] = old[1][1]
  cubes[1][5] = old[1][7]
  cubes[1][6] = old[1][0]
  cubes[1][7] = old[1][3]
  cubes[1][8] = old[1][6]
}

function kaiten2(){
  const old = cubes.map(face => [...face]);
  for (let i = 3; i < 6; i++){
    cubes[0][i] = old[4][i]
    cubes[2][i] = old[0][i]
    cubes[5][i] = old[2][i]
    cubes[4][i] = old[5][i]
  }
}
function kaiten3(){
  const old = cubes.map(face => [...face]);
  for (let i = 6; i < 9; i++){
    cubes[0][i] = old[4][i];
    cubes[2][i] = old[0][i];
    cubes[5][i] = old[2][i];
    cubes[4][i] = old[5][i];
  };

  cubes[3][0] = old[3][2]
  cubes[3][1] = old[3][5]
  cubes[3][2] = old[3][8]
  cubes[3][3] = old[3][1]
  cubes[3][5] = old[3][7]
  cubes[3][6] = old[3][0]
  cubes[3][7] = old[3][3]
  cubes[3][8] = old[3][6]
}
function kaiten4(){
  const old = cubes.map(face => [...face]);
  cubes[0][2] = old[1][2];
  cubes[0][5] = old[1][5];
  cubes[0][8] = old[1][8];
  cubes[1][2] = old[5][6];
  cubes[1][5] = old[5][3];
  cubes[1][8] = old[5][0];
  cubes[5][6] = old[3][8];
  cubes[5][3] = old[3][5];
  cubes[5][0] = old[3][2];
  cubes[3][8] = old[0][2];
  cubes[3][5] = old[0][5];
  cubes[3][2] = old[0][8];

  cubes[2][0] = old[2][2]
  cubes[2][1] = old[2][5]
  cubes[2][2] = old[2][8]
  cubes[2][3] = old[2][1]
  cubes[2][5] = old[2][7]
  cubes[2][6] = old[2][0]
  cubes[2][7] = old[2][3]
  cubes[2][8] = old[2][6]
}
function kaiten5(){
  const old = cubes.map(face => [...face]);
  cubes[0][1] = old[1][1]
  cubes[0][4] = old[1][4]
  cubes[0][7] = old[1][7]
  cubes[1][1] = old[5][7]
  cubes[1][4] = old[5][4]
  cubes[1][7] = old[5][1]
  cubes[5][1] = old[3][1]
  cubes[5][4] = old[3][4]
  cubes[5][7] = old[3][7]
  cubes[3][1] = old[0][7]
  cubes[3][4] = old[0][4]
  cubes[3][7] = old[0][1]
}
function kaiten6(){
  const old = cubes.map(face => [...face]);
  cubes[0][0] = old[1][0]
  cubes[0][3] = old[1][3]
  cubes[0][6] = old[1][6]
  cubes[1][0] = old[5][8]
  cubes[1][3] = old[5][5]
  cubes[1][6] = old[5][2]
  cubes[5][8] = old[3][6]
  cubes[5][5] = old[3][3]
  cubes[5][2] = old[3][0]
  cubes[3][6] = old[0][0]
  cubes[3][3] = old[0][3]
  cubes[3][0] = old[0][6]

  cubes[4][0] = old[4][6]
  cubes[4][1] = old[4][3]
  cubes[4][2] = old[4][0]
  cubes[4][3] = old[4][7]
  cubes[4][5] = old[4][1]
  cubes[4][6] = old[4][8]
  cubes[4][7] = old[4][5]
  cubes[4][8] = old[4][2]
}
function kaiten7(){
  const old = cubes.map(face => [...face]);
  cubes[1][6] = old[4][8]
  cubes[1][7] = old[4][5]
  cubes[1][8] = old[4][2]
  cubes[4][8] = old[3][8]
  cubes[4][5] = old[3][7]
  cubes[4][2] = old[3][6]
  cubes[3][6] = old[2][6]
  cubes[3][7] = old[2][3]
  cubes[3][8] = old[2][0]
  cubes[2][0] = old[1][6]
  cubes[2][3] = old[1][7]
  cubes[2][6] = old[1][8]
  
  cubes[0][0] = old[0][6]
  cubes[0][1] = old[0][3]
  cubes[0][2] = old[0][0]
  cubes[0][3] = old[0][7]
  cubes[0][5] = old[0][1]
  cubes[0][6] = old[0][8]
  cubes[0][7] = old[0][5]
  cubes[0][8] = old[0][2]
}
function kaiten8(){
  const old = cubes.map(face => [...face]);
  cubes[1][3] = old[4][7]
  cubes[1][4] = old[4][4]
  cubes[1][5] = old[4][1]
  cubes[4][7] = old[3][5]
  cubes[4][4] = old[3][4]
  cubes[4][1] = old[3][3]
  cubes[3][5] = old[2][1]
  cubes[3][4] = old[2][4]
  cubes[3][3] = old[2][7]
  cubes[2][1] = old[1][3]
  cubes[2][4] = old[1][4]
  cubes[2][7] = old[1][5]
}
function kaiten9(){
  const old = cubes.map(face => [...face]);
  cubes[1][0] = old[4][8]
  cubes[1][1] = old[4][5]
  cubes[1][2] = old[4][2]
  cubes[4][8] = old[3][2]
  cubes[4][5] = old[3][1]
  cubes[4][2] = old[3][0]
  cubes[3][2] = old[2][2]
  cubes[3][1] = old[2][5]
  cubes[3][0] = old[2][8]
  cubes[2][2] = old[1][0]
  cubes[2][5] = old[1][1]
  cubes[2][8] = old[1][2]

  cubes[5][0] = old[5][2]
  cubes[5][1] = old[5][5]
  cubes[5][2] = old[5][8]
  cubes[5][3] = old[5][1]
  cubes[5][5] = old[5][7]
  cubes[5][6] = old[5][0]
  cubes[5][7] = old[5][3]
  cubes[5][8] = old[5][6]
}

function kaiten0(){
  kaiten4();
  kaiten5();
  kaiten6();
}

const functions = [kaiten1, kaiten2, kaiten3, kaiten4, kaiten5, kaiten6, kaiten7, kaiten8, kaiten9]

function start(){
  var startcondition = [];
  for (let i = 0; i < 100; i++){
    var randomint  = Math.floor(Math.random() * 9)
    functions[randomint]();
    startcondition.push(randomint)
    }
  console.log(startcondition)
  updatefaces()
}

const faces = [
  document.getElementById("cube1"),
  document.getElementById("cube2"),
  document.getElementById("cube3"),
  document.getElementById("cube4"),
  document.getElementById("cube5"),
  document.getElementById("cube6"),
  document.getElementById("cube7"),
  document.getElementById("cube8"),
  document.getElementById("cube9")
]
function updatefaces(){
  for(let i = 0; i < 9; i++){
    faces[i].style.background = "#" +  cubes[0][i]
  }
}

document.getElementById("button1").addEventListener("click", () => {
  kaiten1()
  updatefaces()
  record += "a"
  check()
})
document.getElementById("cube1").addEventListener("click", () => {
  kaiten1()
  updatefaces()
  record += "a"
  check()
})
document.getElementById("cube2").addEventListener("click", () => {
  kaiten1()
  updatefaces()
  record += "a"
  check()
})
document.getElementById("cube3").addEventListener("click", () => {
  kaiten1()
  updatefaces()
  record += "a"
  check()
})
  

document.getElementById("button2").addEventListener("click", () => {
  kaiten2()
  updatefaces()
  record += "b"
  check()
})

document.getElementById("cube4").addEventListener("click", () => {
  kaiten2()
  updatefaces()
  record += "b"
  check()
})
document.getElementById("cube5").addEventListener("click", () => {
  kaiten2()
  updatefaces()
  record += "b"
  check()
})
document.getElementById("cube6").addEventListener("click", () => {
  kaiten2()
  updatefaces()
  record += "b"
  check()
})

document.getElementById("button3").addEventListener("click", () => {
  kaiten0()
  updatefaces()
  record += "c"
  check()
})
document.getElementById("cube7").addEventListener("click", () => {
  kaiten0()
  updatefaces()
  record += "c"
  check()
})
document.getElementById("cube8").addEventListener("click", () => {
  kaiten0()
  updatefaces()
  record += "c"
  check()
})
document.getElementById("cube9").addEventListener("click", () => {
  kaiten0()
  updatefaces()
  record += "c"
  check()
})

function check(){
  if (cubes.toString() == initial.toString()){
    console.log(record)
    document.getElementById("flex1").innerText = startcondition
    document.getElementById("flex1").innerText = record
  }
}

start()