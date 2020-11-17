import React, { useState } from "react";
import { Layout } from 'antd';
import {Icon} from "Icon";
import { SiderProps } from 'antd/lib/layout/Sider';
import BaseMenu, { BaseMenuProps } from "components/menu";

const { Sider } = Layout;

export interface EpidemicSiderProps extends BaseMenuProps {
  siderProps?: SiderProps,
  menuConfig: any,
  menuProps: any,
}

const defaultSiderProps = {
  className: "epidemic-menu",
  trigger: null,
  collapsible: true,
  width: 200
};

const EpidemicSider: React.FunctionComponent<EpidemicSiderProps> = ({
  menuConfig,
  menuProps,
  siderProps
}) => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return <>
    <Sider collapsed={collapsed} {...{ ...defaultSiderProps, ...siderProps }}>
      <BaseMenu
        menuProps={{ mode: 'inline', ...menuProps }}
        menuConfig={menuConfig}
      />
    </Sider>
    <div className='epidemic-triggle'>
      <Icon
        type={collapsed ? 'icon-draw-right' : 'icon-draw-left'}
        onClick={toggleCollapse}
      />
    </div>
  </>;
  ;
}

export default EpidemicSider;