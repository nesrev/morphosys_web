/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ImagePower from "../components/image-power"

import Header from "./header";

import {
  Container,
  Divider,
  List,
  Grid,
  Icon,
  Segment,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
/*import "./layout.css"*/



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <main>
              <Container fluid style={{ marginTop: '3.9em' }}>
                {children}
              </Container>
            </main>
            <footer>
              <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container fluid textAlign='center'>
                  <Grid divided inverted stackable>
                    <Grid.Column width={4}>
                      <p>Productos & Servicos</p>
                      <List link inverted>
                        <List.Item as='a'>Link One</List.Item>
                        <List.Item as='a'>Link Two</List.Item>
                        <List.Item as='a'>Link Three</List.Item>
                        <List.Item as='a'>Link Four</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <p>Saber mas sobre nosotros</p>
                      <List link inverted>
                        <List.Item as='a'>Link One</List.Item>
                        <List.Item as='a'>Link Two</List.Item>
                        <List.Item as='a'>Link Three</List.Item>
                        <List.Item as='a'>Link Four</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <p>Siguenos en nuestras Redes Sociales</p>
                      <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                          <Icon aria-hidden='true' name='facebook official' size='huge'></Icon>
                        </List.Item>
                        <List.Item as='a' href='#'>
                          <Icon aria-hidden='true' name='twitter' size='huge'></Icon>
                        </List.Item>
                        <List.Item as='a' href='#'>
                          <Icon aria-hidden='true' name='instagram' size='huge'></Icon>
                        </List.Item>
                      </List>
                    </Grid.Column>
                  </Grid>

                  <Divider inverted section />
                  <ImagePower/><br/>
                  Morphosys Engineering C.A. © {new Date().getFullYear()}<br/>
                  <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                      Mapa del Sitio
                    </List.Item>
                    <List.Item as='a' href='#'>
                      Contactanos
                    </List.Item>
                    <List.Item as='a' href='#'>
                      Terminos y Condiciones
                    </List.Item>
                    <List.Item as='a' href='#'>
                      Politicas de Privacidad
                    </List.Item>
                  </List>
                </Container>
              </Segment>
            </footer>
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
