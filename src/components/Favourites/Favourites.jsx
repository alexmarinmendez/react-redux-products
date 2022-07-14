import React, { Component } from "react";
import { connect } from "react-redux";
import { removeProductFavourite } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './Favourites.css';

export class Favourites extends Component {

  render() {
    return (
      <div>
        <h2>Productos en Favoritos</h2>
        <ul>
        {
            this.props.favProducts.length ? (this.props.favProducts.map(item => (
              <div key={item.id}>
                <button onClick={() => this.props.removeProductFavourite(item.id)}>X</button>
                <Link to={`/detail/${item.id}`}><span key={item.id}>{item.name}</span></Link>
                <br />
              </div>
            ))) : <p>No hay nada en Favoritos</p>
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        favProducts: state.productsFavourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFavourite: productId => dispatch(removeProductFavourite(productId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
