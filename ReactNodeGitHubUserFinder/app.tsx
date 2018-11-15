declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

const Card = (props) => {
    
        return (
            <div className="floatleft">
                <img width="250" src={props.imgUrl} />
                <span className="space20">{props.Name}</span>
                <br /> <br /> <br /> 
            </div>
   
        );
    }

const CardList = (props) => {

    return ( 
        <div>
            <Card {...this.props} imgUrl={'https://avatars3.githubusercontent.com/u/20?v=4'} Name={'Kevin Clark'}/>
            <Card  {...this.props} imgUrl={'https://avatars0.githubusercontent.com/u/1?v=4'} Name={'Tom Preston-Werner'} />
        </div>
    );
}


ReactDOM.render(
    <CardList />,
    document.getElementById('root')
);

