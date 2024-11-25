import { blackPawn, whitePawn, whiteRook, blackRook, blackBishop, whiteBishop, blackKnight
    , whiteKnight, blackKing, whiteKing, blackQueen, whiteQueen } from "../Data/pieces.js";
import { gameArena } from "../Helper/constants.js";


function pieceRender(data) {
    data.forEach((row) => {
        row.forEach((square) => {
            // console.log(square);
            if(square.piece) {
                // console.log(square.piece);
                const squareE1 = document.getElementById(square.id);
                const piece = document.createElement('img');
                piece.classList.add('piece');
                piece.src = square.piece.img;

                squareE1.appendChild(piece);
            }
        })
    })
}

function initGameRender (data) {
    // console.log(data);
    data.forEach(element => {
        // console.log(element);
        const rowE1 = document.createElement('div');
        rowE1.classList.add('squareRow');
        element.forEach((square) => {
            // console.log(square);
            const squareDiv = document.createElement('div');
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color, "square");
            rowE1.appendChild(squareDiv);
            if(square.id[1] === '7') {
                square.piece = blackPawn(square.id);
                // console.log(square.piece );
            }

            if(square.id[1] === '2') {
                square.piece = whitePawn(square.id);
                // console.log("white-pawn"); 
            }
            
            if(square.id[1] === '1' && (square.id[0] === 'a' || square.id[0] === 'h')) {
                square.piece = whiteRook(square.id);
            }
            
            if(square.id[1] === '8' && (square.id[0] === 'a' || square.id[0] === 'h')) {
                square.piece = blackRook(square.id);
            }

            if(square.id[1] === '1' && (square.id[0] === 'b' || square.id[0] === 'g')) {
                square.piece = whiteKnight(square.id);
            }

            if(square.id[1] === '8' && (square.id[0] === 'b' || square.id[0] === 'g')) {
                square.piece = blackKnight(square.id);
            }

            if(square.id[1] === '1' && (square.id[0] === 'c' || square.id[0] === 'f')) {
                square.piece = whiteBishop(square.id);
            }

            if(square.id[1] === '8' && (square.id[0] === 'c' || square.id[0] === 'f')) {
                square.piece = blackBishop(square.id);
            }

            if(square.id[1] === '1' && (square.id[0] === 'd')) {
                square.piece = whiteQueen(square.id);
            }

            if(square.id[1] === '8' && (square.id[0] === 'd')) {
                square.piece = blackQueen(square.id);
            }
            
            if(square.id[1] === '1' && (square.id[0] === 'e')) {
                square.piece = whiteKing(square.id);
            }

            if(square.id[1] === '8' && (square.id[0] === 'e')) {
                square.piece = blackKing(square.id);
            }
            
        }); 
        gameArena.appendChild(rowE1);
    });
    // console.log(data);
    pieceRender(data);
}



export { initGameRender }