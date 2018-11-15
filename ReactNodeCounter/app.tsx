declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.PureComponent {
    handleClick = () => {
        this.props.onButtonClickFunc(this.props.incrementValue)
    }
    render() {
        return (
            <button onClick={this.handleClick}>Öka med {this.props.incrementValue}</button>
        );
    }
}

class Result extends React.Component {
    render() {
        return (
            <div>
                <br/>
                Ditt aktuella värde är:
                {this.props.counter}
            </div>
        );
    }
}

class App extends React.PureComponent {
    state = { counter: 0 }
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }
    render() {
        return (
            <div>
                <Button {...this.props} incrementValue={1} onButtonClickFunc={this.incrementCounter} />
                <Button {...this.props} incrementValue={5} onButtonClickFunc={this.incrementCounter} />
                <Button {...this.props} incrementValue={110} onButtonClickFunc={this.incrementCounter} />
                <Result {...this.props} counter={this.state.counter}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

