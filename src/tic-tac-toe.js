const VALUE_X = 'x';
const VALUE_O = 'o';
const VALUE_NONE = null;

class TicTacToe {

    constructor() {
      this.matrix = [
        [VALUE_NONE, VALUE_NONE, VALUE_NONE],
        [VALUE_NONE, VALUE_NONE, VALUE_NONE],
        [VALUE_NONE, VALUE_NONE, VALUE_NONE]
      ]
      
      this.currentPlayerSymbol = VALUE_X;
    }
    
    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }
  
    nextTurn(rowIndex, columnIndex) {
      if(!this.matrix[rowIndex][columnIndex]) {
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol === VALUE_X ? VALUE_O : VALUE_X;
      }
    }

    isFinished() {
      return this.getWinner() || this.isDraw() ? true : false;
    }

    getWinner() {
      if (this.matrix[1][1] && (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] || 
        this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0])) {
        return this.matrix[1][1];
      } else {
        for(let i = 0; i < this.matrix.length; i++) {
          if (this.matrix[i][0] && this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
            return this.matrix[i][0];
          } else if (this.matrix[0][i] && this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
            return this.matrix[0][i];
          } 
        } 
      }
      return null;
    }

    noMoreTurns() {
      for(let i = 0; i < this.matrix.length; i++) {
        for(let j = 0; j < this.matrix[i].length; j++) {
          if(this.matrix[i][j] === VALUE_NONE) return false;
        }
      }
      return true;
    }

    isDraw() {
      return this.noMoreTurns() && !this.getWinner() ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
