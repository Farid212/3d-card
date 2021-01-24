import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import theImage from './assets/images/me.png';

ReactDOM.render(
  <React.StrictMode>
    <Card
      image={theImage}
      imageName="my image"
      cardTitle="Farid Hammouten"
      subTitle="Web Developer"
      medias={{
        twitter: "https://twitter.com/Faridh212",
        github: "https://github.com/Farid212",
        medium: "https://medium.com/@farid212",
        external: "https://www.farid212.dev/"
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
