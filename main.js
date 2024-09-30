const display  = document.getElementById("display"); //Egy display nevű változóban eltároljuk a display id-jű input adatait.

function appendToDisplay(input){ //Függvény egy bemeneti paramétert vár, az input értéket szeretnénk hozzáfűzni a display-hez
   if(display.value == 'Error'){
    display.value = '';
   }
    display.value += input; //A display értékéhez hozzácsatolja az inputot. Például: display.value = 5,input = "+", input = 7 --> 5 + 7
}

function clearDisplay(){//Ez a függvény a C, azaz Clear gombhoz van hozzárendelve
    display.value = "";//Amikor a C gomb lenyomásra kerül a display értéke egy üres karakter, azaz semmi lesz.
}

function calculate(){//A számológép számolásáért felelős függvény
    
    if(display.value == '√'){
        try{display.value = Math.sqrt(display.value)
    }
    catch(error){
        display.value = "Error";
    }

    if(display.value == 'x^2'){
        try{display.value = Math.pow(display.value, 2)
    }
    catch(error){
        display.value = "Error";
    }
}
}  
    try{display.value = eval(display.value);//Az Eval egy beépített operátor ami kiszámolja (esetünkben) az display-en lévő számokat, ez az operátor képes felismerni az számtani jeleket.
                                            //Ez az egész egy try-catch függvényben van. Ez megpróbálja elvégezni a műveletet(try) és Ha valamilyen probléma van, például nem fejeztük be a műveletet (3 - ) akkor azt a hibát elkapja(catch) 
                                            //és a display értéke 'Error' lesz.

    }catch(error){
        display.value = "Error";
    }


    if(display.value.includes( '√')){
        try{display.value = Math.sqrt(display.value)
    }
    catch(error){
        display.value = "Error";
    }

    if(display.value.includes( 'x^2')){
        try{display.value = Math.pow(display.value, 2)
    }
    catch(error){
        display.value = "Error";
    }
}
}
}