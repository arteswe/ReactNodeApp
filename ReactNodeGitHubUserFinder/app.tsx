declare var require: any
import axios from 'axios';
var React = require('react');
var ReactDOM = require('react-dom');

const Card = (props) => {

    return (
        <div className="floatleft">
            <img width="250" src={props.avatar_url} />
            <span className="space20">{props.name}</span>
            <span className="space20">{props.company}</span>
            <br /> <br /> <br />
        </div>

    );
}

const CardList = (props) => {

    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}


class Form extends React.PureComponent {
    state = {userName: ''};
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        let url = 'https://api.github.com/users/' + this.state.userName;
        axios.get(url).then(resp => {
            console.log(resp.data);
            this.props.onSubmit(resp.data);
        });
    } 
    //ref={(input)=> this.userNameInput = input} kan finnas i input elementet
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={(event) => this.setState({
                    userName: event.target.value
                })} placeholder="GitHub user name" />
                <button >Add card </button>
            </form>

        );
    }
}

class App extends React.PureComponent {
    state = {
        cards: [
            //{
            //    name: "Kevin Clark",
            //    avatar_url: "https://avatars3.githubusercontent.com/u/20?v=4",
            //    company: "Facebook",
            //},
            //{
            //    name: "Tom Preston-Werner",
            //    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            //    company: "Twitter"
            //}
        ]
    }
    addNewCard = (cardInfo) => {
       this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render() {
        return (
            <div>
                <CardList cards={this.state.cards} />
                <Form {...this.props} onSubmit={this.addNewCard } />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

