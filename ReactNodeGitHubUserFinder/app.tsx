declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

const Card = (props) => {
    
        return (
            <div>
                <img src="http://placehold.it/75" />
                <div>
                    <div>Name</div>
                    <div>Company</div>
                </div>
            </div>
        );
    }




class App extends React.PureComponent {
    render() {
        return (
            <div>
              <Card/>
            </div>
        );
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById('root')
);

