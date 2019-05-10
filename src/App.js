import React, { Fragment } from 'react';
import Button from './components/Button/';
import Callout from './components/Callout/';
import Container from './components/Container/';
import Header from './components/Header/';

function App() {
  return (
    <Fragment>
      <Header />
      <Container
        as="main"
        className="margin-t-500"
      >
        <Callout
          image="https://hireup.cdn.prismic.io/hireup/89e15301c28e6396927d85e38e9c5d5833ebab09_kyle_357-bonnie.png"
          linkHref="/"
          linkLabel="Find your connection"
          title="Disability support workers who love what you love"
        />
        
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
