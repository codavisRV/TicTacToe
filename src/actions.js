export function makeMove(cell) {
    return {
        type: 'MAKE_MOVE',
        x: cell[0],
        y: cell[1]
    };
}

export function declareWinner(winner) {
    return {
        type: 'DECLARE_WINNER',
        winner
    }
}

export function reset() {
    return {
        type: 'RESET',
    }
}

export function draw(isDraw) {
    return {
        type: 'DRAW',
        isDraw
    }
}