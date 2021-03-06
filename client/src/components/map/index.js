import React, { Component } from "react";
import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;
console.log(process.env);
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.944130,
      lng: 2.357330,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "400px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.944130} lng={2.357330} text="ICI" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
