// 버튼을 HTML <-> 자바스크립트
const btn=document.querySelector("#button");

btn.addEventListener("click",responseText) //파라미터가 2개 첫 번째는 행위, 두 번째는 함수이름

function responseText(){
    const message=document.querySelector("#message")
    message.innerHTML="눌렀으니 난 화 낼거닥 !!"
}