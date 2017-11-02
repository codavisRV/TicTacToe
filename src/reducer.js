export default (state = {}, action) => {
    switch (action.type) {

        case 'MAKE_MOVE' : 
            //******DON'T DO THIS -- MUTATING STATE DIRECTLY
            // state.board[action.x][action.y]] = state.char; 
            // return {
            //     ...state,
            //     board: state.board
            // }
            // ***** DO IT THIS WAY INSTEAD
            // let newBoard = state.board.slice();
            // newBoard[action.x][action.y] = state.char;
            // return {
            //     ...state,
            //     board: newBoard
            // }
            let newState = Object.assign({}, state);
            newState.board[action.x][action.y] = state.char;
            let location = action.x.toString() + action.y.toString();
            newState.char === "X" ? newState.xCoords.push(location) : newState.yCoords.push(location);
            newState.char = newState.char === "X" ? "O" : "X";
            
            return {
                ...state,
                board: newState.board,
                char: newState.char,
                xCoords: newState.xCoords,
                yCoords: newState.yCoords
            }

        case 'DECLARE_WINNER' :
            return {
                ...state,
                winner: action.winner
            }
        
        case 'RESET' : {
            return {
                ...state,
                board: [
                    ["","",""],
                    ["","",""],
                    ["","",""]
                ],
                char: "X",
                xCoords: [],
                yCoords: [],
                winner: ""
            };
        }
        
        case 'DRAW' : {
            return {
                ...state,
                isDraw: action.isDraw
            }
        }

        default:
            return state;
    }
}