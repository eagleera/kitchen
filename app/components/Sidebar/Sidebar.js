import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar as Side,
} from 'semantic-ui-react';

const Sidebar = ({ animation, direction, visible }) => (
  <Side as={Menu}
    animation={animation}
    direction={direction}
    // icon="labeled"
    vertical
    visible={visible}
    width="very thin"
    className="sidebar-app"
  >
    <Menu.Item as="a">
      <Icon name="align left" />
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="home" />
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="motorcycle" />
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="comments" />
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="food" />
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="calendar" />
    </Menu.Item>
  </Side>
);

export default Sidebar;
