import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.862725,
      lng: 2.287592,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "400px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyCKpm13fpZ6ikBnBIs7q0Yy6b0Tuo0R71M` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.862725} lng={2.287592} text="Je suis ici !" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
