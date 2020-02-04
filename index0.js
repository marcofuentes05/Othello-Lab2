function cambiarTurno({matriz,turno}){
    turno = turno++%2
    let player = turno === 0 ? "Turno piezas negras" : "Turno piezas blancas"
    document.getElementById('turn').innerHTML(player)
}