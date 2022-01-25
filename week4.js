const sendBtn = document.querySelector("#send")
sendBtn.addEventListener('click', ()=>{
    emailjs.init("user_C83AwK4IHOJy2XHAwAxSd") 

emailjs.init("user_C83AwK4IHOJy2XHAwAxSd") //emailjs 이 계정을 사용 할 거에요

// 1. HTML 폼에서 이름과 메시지 내용을 가져온다.
const name_ =document.querySelector("#name").value
const message_ = document.querySelector("#message").value
const templateParams = {name : name_ , message : message_ } // JSON

// 2. 가져온 데이터를 기반으로 이메일을 전송한다.
// 3. 메시지가 제대로 전송됐는지 확인하기 then(전송이 성공했을 때 실행될 함수 이름, 전송이 실패했을 때 실행될 함수 이름)
// 동작원리 : emailjs야 이 데이터로 얘한테 메시지 보내줘 ~ (요청) emailjs서버 -> emailjs : 오키 성공 ! or 읭.. 실패 ! (응답) 브라우저에게
emailjs.send("eunblue","template_ahickj9",templateParams).then(sendSuccess, SendFail)
})

function sendSuccess(){
    alert("메시지가 성공적으로 보내졌어요!")
}

function SendFail(error){
    alert(`${error.text} 이러한 이유 때문에 실패했어요`)
}