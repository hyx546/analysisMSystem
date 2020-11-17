import React from "react";
import { ASider } from "components";
import { DEFAULT_OPEN_KEY, menuConfig } from "config/menu";

const SiderWrapper = () => {

  return <ASider
    {...{
      menuConfig,
      menuProps: { defaultOpenKeys: DEFAULT_OPEN_KEY, className: 'epidemic-sider-menu' },
    }}
  />
}

export default SiderWrapper;