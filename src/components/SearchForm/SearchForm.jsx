import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, addProductFavourite } from "../../redux/actions";
import './SearchForm.css';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getProducts(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Categoría: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* {
          this.props.products && this.props.products.map(item => (
            <div key={item.id}>
              <h4>{item.name}</h4>
            </div>
          ))
         } */}
         <h1>Productos</h1>
         {
            this.props.products.length ? (this.props.products.map(item => (
              <div key={item.id}>
                <button onClick={() => this.props.addProductFavourite(item)}>FAV</button>
                <span key={item.id}>{item.name}</span>
                <br />
              </div>
            ))) : <p>Realiza una búsqueda</p>
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: categoryId => dispatch(getProducts(categoryId)),
    addProductFavourite: product => dispatch(addProductFavourite(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
