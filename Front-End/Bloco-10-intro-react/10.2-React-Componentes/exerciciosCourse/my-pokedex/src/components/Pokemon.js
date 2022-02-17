import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render(){  
    const { name, type, averageWeight, image } = this.props.pokemonData
    return (
      <div className="pokemon-card">
        <p>{name}</p>
        <p>{type}</p>
        <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
  })
}

export default Pokemon