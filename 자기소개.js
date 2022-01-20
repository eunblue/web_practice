const btn=document.querySelector("#button");
btn.addEventListener("click",getRadioandResponse)

function getRadioandResponse(){
    const rdoBtns=document.querySelectorAll("#rdo") //배열로 들어감
    for(let rdoBtn of rdoBtns){
        if(rdoBtn.checked&&rdoBtn.value=="bad"){
            alert("이번 기회에 한 번 접해보세요 !")
            rdoBtn.checked=false
        }
    else if(rdoBtn.checked&&rdoBtn.value=="good"){
        alert("저와 취향이 잘 맞으시네요. 축하드려요 ~~")
        rdoBtn.checked=false
         }
    }
}

function getMessageandResponse(){
    const cin=document.querySelector("#cin")
    const message=document.querySelector("#message")
    message.innerHTML=`당신이 입력한건 ${cin.value}군요~!`
}