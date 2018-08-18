const generatePlayerBoard = (numberofRows, numberOfColumns) => {
    const board = [];
    for (let i = 0; i < numberofRows; i++) {
        const row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push(" ");

        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberofRows, numberOfColumns, numberOfBombs) => {
    const board = [];
    for (let i = 0; i < numberofRows; i++) {
        const row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push(null);

        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;
    // TODO: do not place bombs on top of existing bombs
    while (numberOfBombsPlaced < numberOfBombs) {
        const randomRowIndex = Math.floor(Math.random() * numberofRows);
        const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = "B";
        numberOfBombsPlaced++;
    }
    return board;
}

const printBoard = (board) => {
    console.log(board.map(row => row.join(" | ")).join("\n"));
}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerBoard);

console.log("Bomb Board: ");
printBoard(bombBoard);