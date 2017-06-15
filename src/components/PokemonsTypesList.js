import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchTypesList, fetchPokemonsAcordingTypes} from '../actions';


class PokemonsTypesList extends Component {

    constructor(props) {
        super(props);

        this.onSelectItem = this.onSelectItem.bind(this);
    }

    componentWillMount() {
        this.props.fetchTypesList();
    }

    onSelectItem(url){
        this.props.fetchPokemonsAcordingTypes(url);
    }

    renderTypes(){
        const types = this.props.types;
        if(!types) return;
        return types.map((type) =>
              <div key={type.name} onClick={()=>this.onSelectItem(type.url)} className="list-group-item">{type.name}</div>
            );
    }

    render() {
        return (
          <div className="col-sm-3">
                <h3>Sort by tags</h3>
               <div className="list-group">{this.renderTypes()}</div>
          </div>
        );
    }
}

export default connect(null, { fetchTypesList, fetchPokemonsAcordingTypes })(PokemonsTypesList);
