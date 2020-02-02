// import {transpose} from 'mathjs '
// 1 Representa pieza blanca
//-1 Representa pieza negra

// Turno 0 representa turno de negra
// Turno 1 representa turno de blanca

// TO TRANSPOSE A MATRIX USE _.zip(...MATRIX)
const state={matriz : [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,-1,0,0,0],
    [0,0,0,-1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
    ],
    turno: 0}


const renderGrid = ({matriz,turno}) => {
    const boxSize = 8
    const root = document.getElementById('root');
    for (i=0;i<boxSize;i++){
        const line = document.createElement("div");
        line.style.width = String(boxSize*52)+"px";
        for(j=0;j<boxSize;j++){
            const k = document.createElement("div")
            k.id = `${i}${j}`
            if (matriz[i][j]==1){
                k.style.backgroundColor= "White"
            } else if (matriz[i][j] == -1){
                k.style.backgroundColor = "Black"
            }else{
                k.style.backgroundColor = "Green"
            }
            k.style.width="50px"
            k.style.height="50px"
            k.style.border="1px solid black"
            k.style.float ="left"
            k.setAttribute("onClick", "isValid(this,state)")
            line.appendChild(k)
        }
        root.appendChild(line);
    }
}

function onClick(box){
    console.log(box.id[1])
}

function isValid(box, {matriz, turno}){
    let hor = false, ver = false, diag = false;
    let buscar = 0, size = matriz.length;
    if (turno==0){
        buscar = 1
    }else{
        buscar = -1
    }

    if(box.id[1]>0 && matriz[box.id[0]][box.id[1]-1] == buscar){
        let fin = true, contador = box.id[1]-1;
        while (fin && contador >=0){
            hor = (matriz[box.id[0]][box.id[1] - contador] == buscar*(-1))
            contador++
            if (matriz[box.id[0]][box.id[1] - contador] == 0){fin == false}
        }
    }
    console.log(hor)
    return hor || ver || diag
}

renderGrid(state)

// state.matriz = _.zip(...state.matriz)

// renderGrid(state)
