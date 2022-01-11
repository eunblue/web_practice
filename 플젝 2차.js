// 버튼을 HTML <-> 자바스크립트
const btn=document.querySelector("#button");
let count=0

btn.addEventListener("click",counter) //파라미터가 2개 첫 번째는 행위, 두 번째는 함수이름

function responseText(){
    const message=document.querySelector("#message")
    message.innerHTML="눌렀으니 난 화 낼거닥 !!"
    message.style.color="red"
    message.style.fontSize="30px"
    setTimeout(remove,3000)
}

function remove(){
    const message=document.querySelector("#message")
    message.innerHTML=""
}

function counter(){
    const message=document.querySelector("#message")
    message.innerHTML=`현재 카운트 수는 ${count++}입니다.` //빽틱
    if(count>=5){
        message.style.color="pink"
    }
}