import generateStore from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import Layout from './components/Layout';

import './App.css';

function App() {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/edit/:id" component={Edit}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
