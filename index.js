
// import lastIndexOf from "lodash/lastIndexOf";
// import indexOf from "lodash/indexOf";
// import transpose from 'mathjs '
//  1 Representa pieza blanca
// -1 Representa pieza negra

// Turno 1 representa turno de blanca
// Turno -1 representa turno de negra

// TO TRANSPOSE A MATRIX USE _.zip(...MATRIX)

const state={matriz : [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,-1,1,0,0,0],
    [0,0,0,1,-1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
],
turno: -1}


const renderGrid = ({matriz,turno}) => {
    const boxSize = 8
    const root = document.getElementById('root');
    matriz.map( (lista,i) => {
        const line = document.createElement("div");
        line.style.width = String(boxSize * 52) + "px";
        lista.map( (caja,j) => {
            const k = document.createElement("div")
            k.id = `${i}${j}`
            k.style.backgroundColor = caja=== 1 ? "White" : (caja == -1 ? "Black" : "Green")
            k.style.width = "50px"
            k.style.height = "50px"
            k.style.border = "1px solid black"
            k.style.float = "left"
            k.setAttribute("onClick", "isValid(this,state)")
                line.appendChild(k)
            }
        )
        root.appendChild(line)
    }
    )
}

//function onClick(box){
    //    console.log(box.id)
    //}
    
    function cambiarTurno({matriz,turno}){
        let player = "";
        state.turno=state.turno*-1;
        const root = document.getElementById('root');
        player = state.turno  == -1 ? "Turno piezas negras" : "Turno piezas blancas"
        let div = document.getElementById('turn')
        div.innerHTML=player;
    }
    
    function isValid(box, {matriz, turno}){
        let hor = false, ver = false, diag = false;
        let buscar = turno == -1 ? 1 : -1;
        size = matriz.length;
        //Evaluo hacia la izquierda
        let inicio = parseInt(box.id[1])-1
        let sigue = true
        while(inicio>=0 && sigue == true){
            if (matriz[parseInt(box.id[0])][inicio]=== buscar){
                hor = true
            }
            else{
                final = inicio  
                sigue = false
                console.log(final)
                console.log(hor)
                
            }
            inicio--  
        }
        return hor //|| ver || diag
    }
    
    esvalido = (box, {matriz,turno}) =>{
        //import _ from 'lodash';
        // Esto se ejecuta para cada celda
        // Evaluo horizontales
        let buscar = turno == -1 ?-1:1
        let hor = false
        indiceDerecha = _.indexOf(matriz[box.id[0]],buscar,box.id[1])
        indiceIzquierda = _.lastIndexOf(matriz[box.id[0]], buscar, box.id[1])
        prompt([indiceDerecha, indiceIzquierda])
    }
    
    function range(start, end) {
        let ret = []
        if(start<end){
            ret = [start, ...range(start + 1, end)];
        }
        else if (start === end) return [start];
        else{
            ret = [end, ...range(end + 1, start)];
        }
        return ret
    }
    
    
    const root = document.getElementById('root');
    root.setAttribute("onClick", "cambiarTurno(state)")
    renderGrid(state)
    esvalido({id:"33"},state)
    s