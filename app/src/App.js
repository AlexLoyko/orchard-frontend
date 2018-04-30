import React, { Component } from 'react';
import Map from './components/Map';
import ControlPanel from './components/ControlPanel';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={ places: [] }
  }

  _updatePlaces(places) {
    this.setState({ places });
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <ControlPanel
          onPlacesSet={(places) => { this._updatePlaces(places)}}
        />
        <Map
          places={this.state.places}
          containerElement={<div style={{ height: `100%`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%`, width: '100%' }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3mVMW4YktSYrY0w3CLUE75oWOwftVe3w&v=3.exp&libraries=geometry,drawing"
        />
      </div>
    );
  }
}

export default App;
