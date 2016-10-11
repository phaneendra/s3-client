import React from 'react';
import { Link } from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import style from './style';

const MainAppBar = () => (
  <AppBar theme={style} leftIcon='menu'>
    <h3 className={style.title}>
      <Link to='/'> S3 Explorer</Link>
    </h3>

    <nav className={style.navigation}>
      <ul>
        <li>
          <IconMenu icon='notifications' menuRipple>
            <MenuItem value='download' icon='get_app' caption='Download' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />
            <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
          </IconMenu>
        </li>
        <li>
          <IconMenu icon='flag' menuRipple>
            <MenuItem value='download' icon='get_app' caption='Download' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />
            <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
          </IconMenu>
        </li>
        <li>
          <IconMenu icon='more_vert' menuRipple>
            <MenuItem value='download' icon='get_app' caption='Download' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />
            <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
          </IconMenu>
        </li>
      </ul>
    </nav>
  </AppBar>
);

export default MainAppBar;
