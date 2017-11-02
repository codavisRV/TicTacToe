export function makeMove(cell) {
    return {
        type: 'MAKE_MOVE',
        x: cell[0],
        y: cell[1]
    };
}