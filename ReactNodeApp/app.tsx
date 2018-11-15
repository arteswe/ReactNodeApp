declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

class Square extends React.Component {

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square {...this.props}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
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
        [2, 4, 6],
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
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);



//export class Hello extends React.Component {
//    render() {
//        return (
//            <h1>Welcome to React!!</h1>
//        );
//    }
//}
//class Button extends React.Component {

//    //handleClick = () => {
//    //    this.setState((prevState) => {
//    //        return {
//    //            counter: prevState.count + 1
//    //        };
//    //    });
//    //    // this.setState({count: this.state.count +1 } )
//    //};
//    render() {
//        return (
//            <button onClick={this.props.onClickFunction}> {clickme}</button>
//        );
//    };
//};

//const Result = (props) => {
//    return (
//        <div>..</div>
//    );
//};

//class App extends React.Component {
//    state = { count: 0 };
//    incrementCount = () => {

//        this.setState((prevState) =>
//            (
//                {
//                    count: prevState.count + 1
//                }));
//    };

//    render() {
//        return (
//            <div>
//                <Hello />
//                <Button onClick={this.incrementCount} />
//                <Result />
//            </div>
//        );

//    };
//};

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<Button />, document.getElementById('goId'));