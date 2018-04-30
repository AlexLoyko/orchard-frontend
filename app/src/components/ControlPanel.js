import React from 'react';
import SearchBar from './SearchBar'
import Geocode from 'react-geocode';
import axios from 'axios';
import '../control-panel.css';

const BEST_PLACES_BY_GRADE_AND_CUISINE_API = 'http://159.65.172.142:5000/best-places';
var positions = []

export default class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyD3mVMW4YktSYrY0w3CLUE75oWOwftVe3w");
        this.state = { currentInputValue: "", shouldShowWarning: false }
    }

    _onInputChange(newText) {
        this.setState({ currentInputValue: newText, shouldShowWarning: false });
    }

    _onClick() {
        const refer = this;
        if (this.state.currentInputValue.length === 0) {
            this.setState({ shouldShowWarning: true });
        } else {
            axios.get(`${BEST_PLACES_BY_GRADE_AND_CUISINE_API}?cuisine=${this.state.currentInputValue}`)
              .then(function (response) {
                  const places = response.data.places;

                  places.forEach(({ place }) => {
                      Geocode.fromAddress(`${place.building} ${place.street} ${place.boro}`)
                      .then(
                        response => {
                           const { lat, lng } = response.results[0].geometry.location;
                           positions.push({ latitude: lat, longitude: lng });

                           if (positions.length === 10){
                             refer.props.onPlacesSet(positions);
                             positions = []
                           }
                        },
                        error => {
                          console.error(error);
                        }
                      )
                      .catch(function (error) {
                          console.log(error);
                      });
                  })
                });
      }
    }

    render() {
      // Get latidude & longitude from address.
        return(
            <div className="control-panel">
                <h1 className="title">Search NYC restaurants for your favourite cuisine</h1>
                <SearchBar
                    onInputValueChanged={(text) => {this._onInputChange(text);}}
                    onClick={() => {this._onClick();}}
                    showWarning={this.state.shouldShowWarning}
                />
            </div>
        );
    }
}
