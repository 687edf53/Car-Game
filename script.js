

let P1 = document.getElementById("car1")
// q = L & w = R
let run1 = 0

let run2 = 0

let run3 = 0

let run4 = 0

document.onkeydown = (e) => {
  if (e.keyCode === 81) {
    run1 -= 10
    P1.style.transform = `translateX(${run1}px)`
    P1.style.boxShadow = "0 0 50px blue,0 0 100px blue,0 0 150px blue,0 0 200px blue"

  }

  if (e.keyCode === 87) {
    run1 += 10
    P1.style.transform = `translateX(${run1}px)`
    P1.style.boxShadow = "0 0 50px blue,0 0 100px blue,0 0 150px blue, 0 0 200px blue"

  }

  if (P1.style.transform == "translateX(1190px)") {
    document.getElementById("winner").style.opacity = "1"
    document.getElementById("W-name").innerHTML = "Blue"
    document.getElementById("W-name").style.color = "#00f"
    document.getElementById("again").style.opacity = "1"
  }
}

let P2 = document.getElementById("car2")
// LA = L & LR = R

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    run2 -= 10
    P2.style.transform = `translateX(${run2}px)`
    P2.style.boxShadow = "0 0 50px yellow,0 0 100px yellow,0 0 150px yellow,0 0 200px yellow"
  }

  if (e.keyCode === 39) {
    run2 += 10
    P2.style.transform = `translateX(${run2}px)`
    P2.style.boxShadow = "0 0 50px yellow,0 0 100px yellow,0 0 150px yellow,0 0 200px yellow"
  }
  if (P2.style.transform == "translateX(1190px)") {
    document.getElementById("winner").style.opacity = "1"
    document.getElementById("W-name").innerHTML = "Yellow"
    document.getElementById("W-name").style.color = "#ff0"
    document.getElementById("again").style.opacity = "1"
  }
})

let P3 = document.getElementById("car3")
// z = L & x = R

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 90) {
    run3 -= 10
    P3.style.transform = `translateX(${run3}px)`
    P3.style.boxShadow = "0 0 50px red,0 0 100px red,150px red, 0 0 200px red"

  }

  if (e.keyCode === 88) {
    run3 += 10
    P3.style.transform = `translateX(${run3}px)`
    P3.style.boxShadow = "0 0 50px red,0 0 100px red,0 0 150px red, 0 0 200px red"

  }
  if (P3.style.transform == "translateX(1190px)") {
    document.getElementById("winner").style.opacity = "1"
    document.getElementById("W-name").innerHTML = "Red"
    document.getElementById("W-name").style.color = "#f00"
    document.getElementById("again").style.opacity = "1"

  }
})

let P4 = document.getElementById("car4")
// j = L & k = R
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 74) {
    run4 -= 10
    P4.style.transform = `translateX(${run4}px)`
    P4.style.boxShadow = "0 0 50px #0f0,0 0 100px #0f0,0 0 50px #0f0, 0 0 200px #0f0"

  }

  if (e.keyCode === 75) {
    run4 += 10
    P4.style.transform = `translateX(${run4}px)`
    P4.style.boxShadow = "0 0 50px #0f0,0 0 100px #0f0,0 0 150px #0f0, 0 0 200px #0f0"

  }
  if (P4.style.transform == "translateX(1190px)") {
    document.getElementById("winner").style.opacity = "1"
    document.getElementById("W-name").innerHTML = "Green"
    document.getElementById("W-name").style.color = "#0f0"
    document.getElementById("again").style.opacity = "1"
  }
})

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 81) {
    if (P1.style.transform == "translateX(-20px)") {
      P1.style.transform == "translateX(220px)"
    }
  }

})





// again

document.getElementById("again").addEventListener("click", () => {
  location.reload()
})

// if (P1.style.transform == "translateX(1200px)" ||
//     P2.style.transform == "translateX(1200px)" ||
//     P3.style.transform == "translateX(1200px)" ||
//     P4.style.transform == "translateX(1200px)") 
// {


document.addEventListener("keydown", (e) => {
  if (P1.style.transform == "translateX(1200px)") {
    run1 = "hello"
    if (e.keyCode === 81) {
      alert("Finshed")
    }
    if (e.keyCode === 87) {
      alert("Finshed")
    }
    if (e.keyCode === 37) {
      alert("Finshed")
    }
    if (e.keyCode === 39) {
      alert("Finshed")
    }
    if (e.keyCode === 74) {
      alert("Finshed")
    }
    if (e.keyCode === 75) {
      alert("Finshed")
    }
    if (e.keyCode === 90) {
      alert("Finshed")
    }
    if (e.keyCode === 88) {
      alert("Finshed")
    }
    P2.style.transform = `translateX(0px)`
    P3.style.transform = `translateX(0px)`
    P4.style.transform = `translateX(0px)`

  }

  if (P2.style.transform == "translateX(1200px)") {
    run2 = "hello"
    if (e.keyCode === 37) {
      alert("Finshed")
    }
    if (e.keyCode === 39) {
      alert("Finshed")
    }
    if (e.keyCode === 74) {
      alert("Finshed")
    }
    if (e.keyCode === 75) {
      alert("Finshed")
    }
    if (e.keyCode === 81) {
      alert("Finshed")
    }
    if (e.keyCode === 87) {
      alert("Finshed")
    }
    if (e.keyCode === 90) {
      alert("Finshed")
    }
    if (e.keyCode === 88) {
      alert("Finshed")
    }
    P1.style.transform = `translateX(0px)`
    P3.style.transform = `translateX(0px)`
    P4.style.transform = `translateX(0px)`
  }
  if (P3.style.transform == "translateX(1200px)") {
    run3 = "hello"
    if (e.keyCode === 90) {
      alert("Finshed")
    }
    if (e.keyCode === 88) {
      alert("Finshed")
    }
    if (e.keyCode === 37) {
      alert("Finshed")
    }
    if (e.keyCode === 39) {
      alert("Finshed")
    }
    if (e.keyCode === 74) {
      alert("Finshed")
    }
    if (e.keyCode === 75) {
      alert("Finshed")
    }
    if (e.keyCode === 81) {
      alert("Finshed")
    }
    if (e.keyCode === 87) {
      alert("Finshed")
    }
    P1.style.transform = `translateX(0px)`
    P2.style.transform = `translateX(0px)`
    P4.style.transform = `translateX(0px)`


  }
  if (P4.style.transform == "translateX(1200px)") {
    run4 = "hello"
    if (e.keyCode === 74) {
      alert("Finshed")
    }
    if (e.keyCode === 75) {
      alert("Finshed")
    }
    if (e.keyCode === 37) {
      alert("Finshed")
    }
    if (e.keyCode === 39) {
      alert("Finshed")
    }
    if (e.keyCode === 90) {
      alert("Finshed")
    }
    if (e.keyCode === 88) {
      alert("Finshed")
    }
    if (e.keyCode === 81) {
      alert("Finshed")
    }
    if (e.keyCode === 87) {
      alert("Finshed")
    }
    P1.style.transform = `translateX(0px)`
    P2.style.transform = `translateX(0px)`
    P3.style.transform = `translateX(0px)`

  }

})


// Address With Canvas

const canvas = document.getElementById("adress"),
  ctx = canvas.getContext("2d")

let Grd = ctx.createLinearGradient(0, 0, 200, 0)

Grd.addColorStop(0.3, '#0f0');
Grd.addColorStop(0.6, 'yellow');
Grd.addColorStop(0.8, 'orangered');
Grd.addColorStop(1, '#00f');

ctx.shadowColor = 'white';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;


ctx.shadowBlur = 10

ctx.font = "bold 25px Tahoma"
ctx.fillStyle = Grd

ctx.fillText("Car Race", 90, 30)


let C_S = document.querySelector(".start")

let start_btn = document.querySelector(".start-btn")

let H_S = document.querySelector(".hide")

start_btn.onclick = () => {
  C_S.style.display = "none"
  H_S.style.display = "block"
}



window.onkeydown = (e) => {
  if(e.keyCode = 13) {
    start_btn.click()
  }
}



