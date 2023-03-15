import * as React from 'react';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
  {
    name: 'Random Name #3',
    description: 'Bye World!',
  },
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Carousel
        swipe={true}
        autoPlay={false}
        indicators={false}
        cycleNavigation={true}
        navButtonsAlwaysInvisible={true}
        fullHeightHover={true}
        animation="slide"
        duration={400}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper className="main-bkg">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
