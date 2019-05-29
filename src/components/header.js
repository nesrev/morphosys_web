// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import ImageLogo from "../components/image-logo";
import {
  Container,
  Dropdown,
  Icon,
  Menu,
} from 'semantic-ui-react';

const HeaderPage = ({ siteTitle }) => (

  <header>
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
  </header>
)

HeaderPage.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPage.defaultProps = {
  siteTitle: ``,
}

export default HeaderPage
