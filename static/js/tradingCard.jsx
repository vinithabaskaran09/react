'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill:{props.skill} </h2>
    </div>
  );
}

ReactDOM.render(
  <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
  document.querySelector('#balloonicorn'),
);

ReactDOM.render(
  <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
  document.querySelector('#float'),
);

ReactDOM.render(
  <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
  document.querySelector('#llambda'),
);

ReactDOM.render(
  <TradingCard name="polymorphism" skill="eating icecream" imgUrl="/static/img/polymorphism.jpeg" />,
  document.querySelector('#polymorphism'),
);


ReactDOM.render(
  <TradingCard name="seedpy" skill="riding the bi-cycle" imgUrl="/static/img/seedpy.jpeg" />,
  document.querySelector('#seedpy'),
);

