import html from "html-literal";
import seniorPortrait from "/assets/christian-ferrer-aK5Dt6L6_hQ-unsplash.jpg";
import flowerGirl from "/assets/james-resly-_H5Tnj7e1hc-unsplash.jpg";
import weddingCouple from "/assets/nyana-stoica-MYGWB1KpwBQ-unsplash.jpg";
import familyPhoto from "/assets/nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg";
import businessMan from "/assets/pexels-liliana-drew-8555509.jpg";
import momAndSon from "/assets/paige-cody-bOVZ_f3fbQM-unsplash.jpg";
import smallFamily from "/assets/jessica-rockowitz-6c4Uhhe68yQ-unsplash.jpeg";
import momAndChild from "/assets/momandchild.jpg";

export default () => html`
  <div class="services-image"></div>

  <div class="pageheader">
    <h2>SERVICES</h2>
  </div>

  <div class="main">
    <div class="serviceslist">
      <div id="servicebox">
        <h3>Individual</h3>
        <!-- <p>Individual</p> -->
      </div>

      <div id="servicebox2">
        <h3>Couples</h3>
      </div>

      <div id="servicebox3">
        <h3>Wedding</h3>
      </div>

      <div id="servicebox4">
        <h3>Baby / Maternity</h3>
      </div>

      <div id="servicebox5">
        <h3>Business</h3>
      </div>

      <div id="servicebox6">
        <h3>Custom</h3>
      </div>
    </div>
  </div>
  <hr />
`;
