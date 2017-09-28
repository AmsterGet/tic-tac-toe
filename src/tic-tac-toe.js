class TicTacToe {

    constructor() {
        this.symbol='x';
        this.area=[[null,null,null],
                   [null,null,null],
                   [null,null,null]];
        this.sch=0;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, colIndex) {
        if(this.area[rowIndex][colIndex]=== null){
            this.sch++;
            this.area[rowIndex][colIndex] = this.getCurrentPlayerSymbol();
            if(this.symbol === 'x'){ this.symbol = 'o';
            } else {this.symbol = 'x';}
        }
    }

    isFinished() {
        return (this.getWinner()!== null || this.isDraw()=== true)
    }

    getWinner() {
        if (this.area[0][0]===this.area[0][1] && this.area[0][1]===this.area[0][2]) return this.area[0][2];
        if (this.area[1][0]===this.area[1][1] && this.area[1][1]===this.area[1][2]) return this.area[1][2];
        if (this.area[2][0]===this.area[2][1] && this.area[2][1]===this.area[2][2]) return this.area[2][2];
        if (this.area[0][0]===this.area[1][0] && this.area[1][0]===this.area[2][0]) return this.area[2][0];
        if (this.area[0][1]===this.area[1][1] && this.area[1][1]===this.area[2][1]) return this.area[2][1];
        if (this.area[0][2]===this.area[1][2] && this.area[1][2]===this.area[2][2]) return this.area[2][2];
        if (this.area[0][0]===this.area[1][1] && this.area[1][1]===this.area[2][2]) return this.area[2][2];
        if (this.area[0][2]===this.area[1][1] && this.area[1][1]===this.area[2][0]) return this.area[2][0];
        return null;
    }

    noMoreTurns() {
        return this.sch===9;
    }

    isDraw() {
        return (this.sch===9 && this.getWinner()===null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.area[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
