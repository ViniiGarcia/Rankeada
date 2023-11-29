let ranking = setRanking(100, 1)

function setRanking(victories, defeats){
	let balance = victories - defeats
    return balance
}

let level = ranking

	if (level <= 10){
    console.log ("Nivel Ferro")
    }
    else{
    	if(level <=20){
        console.log("Nivel Bronze")
        }
        else{
        	if(level <=50){
            console.log("Nivel Prata")
            }
            else{
            	if(level <=80){
                console.log("Nivel Ouro")
                }
                else{
                	if(level <=90){
                    console.log("Nivel Diamante")
                    }
                    else{
                    	if(level <=100){
                        console.log("Nivel Lendario")
                        }
                        else{
                        	if(level >100){
                            console.log("IMORTAL")
                            }
                            }
                        }
                    }
                }
            }
        }
    