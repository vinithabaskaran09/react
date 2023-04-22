'use strict';

function Homepage() {
  return (
  <React.Fragment> 
    <p>Welcome!</p>
    <a href="/cards"> Let's take you to the cards! </a>
    <div><img src="/static/img/balloonicorn.jpg" /></div>
    
  </React.Fragment> 
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
