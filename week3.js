// const result = document.querySelector("#result")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click", function(){ 
//     try{ // 일단 예외가 나올 법한 녀석을 try 해줘
//         let computeResult=eval(result.value) ////result.value = eval(result.value)와 같음
//         result.value=computeResult // 예외가 나는 경우 : 사용자가 텍스트를 입력할 경우
//     } catch { // catch : 예외가 발생하면 이 아래 코드를 실행해주세요
//         result.value="입력오류"
//     }
// })

const buttons = document.querySelectorAll("#num")
const clearbtn= document.querySelector("#text")
const operators = document.querySelectorAll("#operator")
const valuebtn = document.querySelector("#value")
const equalbtn = document.querySelector("#sum")

equalbtn.addEventListener("click", function() {
    valuebtn.value = eval(valuebtn.value)
})


for(let i=0;i<9;i++){
    buttons[i].addEventListener("click",function(){
        valuebtn.value+=buttons[i].value
    })
}

clearbtn.addEventListener("click",function(){
    valuebtn.value="0"
})

for(let i=0;i<4;i++){
    operators[i].addEventListener("click",function(){
        valuebtn.value+=operators[i].value
    })
}


