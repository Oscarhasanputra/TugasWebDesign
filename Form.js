var bg=1
var windowResized=false;
window.addEventListener('resize',()=>{
    
    const width=document.body.clientWidth
    // console.log(width)   
    windowResized=width<=995?(windowResized==false?true:false):(windowResized==true?true:false)
    console.log(windowResized)
    if(windowResized){
        console.log("resized")
    const form =$(".form-animative")
    form.map((index,elem)=>{
        $(elem).css({"transition":'none',"transform":`translate(0,0)`})
    })
    }
})
$('#animateBtn').click((e)=>{
    e.preventDefault()
    const width=document.body.clientWidth
    const form =$(".form-animative")
    form.map((index,elem)=>{
        const translate=$(elem).css("transform")
        let x=0;
        
        if(width>995){
            
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
    bg=bg==2?1:2
    $('#form2').css({"background-image":`url('gambar${bg}.jpg')`})
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
  
    
// $('#form').css({"transition":'all 2s',"transform":"translate(-100%,0)"})


// $('#form2').css({"transition":'all 2s',"transform":"translate(100%,0)"})
// $(e.target).css({"-webkit-transform":'translate(-100,0)'})
// console.log($('#form2'))

})