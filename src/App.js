import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import BookListPage from './pages/BookListPage';
import BookFormPage from './pages/BookFormPage';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Book List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/book/new">Add Book</NavLink>
        <h1>Catalog Book</h1>
      </div>
      <Route exact path="/" component={BookListPage} />
      <Route exact path="/book/new" component={BookFormPage} />
      <Route exact path="/book/edit/:_id" component={BookFormPage}/>
      </Container>
      
    );
  }
}

export default App;
