import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions'
import { connect } from 'react-redux'

const Product = (props) => {
    const { productId } = useParams();
    
    useEffect(() => {
        props.getProductDetail(productId)
    }, [productId])

  return (
    <>
        <div>Product</div>
        <hr />
        {
            props.detail.name && (
                <>
                <h2>{props.detail.name}</h2>
                <h4>{props.detail.decription}</h4>
                <img src={props.detail.image[0]} alt="" />
                </>
            )
        }
        
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        detail: state.productDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: productId => dispatch(getProductDetail(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)