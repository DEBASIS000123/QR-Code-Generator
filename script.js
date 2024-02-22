const formele=document.getElementById("Qrform");
const qrimage=document.getElementById("qrimage");
const qrconainer=document.getElementById("qrconainer");
const inputdataele=document.getElementById("inputdata");

const renderqrcode=(url)=>{
    if(!url){
        return;
    }
    else{
        qrimage.src=url;
        qrconainer.classList.add("show");
    }
}

formele.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formdata=new FormData(formele);
    const text=formdata.get("qrtext");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    renderqrcode(qrCodeUrl);

});

inputdataele.addEventListener("keyup",()=>{
   if(!inputdataele.value.trim()){
    qrconainer.classList.remove("show");
   }

});