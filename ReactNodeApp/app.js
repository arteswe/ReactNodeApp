var React = require('react');
var ReactDOM = require('react-dom');
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (React.createElement("button", { className: "square", onClick: () => this.setState({ value: 'X' }) }, this.props.value));
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
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i) {
        return (React.createElement(Square, { value: this.state.squares[i], onClick: () => this.handleClick(i) }));
    }
    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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
class Game extends React.Component {
    render() {
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, null)),
            React.createElement("div", { className: "game-info" },
                React.createElement("div", null),
                React.createElement("ol", null))));
    }
}
// ========================================
ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));
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
//# sourceMappingURL=app.js.map