import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import {ALayout} from 'components';
import antdConfig from 'config/antdConfig';
import { ROUTES } from 'config/routes';


export interface EpidemicAppProps { }

const GlobalEventContext = React.createContext({});

const App: React.FunctionComponent<EpidemicAppProps> = (props) => {

  return (
    <ConfigProvider {...antdConfig}>
      <GlobalEventContext.Provider value={props}>
        <ALayout>
            <Switch>
              {ROUTES.map(({ components, ...props }, index) =>
                <Route key={`${props.path}${index}`} {...props}>
                  {components}
                </Route>
              )}
            </Switch>
        </ALayout>
      </GlobalEventContext.Provider>
    </ConfigProvider>
  );

}

export default App;