let inputNum = prompt("숫자를 입력해주세요");

let num = Math.random() * 10 + 1;
num = Math.floor(num);

console.log(num);

function changeColor() {
  document.querySelectorAll("div")[num - 1].setAttribute("class", "selected");
  t = setTimeout(timeFunc(), 2000);
  function timeFunc() {
    if (inputNum == num) {
      alert("당첨입니다");
    } else {
      alert("꽝");
    }
  }
}

function reset() {
  document.querySelectorAll("div")[num - 1].removeAttribute("class");
}
