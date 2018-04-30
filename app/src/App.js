import React, { Component } from 'react';
import Map from './components/Map';
import ControlPanel from './components/ControlPanel';


class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <ControlPanel />
        <Map
          containerElement={<div style={{ height: `100%`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%`, width: '100%' }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing"
        />
      </div>
    );
  }
}

export default App;
