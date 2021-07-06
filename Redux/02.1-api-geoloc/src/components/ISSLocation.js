import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { connect } from 'react-redux'
import { fetchISSLocation } from '../redux/actions/thunkISSAction';

class ISSLocation extends Component {
  componentDidMount() {
    const { pegaLocalizacao } = this.props
    pegaLocalizacao()
  }

  atualizaLocalizacao() {
    const { pegaLocalizacao, latitude, longitude } = this.props
    console.log(latitude, longitude)
    pegaLocalizacao()
  }

  render() {
    const { latitude, longitude, isLoading } = this.props
    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={450}
          height={450}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker anchor={[latitude, longitude]} />
        </Map>
        <h1>{isLoading && 'Carregando...'}</h1>
        <button onClick={() => this.atualizaLocalizacao()}>Atualiza Localizacao</button>
      </div>
    );
  }
}

const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
  latitude,
  longitude,
})

const mapDispatchToProps = (dispatch) => ({
  pegaLocalizacao: () => dispatch(fetchISSLocation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);