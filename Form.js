$('#form').click((e)=>{
    e.preventDefault()
    
    const form =$(".form")
$('#form').css({"transition":'all 2s',"transform":"translate(-100%,0)"})


$('#form2').css({"transition":'all 2s',"transform":"translate(100%,0)"})
// $(e.target).css({"-webkit-transform":'translate(-100,0)'})
console.log($('#form2'))

// $('#form2').animate({
//     right:'0',
// },1000)
})