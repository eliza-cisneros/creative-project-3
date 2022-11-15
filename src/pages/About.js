import React from 'react';
import ReactDOM from 'react-dom';
import familypic1 from './images/IMG-2680.jpg';

const About = () => {
  return (
      <div>
        <div class="main-section-container">
          <div class="header">
            <h1 class = "section">
              About Us
            </h1>
          </div>
            <div class="container">
            <div class="row justify-content-md-center align-items-center">
              <div class="col">
                <img src={require('./images/IMG-2680.jpg')} alt="familypic1" />
              </div>
              <div class="col">
                Family. That's what matters most to my dad and you can see it in
                the way he acts. Not only does he love his family, but he also 
                loves to see his family laugh, and that's where the dad jokes come
                in. I will admit, they don't alway get an immediate laugh (often times it 
                starts as an eyeroll) but he can't contain his smile, and when he can't,
                then the rest of us can't. So, in order to bring more smiles to more 
                families, I made this dad joke generator. Please smile and share 
                and enjoy together.
              </div>
            </div>
            </div>
        </div>
    
        <div class="section footer">
          <a href="https://github.com/eliza-cisneros/creative-project-3.git"> Check out Eliza's github repository here</a>
        </div>
      </div>
      );
};

export default About;