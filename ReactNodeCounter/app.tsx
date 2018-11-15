declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');



class Button extends React.PureComponent {

    render() {
        return (
            <button onClick={this.props.onButtonClickFunc}>Öka med 1</button>
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
    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));

    }
    render() {
        return (
            <div>
                <Button {...this.props} onButtonClickFunc={this.incrementCounter}/>
                <Result {...this.props} counter={this.state.counter}/>
            </div>
        );
    }

}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

