import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';
import Logo from './images/logo.png';
import './style.scss';
import SearchInput from '../SearchInput';

const Header = () => (
  <div className="header">
    <div className="nav-bar">
      <Grid verticalAlign="middle">
        <Grid.Column width="1" padded>
          <img src={Logo} alt="suhhh" />
        </Grid.Column>
        <Grid.Column width="14">
          <SearchInput />
        </Grid.Column>
        <Grid.Column width="1">
          <Icon name="cog" />
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default Header;
