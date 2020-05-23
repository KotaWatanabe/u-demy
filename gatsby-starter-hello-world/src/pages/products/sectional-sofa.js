import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {    
    const {product: {
        price,
        title
    }} = data;
    
    return (
        <div>
            <h2>{title}</h2>
            <h2>${price}</h2>
        </div>
    )

}
export const query = graphql`
  {
    product: contentfulProducts(slug: {eq: "sectional-sofa"}) {
      title
      price
    }
  }
`

export default ComponentName
