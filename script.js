let xs = [], t = 0
for (var i = 0; i <= 230; i++) {
  xs.push(i)
}

function statSin(id, pos) {
  document.getElementById(id).setAttribute("d", generatePath(pos))
}

function animate() {
  document.getElementById("wave--delicious").setAttribute("d", generatePath(297))
  document.getElementById("wave--weight").setAttribute("d", generatePath(416))
  document.getElementById("wave--muscle").setAttribute("d", generatePath(450))
  document.getElementById("wave--health").setAttribute("d", generatePath(559))
  t += 0.3
  requestAnimationFrame(animate)
}

function generatePath(pos) {
  let points = xs.map(x => {
    let y = pos + 5 * Math.sin((x + t) / 5)
    return [x + 347, y]
  })
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  return path;
}

animate()
statSin("wave2", 330);
statSin("wave4", 370);
statSin("wave6", 500);
