import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TextContent from './TextContent';

class CopyRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="copyright-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            


                        </div>
                    </div>
                </div>


            </div>


        );
    }

}

export default CopyRight;