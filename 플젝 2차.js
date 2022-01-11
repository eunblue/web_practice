// 버튼을 HTML <-> 자바스크립트
const btn=document.querySelector("#button");
let count=0

btn.addEventListener("click",getRadioandResponse) //파라미터가 2개 첫 번째는 행위, 두 번째는 함수이름

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

function getMessageandResponse(){
    const cin=document.querySelector("#cin")
    const message=document.querySelector("#message")
    message.innerHTML=`당신이 입력한건 ${cin.value}군요~!`
}

function getRadioandResponse(){
    // const rdo=document.querySelector("#rdo")
    // const message=document.querySelector("#message")
    // if(rdo.checked){
    //     alert("체크 안됑~~")
    //     rdo.checked=false
    // }
    const rdoBtns=document.querySelectorAll("#rdo") //배열로 들어감
    for(let rdoBtn of rdoBtns){
        if(rdoBtn.checked&&rdoBtn.value=="bad"){
            alert("나빠요!")
            rdoBtn.checked=false
        }
    }
}