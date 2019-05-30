// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";

import ImageLogo from "../components/image-logo";
import {
  Container,
  Dropdown,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () =>this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened } = this.state

    return (
        <Menu
          borderless
          inverted
          vertical
          fluid
          style={{
            margin:0
          }}
          color='orange'>
          <Menu.Item position='center'>
            <ImageLogo/>
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Menu>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}
const HeaderPage = ({ siteTitle }) => (

  <header>
        {/*Responsive for Desktop and Big Desktop*/}
        <Responsive as={MobileContainer} maxWidth={859}>
        </Responsive>
        {/*Responsive for Desktop and Big Desktop*/}
        <Responsive as={Segment} minWidth={860}>
          <Menu
            borderless
            fixed='top'
            inverted
            color='orange'
          >
            <Container fluid>
              <Menu.Item as='a' href='/'>
                <ImageLogo/>
              </Menu.Item>
              <Menu.Item as='a'><Icon aria-hidden='true' name='users' size='large'></Icon>Conocenos</Menu.Item>
              <Menu.Item as='a'>
                <Icon aria-hidden='true' name='lightbulb outline' size='large'></Icon>
                <Dropdown
                  text="Productos y Servicios"
                  inline
                  item
                  simple
                >
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item as='a'><Icon aria-hidden='true' name='phone' size='large'></Icon>Contactanos</Menu.Item>
              <Menu.Item position='right' as='a'>Registrate <Icon aria-hidden='true' name='sign in' size='large'></Icon></Menu.Item>
            </Container>
          </Menu>
        </Responsive>
  </header>
)

HeaderPage.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPage.defaultProps = {
  siteTitle: ``,
}

export default HeaderPage
