import { Spinner } from '@hospitalrun/components'
import React, { Suspense } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HospitalRun from './HospitalRun'
import Login from './login/Login'
import store from './shared/store'

const App: React.FC = () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spinner color="blue" loading size={[10, 25]} type="ScaleLoader" />}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={HospitalRun} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </div>
)

export default App
