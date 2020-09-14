var bg=1
$('#animateBtn').click((e)=>{
    e.preventDefault()
    const form =$(".form-animative")
    form.map((index,elem)=>{
        console.log("aku dulu")
        const translate=$(elem).css("transform")
        const xTrigger=parseInt(translate.split(",")[4])
        const x=xTrigger==0?((index*(-200))+100+"%"):0;
        $(elem).css({"transition":'all 2s',"transform":`translate(${x},0)`})
    })
    bg=bg==2?1:2
    $('#form2').css({"background-image":`url('gambar${bg}.jpg')`})
// $('#form').css({"transition":'all 2s',"transform":"translate(-100%,0)"})


// $('#form2').css({"transition":'all 2s',"transform":"translate(100%,0)"})
// $(e.target).css({"-webkit-transform":'translate(-100,0)'})
console.log($('#form2'))

})