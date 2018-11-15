var React = require('react');
var ReactDOM = require('react-dom');
class Square extends React.Component {
    render() {
        return (React.createElement("button", { className: "square", onClick: this.props.onClick }, this.props.value));
    }
}
class Board extends React.Component {
    //constructor(props) {
    //    1911super(props);
    //    this.state = {
    //        squares: Array(9).fill(null),
    //        xIsNext: true,
    //    };
    //}
    //handleClick(i) {
    //    const squares = this.state.squares.slice();
    //    if (calculateWinner(squares) || squares[i]) {
    //        return;
    //    }
    //    squares[i] = this.state.xIsNext ? 'x' : 'o';
    //    this.setState({
    //        squares: squares,
    //        xIsNext: !this.state.xIsNext,
    //    });
    //}
    renderSquare(i) {
        return (React.createElement(Square, Object.assign({}, this.props, { value: this.props.squares[i], onClick: () => this.props.onClick(i) })));
    }
    render() {
        //const winner = calculateWinner(this.state.squares);
        //let status;
        //if (winner) {
        //    status = 'Winner: ' + winner;
        //} else {
        //    status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
        //}
        return (React.createElement("div", null,
            React.createElement("div", { className: "status" }, status),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(0),
                this.renderSquare(1),
                this.renderSquare(2)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(3),
                this.renderSquare(4),
                this.renderSquare(5)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(6),
                this.renderSquare(7),
                this.renderSquare(8))));
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                    squares: Array(9).fill(null)
                }],
            xIsNext: true
        };
    }
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                    squares: squares
                }]),
            xIsNext: !this.state.xIsNext,
        });
    }
    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, Object.assign({}, this.props, { squares: current.squares, onClick: (i) => this.handleClick(i) }))),
            React.createElement("div", { className: "game-info" },
                React.createElement("div", null, status),
                React.createElement("ol", null))));
    }
}
class PlayerOneImage extends React.PureComponent {
    render() {
        return (React.createElement("img", { src: '/one.jpg', width: "15" }));
    }
}
class PlayerTwoImage extends React.PureComponent {
    render() {
        return (React.createElement("img", { src: '/two.jpg', width: "12" }));
    }
}
// ========================================
ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map