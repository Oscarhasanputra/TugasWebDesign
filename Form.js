var bg=24
var windowResized=false;
document.body.onload=()=>{
    const width=document.body.clientWidth
    windowResized=width<=991
}
const saving=()=>{
    const Values=$('.field')
    const formData = $($('form#here')[0]).serializeArray()
    for(let i=0;i<formData.length;i++){
        console.log(formData[i])
        if(formData[i].value==null || formData[i].value ==''){
            alert("Form harus diisi dengan lengkap")
            return;
        }
        Values[i].innerText=formData[i].value
    }
    animating()
}
window.addEventListener('resize',()=>{
    const width=document.body.clientWidth
    // console.log(width)   
    const isResized=width<=991?!windowResized:windowResized
    
    if(isResized){
    const form =$(".form-animative")
    form.map((index,elem)=>{
        let translate=$(elem).css("transform")
        let translateStr=translate
        let i=4
        while(i<=5){
            const translateChanged=parseInt(translate.split(",")[i])
            // console.log(translateChanged)
            if(translateChanged!=0) break;
            else if(i==5) i=-2;//i=-2+1=-1=> false
            i++;
        }
        if(i>=4){
            let matrix=translate.split(",")
                translateStr=`${matrix[i].indexOf("-")>-1?(i==4?"translate(0,-100%)":"translate(-100%,0)"):(i==4?"translate(0,100%)":"translate(100%,0)")}`
               
        }
        $(elem).css({"transition":'none',"transform":translateStr})
        windowResized=width<=991?true:false
    })
    }
})
const animating=()=>{
    const width=document.body.clientWidth
    const form =$(".form-animative")
    form.map((index,elem)=>{
        const translate=$(elem).css("transform")
        let x=0;
        if(width>991){
            
                 const xTrigger=parseInt(translate.split(",")[4])
                x=xTrigger==0?((index*(-200))+100+"%"):0;
                $(elem).css({"transition":'all 2s',"transform":`translate(${x},0)`})
        }
           
        else {
            const xTrigger=parseInt(translate.split(",")[5])
            x=xTrigger==0?((index*(-200))+100):0;
            $(elem).css({"transition":'all 2s',"transform":`translate(0,${x}%)`})
        }

    })
    bg=bg==24?23:24
    $('#form2').css({"background-image":`url('http://34.87.122.135/wd/G${bg}.png')`})
    const targetChanged=$(".formtest")
    setTimeout(()=>{
        targetChanged.map((index,elem)=>{
            const classStr=elem.className
            const isFound=classStr.indexOf("d-none")
            if(isFound>=0){
                $(elem).removeClass("d-none")
            }else{
                $(elem).addClass("d-none")
            }
        })
    },600)
  

}