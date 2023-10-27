import React from 'react';
import { Card as BootstrapCard, CardBody, CardTitle, CardText } from 'reactstrap';

function Card(props) {
  return (
    <BootstrapCard>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.children}</CardText>
      </CardBody>
    </BootstrapCard>
  );
}

export default Card;
