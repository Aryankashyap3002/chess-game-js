function Square(color, id, piece) {
    return { color, id, piece }
}

function SquareRow(rowId) {
    const SquareRow = [];
    const abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    if(rowId % 2 == 0) {
        
        abcd.forEach((ele, idx) => {
            if(idx % 2 === 0) {
                SquareRow.push(Square("white", ele + rowId, null));
            } else {
                SquareRow.push(Square("black", ele + rowId, null));
            }
        }) 
    } else {
        abcd.forEach((ele, idx) => {
            if(idx % 2 === 0) {
                SquareRow.push(Square("black", ele + rowId, null));
            } else {
                SquareRow.push(Square("white", ele + rowId, null));
            }
        }) 
    }
    // console.log(SquareRow)
    return SquareRow;
}

function initiateGame() {
    // console.log([SquareRow(8), SquareRow(7), SquareRow(6), SquareRow(5), SquareRow(4), SquareRow(3), SquareRow(2), SquareRow(1)]);
    return [SquareRow(8), SquareRow(7), SquareRow(6), SquareRow(5), SquareRow(4), SquareRow(3), SquareRow(2), SquareRow(1)];
}

export  { initiateGame };