var eldiv=document.getElementById("diva");
var unavez=true;
var cnA="";
var cnB="";
//[3] 1=torre 2=caballo 3=alfil 4=reina 5=rey 6=peon
var piezas=[tBa=[true,1,1,1,1],cBa=[true,2,2,3,1],aBa=[true,2,3,2,1],rBa=[true,2,4,2,1],rBb=[true,2,7,2,1],aBb=[true,2,8,2,1],cBb=[true,2,9,3,1],tBb=[true,1,10,1,1],
pBa=[true,2,1,1,1],pBa=[true,1,2,6,1],pBa=[true,1,3,6,1],pBa=[true,1,4,6,1],pBa=[true,1,7,6,1],pBa=[true,1,8,6,1],pBa=[true,1,9,6,1],pBa=[true,2,10,1,1],
tNa=[true,10,1,1,2],cNa=[true,9,2,3,2],aNa=[true,9,3,2,2],rNa=[true,9,4,2,2],rNb=[true,9,7,2,2],aNb=[true,9,8,2,2],cNb=[true,9,9,3,2],tNb=[true,10,10,1,2],
pNa=[true,9,1,1,2],pNa=[true,10,2,6,2],pNa=[true,10,3,6,2],pNa=[true,10,4,6,2],pNa=[true,10,7,6,2],pNa=[true,10,8,6,2],pNa=[true,10,9,6,2],pNa=[true,9,10,1,2],vacui=[false,0,0,0,0],
unpa=[true,2,5,3,1],unpa=[true,2,6,3,1],unpa=[true,1,5,6,1],unpa=[true,1,6,6,1],unpa=[true,10,5,6,2],unpa=[true,10,6,6,2],unpa=[true,9,5,3,2],unpa=[true,9,6,3,2]];

var mov=1;var turno=1;
var lapieza=32;var equipo=2;
var xan=0,yan=0;
var mover=false,conborr=false;
var colorA="#";
var colorB="#";
var colores=["#13e900","#e6f517","#e40e0a","#0013bd","#000","#fff"];
var colorEa=colores[4];
var colorEb=colores[5];
var resta=1;
//unavez=false;
document.getElementById("pbr").style.color=colorEb;

for(var cr=1;cr<9;cr++){if(cr>4){resta=5;}document.getElementById("cr"+cr).style.backgroundColor=colores[cr-resta];}

function randomAr(aM, bM) {
    do {
        num = Math.random();
        num = num * 10000;
        num = Math.floor(num);
    } while (num > aM || num <= bM);

    return num;
}

function al(){
    //if(unavez){
        if(mov==1){
        colorEb=colores[5];
        colorEa=colores[4];mov++;
        }else{            
        colorEb=colores[4];
        colorEa=colores[5];mov=1;
//        }
        }
elC(randomAr(4,0));
elC(randomAr(8,4));
if(!unavez){todos();}
}
//setInterval("al()",1000);
al();
fun(10,10);

function elC(n){
    //if(unavez){        
        if(n<5){for(var k=1;k<5;k++){document.getElementById("cr"+k).style.backgroundColor=colores[k-1];}
        }else{for(var k=5;k<9;k++){document.getElementById("cr"+k).style.backgroundColor=colores[k-5];}}
    
        switch(n){
            case 1:colorA=colores[n-1];cnA="Verde";document.getElementById("cr1").style.backgroundColor=colorEa;break;
            case 2:colorA=colores[n-1];cnA="Amarillo";document.getElementById("cr2").style.backgroundColor=colorEa;break;
            case 3:colorA=colores[n-1];cnA="Rojo";document.getElementById("cr3").style.backgroundColor=colorEa;break;
            case 4:colorA=colores[n-1];cnA="Azul";document.getElementById("cr4").style.backgroundColor=colorEa;break;
            case 5:colorB=colores[n-5];cnB="Verde";document.getElementById("cr5").style.backgroundColor=colorEb;break;
            case 6:colorB=colores[n-5];cnB="Amarillo";document.getElementById("cr6").style.backgroundColor=colorEb;break;
            case 7:colorB=colores[n-5];cnB="Rojo";document.getElementById("cr7").style.backgroundColor=colorEb;break;
            case 8:colorB=colores[n-5];cnB="Azul";document.getElementById("cr8").style.backgroundColor=colorEb;break;    
        }
    document.getElementById("elpo").textContent=cnA+" vs "+cnB;
        if(n<5){
            for(var i=1;i<5;i++){
                if(i==n){document.getElementById("color"+i).style.backgroundColor=colorA;}
                else{document.getElementById("color"+i).style.backgroundColor=colorEa;}        
            }
        }else{
            for(var i=5;i<9;i++){
                if(i==n){document.getElementById("color"+i).style.backgroundColor=colorB;}
                else{document.getElementById("color"+i).style.backgroundColor=colorEb;}  
            }
        }
    //}
    if(!unavez){todos();}
}
var linx,liny;
function fun(x,y){linx=x;liy=y;
    if(unavez){
        // for(var x=1;x<9;x++){
        // document.getElementById("color"+x).hidden=true;        
        // }
        
        for(var i=1;i<=x;i++){
            eldiv.innerHTML+=("<div class='divB' id='id"+i+"'></div>");
        var otrodiv=document.getElementById("id"+i);        
            for(var e=1;e<=y;e++){                 
                otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='dime("+i+","+e+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");
            }
        }
    unavez=false;todos();
}   
}

function digame(n){
    var nombre="";
    switch(n){
        case 1:nombre="Torre";break;
        case 2:nombre="Caballo";break;
        case 3:nombre="Alfil";break;
        case 4:nombre="Reina";break;
        case 5:nombre="Rey";break;
        case 6:nombre="Peon";break;
    }
    return nombre;
}

function averiguar(x,y){var guarde="";
    for(var i=piezas.length-1;i>=0;i--){
        if(piezas[i][0]){
        if(piezas[i][1]==x&&piezas[i][2]==y){lapieza=i;
            
            if(equipo!=piezas[i][4]){            
            equipo=piezas[i][4];                        
            console.log("equipo "+piezas[i][4]);            
        }            
            guarde=(piezas[i][3]);
        }   }   
    }return digame(guarde);
}

function dime(x,y){var lax=piezas[lapieza][1];var lay=piezas[lapieza][2];    
document.getElementById("elpo").textContent=(averiguar(x,y)+" ("+x+","+y+")");
if(conborr){
 piezas[lapieza][0]=false;borrar();
}
//if(equipo==1&&((piezas[lapieza][3]==6)&&x==((piezas[lapieza][1])+1)&&piezas[lapieza][2]==y)){mover=true;}//peon arriba
//if(equipo==2&&((piezas[lapieza][3]==6)&&x==((piezas[lapieza][1])-1)&&piezas[lapieza][2]==y)){mover=true;}//peon abajo
if(((piezas[lapieza][3]==1)||(piezas[lapieza][3]==4))&&((x==piezas[lapieza][1])||(y==piezas[lapieza][2]))){mover=true;}//torres
if(piezas[lapieza][3]==2){
    if(((x==lax+2)&&((y==lay+1)||(y==lay-1)))||((x==lax-2)&&((y==lay+1)||(y==lay-1)))||((y==lay+2)&&((x==lax+1)||(x==lax-1)))||((y==lay-2)&&((x==lax+1)||(x==lax-1)))){mover=true;}}//caballo
if((piezas[lapieza][3]==3)||(piezas[lapieza][3]==4)){for(var unl=1;unl<8;unl++){
    if(((x==(lax)+unl)&&(y==(lay)+unl))||((x==(lax)-unl)&&(y==(lay)-unl))||((x==(lax)+unl)&&(y==(lay)-unl))||((x==(lax)-unl)&&(y==(lay)+unl))){mover=true;}}}//alfil
if((piezas[lapieza][3]==5)||(piezas[lapieza][3]==6)){var unl=1;
    if(((((x==lax+1)||(x==lax-1))&&(y==lay))||((y==lay+1)||((y==lay-1))&&(x==lax)))||(((x==(lax)+unl)&&(y==(lay)+unl))||((x==(lax)-unl)&&(y==(lay)-unl))||((x==(lax)+unl)&&(y==(lay)-unl))||((x==(lax)-unl)&&(y==(lay)+unl)))){mover=true;}}//rey}
//if(piezas[lapieza][3]==4){mover=true;}//reina la reina puede ser una suma de movimientos de alfil + torre

if(mover){
    piezas[lapieza][1]=x;
    piezas[lapieza][2]=y;
    mover=false;
}

//console.log(lapieza);
// if((turno==1||turno==2)&&equipo==2){
// piezas[lapieza][1]=x;
// piezas[lapieza][2]=y;turno++;
// }
// if((turno==3||turno==4)&&equipo==1){    
//     turno++;
//     }
//     console.log(turno);
// if(turno==5){
//     turno=1;
// }
todos();
document.getElementById("elpo").textContent=(averiguar(x,y)+" ("+x+","+y+")")
//funcion con el guarde segun su numero de tipo de pieza--
//eligo la pieza 1 muevo la pieza , siguiente turno
//eligo la pieza 1er equipo puede comer piezas del equipo 2 si se elige una del mismo equipo cambian de posicion(?)
}

function todos(){
    for(var y=1;y<11;y++){
        for(var x=1;x<11;x++){  
            var otrodivmas=document.getElementById(y+"a"+x);
            otrodivmas.style.boxShadow=("0px 0px 0px "+colorA+",-0px -0px 0px "+colorA+",-0px 0px 0px "+colorA+",0px -0px 0px "+colorA+"");
            var otrodivmas=document.getElementById(y+"b"+x);
            otrodivmas.style.boxShadow=("0px 0px 0px "+colorA+",-0px -0px 0px "+colorA+",-0px 0px 0px "+colorA+",0px -0px 0px "+colorA+"");
            
            if(y%2==0){
                if(x%2==0){
                    var otrodivmas=document.getElementById(y+"id"+x);
                    otrodivmas.style.backgroundColor=colorEb;
                    var otrodivmas=document.getElementById(y+"a"+x);
                    otrodivmas.style.backgroundColor=colorEb;
                    var otrodivmas=document.getElementById(y+"b"+x);
                    otrodivmas.style.backgroundColor=colorEb;
                    
                }else{var otrodivmas=document.getElementById(y+"id"+x);
                    otrodivmas.style.backgroundColor=colorEa;
                    var otrodivmas=document.getElementById(y+"a"+x);
                    otrodivmas.style.backgroundColor=colorEa;
                    var otrodivmas=document.getElementById(y+"b"+x);
                    otrodivmas.style.backgroundColor=colorEa;
            }
            }else{
                if(x%2==0){var otrodivmas=document.getElementById(y+"id"+x);
                otrodivmas.style.backgroundColor=colorEa;
                var otrodivmas=document.getElementById(y+"a"+x);
                otrodivmas.style.backgroundColor=colorEa;
                var otrodivmas=document.getElementById(y+"b"+x);
                otrodivmas.style.backgroundColor=colorEa;}
                else{ var otrodivmas=document.getElementById(y+"id"+x);
                otrodivmas.style.backgroundColor=colorEb;
                var otrodivmas=document.getElementById(y+"a"+x);
                otrodivmas.style.backgroundColor=colorEb;
                var otrodivmas=document.getElementById(y+"b"+x);
                otrodivmas.style.backgroundColor=colorEb;
                }
            }              
            decime(y,x);
        }    
    }
}

function cambio(y,x,z,a){

    var elp=document.getElementById(y+"b"+x);
    var elpe=document.getElementById(y+"a"+x);

    if(a==1){
    elpe.style.backgroundColor=colorEa;
    elpe.style.boxShadow=("2px 2px 5px "+colorA+",-2px -2px 5px "+colorA+",-2px 2px 5px "+colorA+",2px -2px 5px "+colorA+"");
    elp.style.backgroundColor=colorA;           
    }else{
    elpe.style.backgroundColor=colorEb;
    elpe.style.boxShadow=("2px 2px 5px "+colorB+",-2px -2px 5px "+colorB+",-2px 2px 5px "+colorB+",2px -2px 5px "+colorB+"");
    elp.style.backgroundColor=colorB;
    }

    
switch(z){
    case 1:        
        elp.style.borderRadius="0px 0px 0px 0px";        
        elpe.style.borderRadius="0px 0px 0px 0px";
        break;//torre
    case 2:        
        elp.style.borderRadius="20px 0px 0px 0px";        
        elpe.style.borderRadius="20px 0px 0px 0px";
        break;//caballo
    case 3:        
        elp.style.borderRadius="0px 10px 0px 10px";        
        elpe.style.borderRadius="0px 10px 0px 10px";
        break;//alfil
    case 4:        
        elp.style.borderRadius="0px 10px 10px 0px";
        elpe.style.borderRadius="0px 10px 10px 0px";
        break;//reina
    case 5:
        elp.style.borderRadius="10px 0px 0px 10px";
        elpe.style.borderRadius="10px 0px 0px 10px";
        break;//rey
    case 6:
        elp.style.borderRadius="24px";
        elpe.style.borderRadius="24px"; 
        break;//peon
    }
}

function decime(x,y){
    for(var i=piezas.length-1;i>=0;i--){
        if(piezas[i][0]){
            if(piezas[i][1]==x&&piezas[i][2]==y){
                cambio(x,y,piezas[i][3],piezas[i][4]);
            }
        }
    }
}

function borrar(){
    if(!conborr){
        conborr=true;
        document.getElementById("pbr").style.color="#000";
    }else{
        conborr=false;
        document.getElementById("pbr").style.color="#fff";
    }
}

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(n){
	var coolor = "";
	for(var i=0;i<n;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
