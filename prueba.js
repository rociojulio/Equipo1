function totalSandwich (base,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
    let total = 0;
        if(base == "pollo"){
            total = 150;
            if(pan == "blanco"){
                total += 70;
                    queso == true ? total += 20: "";
                    tomate == true ? total += 15: "";
                    lechuga == true ? total += 10: "";
                    cebolla == true ? total += 15: "";
                    mayonesa == true ? total += 5: "";
                    mostaza == true ? total += 5: "";

                        return total;
            
        
            }else if(pan == negro){
                total +=60;
            }


        }else if(base == "carne"){
            total = 200;
            if(pan == "blanco"){
                total += 70;
            }

        }
 

    }