import React, { Fragment } from 'react';
import Button from './components/Button/';
import Container from './components/Container/';
import Header from './components/Header/';

function App() {
  return (
    <Fragment>
      <Header />
      <Container as="main">
        <div>
          <Button className="margin-r-500 margin-t-500">
            Primary
          </Button>

          <Button
            className="margin-r-500 margin-t-500"
            type="secondary"
          >
            Secondary
          </Button>
        </div>

        <div>
          <Button
            className="margin-r-500 margin-t-500"
            shape="rounded"
          >
            Primary Rounded
          </Button>

          <Button
            className="margin-r-500 margin-t-500"
            shape="rounded"
            type="secondary"
          >
            Secondary Rounded
          </Button>
        </div>

        <div>
          <Button
            className="margin-r-500 margin-t-500"
            size="large"
            type="primary"
          >
            Primary Large
          </Button>

          <Button
            className="margin-r-500 margin-t-500"
            size="large"
            type="secondary"
          >
            Secondary Large
          </Button>
        </div>
        
        <div>
          <Button
            className="margin-r-500 margin-t-500"
            shape="rounded"
            size="large"
            type="primary"
          >
            Primary Large Rounded
          </Button>

          <Button
            className="margin-r-500 margin-t-500"
            shape="rounded"
            size="large"
            type="secondary"
          >
            Secondary Large Rounded
          </Button>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
