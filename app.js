let btns = document.querySelectorAll("button");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

//화면 전체 이벤트는 document
document.addEventListener("keydown", keyClick);

function keyClick(event) {
  const key = event.key;
  drumKit(key);
}

function handleClick(event) {
  const key = event.target.textContent;
  drumKit(key);
}

//중복코드
function drumKit(key) {
  console.log(key);
  let audio = null;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      return;
  }
  //key로 버튼을 선택해서 클래스를 넣자
  const btn = document.querySelector("." + key);
  btn.classList.add("pressed"); //클래스 추가하기
  setTimeout(function () {
    btn.classList.remove("pressed"); //클래스 삭제하기
  }, 200);
}
