import React from 'react';
import './App.css';
import TodoCard from './components/TodoCard';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <TodoCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
