import React from 'react';
import './NamesList.css';
import {getNames} from "../../services/names.service";

class NamesList extends React.Component {
    // Called before mounting
    constructor(props) {
        super(props);

        this.state = {
            names: []
        }

    }

    async componentDidMount() {
        const names = await getNames();

        this.setState({
            names: names
        })
    }

    render() {
        return (
            <div className='names-container'>
                {
                    this.state.names.length > 0 ?
                        this.state.names.map(name => {
                            return (
                                <div className='name-item'>
                                    {name}
                                </div>
                            )
                        }) :
                        <p>Loading...</p>
                }
            </div>
        )
    }
}

export default NamesList;