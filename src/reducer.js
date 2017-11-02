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
            newState.char = newState.char === "x" ? "o" : "x";
            return {
                ...state,
                board: newState.board,
                char: newState.char
            }


        default:
            return state;
    }
}