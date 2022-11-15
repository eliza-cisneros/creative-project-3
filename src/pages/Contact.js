const Contact = () => {
  return (
    <div>
        <div class="main-section-container">
          <div class="header">
            <h1 class = "section">
              Contact Me
            </h1>
          </div>
            <div class="container">
            <div class="row justify-content-md-center align-items-center">
              <div class="col">
                <img id="contact-page-pic" src={require("./images/IMG_6809.JPG")} alt="familypic"/>
              </div>
            </div>
            </div>
            <div class="section info">
                <p> Together, families are strong (pun intended haha). I would love
                 to hear about your family traditions, jokes, or whatever makes 
                 your family strong. Message me at the email below or reach out
                 on Social Media.</p>
            </div>
            <div class="contact-info">
                <div class="row">
                    <div class="column">
                        <p class= "section">Email: ejcis.99@gmail.com </p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <a href="https://www.instagram.com/elizajane_99/">DadJokesNow Creator's Instagram</a>
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

export default Contact;