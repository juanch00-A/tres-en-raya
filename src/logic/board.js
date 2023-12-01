import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas la combinaciones ganadoras para ver quien gana si "X" o "O"
    for(const combo of WINNER_COMBOS){
        const [a,b,c] = combo
        if (
            boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c] 
            ){
                return boardToCheck[a]
            }
    }
    //sino hay ganador:
    return null 
}


export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate (si no hay más espacios vacíos en el tablero).
    return newBoard.every((Square) => Square !== null);
};
