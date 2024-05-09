const boton = $(".boton");
const operacion = $(".operacion");
const resultado = $(".resultado");
const C = $(".C");
const igual = $(".igual");

C.click(
    function(){
        operacion.html('')
    }
)

boton.click(
    function(){
        operacion.append($(this).text().trim())
        console.log($(this).text().trim())
    }
)

igual.click(
    function(){
        resultado.html(eval(operacion.html()))
    }
)



