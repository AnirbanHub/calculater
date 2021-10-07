import React, {Component} from 'react';

class ResultsDisplay extends Component {

    //Render child component for results display
    render(){
        let {results} = this.props;
        return (
            <div>
                <p>{results}</p>
            </div>

        );
    }

}

export default ResultsDisplay;