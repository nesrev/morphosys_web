import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageTech = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tech-img.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img loading="lazy" style={{margin:"-1em",
    padding:"-1em"}} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default ImageTech;
