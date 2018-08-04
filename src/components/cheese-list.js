import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component{
    
    componentDidMount(){
        console.log('Component did mount');
        this.props.dispatch(fetchCheeses());
    }

    render(){
        const cheeseListString = this.props.cheeses.map((cheese,index) => {
            console.log(cheese);

            return (
              <li key={index}>
                {cheese}
              </li>
            );
          });
      

        if (this.props.loading){
            return <div>Loading...</div>;
        }
        if (this.props.error){
            return <div>{this.props.error}</div>;
        }

        return (
        <ul>
            {cheeseListString}
        </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        cheeses: state.cheeses,
        loading: state.loading,
        error: state.error
    };
};


export default connect(mapStateToProps)(CheeseList);

