// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.


function totalAPagar(vehiculo,litrosConsumidos){
    let pagar = 0;
   
        if(vehiculo=="carro"){
            
            if(litrosConsumidos<25){
                return pagar = 86*litrosConsumidos+50
            }else{
                return pagar = 86*litrosConsumidos+25
            }
        }else if(vehiculo=="moto"){
            
            if(litrosConsumidos<25){
               return pagar = 70*litrosConsumidos+50
            }
            else{
               return pagar = 70*litrosConsumidos+25
            }
        }else if(vehiculo=="autobus"){
            if(litrosConsumidos<25){
                return pagar = 55*litrosConsumidos+50
            }
            else{
                return pagar = 55*litrosConsumidos+25
            }

        }
}

console.log("El total a pagar por su vehículo es: $"+totalAPagar("autobus",20));

