import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Menu } from 'antd';

import { Icon } from 'Icon';
import { ROUTES } from 'config/routes';
import {clone} from "lodash";

import './index.css';


const routes = clone(ROUTES);

const MenuModal = () => {
  return (
    <Menu className="menu-container">
      <BrowserRouter>
        {
          routes.map((route) =>
            <Menu.Item key={route.key}>
              <Route path={route.path} >
                <Icon type={`icon-${route.iconType}`} />
                {route.text}
              </Route>
            </Menu.Item>
          )
        }
      </BrowserRouter>

    </Menu>
  );
}

export default MenuModal;
