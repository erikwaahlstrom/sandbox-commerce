import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ItemList = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            productType
            vendor
            variants {
              id
              title
              price
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <ul>
        {data.allShopifyProduct.edges.map(item => {
          return <li>{item.node.title}</li>
        })}
      </ul>
    </>
  )
}

export default ItemList
