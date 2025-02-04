import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
  return (
    <div className="product-view">
      <h1 className="product-id">Product # {props.productId}</h1>
      <ProductCard
        product = {props.product}
        productId = {props.productId}
        image = {props.product.image}
        name = {props.product.name}
        price = {props.product.price}
        desc = {props.product.description}
        handleAddItemToCart = {null}
        handleRemoveItemToCart = {null}
      />
    </div>
  )
}