
function tabuada()
{
    
    for(let valor = 1; valor <= 10;valor++)
    {
        let resultado = "";

        for( let valor2 = 1; valor2 <= 10;valor2++)
       { 
         resultado += `${valor} X ${valor2} = ${(valor * valor2)} \n`; 
           
          document.querySelector(`.t${valor}`).innerText = resultado;  
       } 
                 
    }
            
}   
    
    



