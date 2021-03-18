(function (global) {

    var Noughts = function (board, aiPlayer, humanPlayer) {
        return new Noughts.init(board, aiPlayer, humanPlayer);
    };

    Noughts.prototype = {

        nextMove: function () {
            return this.minimax(this.board, this.aiPlayer);
        },

        minimax: function (newBoard, player) {

            /* Available spots */
            let availSpots = this.emptyIndices(newBoard);

            /* Checks for the terminal states such as win, lose, and tie and returning a value accordingly */
            if (this.winning(newBoard, this.humanPlayer)) {
                return {score: -10};
            }
            else if (this.winning(newBoard, this.aiPlayer)) {
                return {score: 10};
            }
            else if (availSpots.length === 0) {
                return {score: 0};
            }

            /* An array to collect all the objects */
            let moves = [];

            /* Loop through available spots  */
            for (let i = 0; i < availSpots.length; i++) {
                /* Create an object for each and store the index of that spot  */
                let move = {};
                move.index = newBoard[availSpots[i]];

                /* Set the empty spot to the current player */
                newBoard[availSpots[i]] = player;

                /* Collect the score resulted from calling minimax on the opponent of the current player */
                if (player === this.aiPlayer) {
                    let result = this.minimax(newBoard, this.humanPlayer);
                    move.score = result.score;
                }
                else {
                    let result = this.minimax(newBoard, this.aiPlayer);
                    move.score = result.score;
                }

                /* Reset the spot to empty  */
                newBoard[availSpots[i]] = move.index;

                /* Push the object to the array  */
                moves.push(move);
            }

            /* If it is the computer's turn loop over the moves and choose the move with the highest score */
            let bestMove;
            if (player === this.aiPlayer) {
                let bestScore = -10000;
                for (let i = 0; i < moves.length; i++) {
                    if (moves[i].score > bestScore) {
                        bestScore = moves[i].score;
                        bestMove = i;
                    }
                }
            }
            else {
                /* Else loop over the moves and choose the move with the lowest score */
                let bestScore = 10000;
                for (let i = 0; i < moves.length; i++) {
                    if (moves[i].score < bestScore) {
                        bestScore = moves[i].score;
                        bestMove = i;
                    }
                }
            }

            /* Return the chosen move (object) from the array to the higher depth */
            return moves[bestMove];
        },

        emptyIndices: function (board) {
            let notUsed = [];
            for (let i = 0; i < board.length; i++) {
                if (board[i] !== this.aiPlayer && board[i] !== this.humanPlayer) {
                    notUsed.push(board[i]);
                }
            }
            return notUsed;
        },

        winning: function (board, player) {
            return (board[0] === player && board[1] === player && board[2] === player) ||
                (board[3] === player && board[4] === player && board[5] === player) ||
                (board[6] === player && board[7] === player && board[8] === player) ||
                (board[0] === player && board[3] === player && board[6] === player) ||
                (board[1] === player && board[4] === player && board[7] === player) ||
                (board[2] === player && board[5] === player && board[8] === player) ||
                (board[0] === player && board[4] === player && board[8] === player) ||
                (board[2] === player && board[4] === player && board[6] === player);
        }
    };

    Noughts.init = function (board, aiPlayer, humanPlayer) {
        var self = this;
        self.board = board || [0, 1, 2, 3, 4, 5, 6, 7, 8];

        if (aiPlayer === null || aiPlayer === undefined) {
            throw 'Invalid AI';
        }
        if (humanPlayer === null || humanPlayer === undefined) {
            throw 'Invalid Human Player';
        }

        self.aiPlayer = aiPlayer;
        self.humanPlayer = humanPlayer;
    };

    Noughts.init.prototype = Noughts.prototype;

    global.Noughts = global.T = Noughts;

}(window));