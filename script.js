function press(val) {
  document.getElementById("display").value += val;
}

function calculate() {
  try {
    let result = document.getElementById("display").value
      .replace(/×/g, "*")
      .replace(/÷/g, "/");
    document.getElementById("display").value = eval(result);
  } catch {
    alert("Error");
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}