import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImagePower = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "morphosys-power-by-w.jpg" }) {
          childImageSharp {
            fixed(width:100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
);
export default ImagePower;
