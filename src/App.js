import logo from './logo.svg';
import './App.css';
import * as icons from './images';

function App() {
  return (
    <body>
  <div class="animated-intro" id="top-bar">
    <h1 id="title"><a href="/">Gabriel Pezzi Copat</a></h1>
    <nav id="navbar">
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Education</a></li>
        <li><a href="">Contact Me</a></li> 
      </ul>
    </nav> 
  </div>
  <div class="animated-intro" id="bottom-bar">
      <h1 id="title-bottom">Web Developer</h1> 
  </div>
  
  <main>
    <div class="first-content content-block">
      <div class="c1-wrap">
        <div class="first-content-title-wrapper">
          <h1 id="first-content-title">I am</h1>
        </div>
        <div class="the-text">
          <p>
            Currently graduating with a<span> MSc in Software Engineering</span>
          </p>
          <p>
            Experienced with using <span>React</span> & <span>Vite</span> to create <span>Progressive Web Apps</span> utilizing <span>RESTful apis</span>
          </p>
        </div>
      </div>    
    </div>
    <div class="second-content content-block">
      <img src={icons.reactIcon} alt="" class="img-logo"/>
      <img src={icons.viteIcon} alt="" id="vite" class="img-logo"/>
      <img src={icons.cssIcon} alt="" id="vite" class="img-logo"/>
      <img src={icons.htmlIcon} alt="" id="vite" class="img-logo"/>
      <img src={icons.jsIcon} alt="" id="vite" class="img-logo"/>
      <img src={icons.mariadbIcon} alt="" id="mariadb-icon" class="img-logo"/>
      <img src={icons.javaIcon} alt="" id="java-icon" class="img-logo"/>
      <img src={icons.springIcon} alt="" id="spring-icon" class="img-logo"/>
      <img src={icons.pythonIcon} alt="" id="spring-icon" class="img-logo"/>
    </div>
    <div class="third-content content-block">
        <h1 class="c3-title">Projects</h1>
        <article id="cafcass">
          <h2>Caffcas Cymru - Digital Work Tools</h2>
          <p>Progressive Web App used by Cafcass practicioners to work with children and young people to ascertain their views on family law and legal proceedings
          </p>
          <div class="third-technologies">
            <img src="./images/react-2.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/Vitejs-logo.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/js-icon.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/css-icon.svg" alt="" id="vite" class="img-logo"/>
          </div>
        </article>
        <article id="vzta"> 
          <h2>VZTA Smart Towns</h2>
          <p>Web Application allowing users to scanQR codes in various location in town centers arround Wales to earn points and badges<br/>
            Web Application using Java, Springboot and MariaDB.<br/>
          </p>
          <div class="third-technologies">
            <img src="./images/java-icon.svg" alt="" id="java-icon" class="img-logo"/>
            <img src="./images/spring-icon.svg" alt="" id="spring-icon" class="img-logo"/>
            <img src="./images/mariadb-icon.svg" alt="" id="mariadb-icon" class="img-logo"/>
            <img src="./images/css-icon.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/html-icon.svg" alt="" id="vite" class="img-logo"/>
          </div>
        </article>
        <article id="voiceGame">
          <h2>Accessible Game for Dual Disability</h2>
          <p>Creation of a mental math game that can be played in its entirety through voice control and sound queues, in a manner accessible to those suffering from both visual and manual dexterity realted disabilities<br/>
          </p>
          <div class="third-technologies">
            <img src="./images/css-icon.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/html-icon.svg" alt="" id="vite" class="img-logo"/>
            <img src="./images/js-icon.svg" alt="" id="vite" class="img-logo"/>
          </div>
        </article>
    </div>

    <div class="final-content content-block">
      <h2>Test</h2>
    </div>
    
    <footer>
      <h1 id="title-footer">Web Developer</h1> 
    </footer>
  </main>
</body>
  );
}

export default App;
