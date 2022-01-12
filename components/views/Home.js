import html from "html-literal";
import seniorPortrait from "/assets/christian-ferrer-aK5Dt6L6_hQ-unsplash.jpg";
import flowerGirl from "/assets/james-resly-_H5Tnj7e1hc-unsplash.jpg";
import weddingCouple from "/assets/nyana-stoica-MYGWB1KpwBQ-unsplash.jpg";
import familyPhoto from "/assets/nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg";
import businessMan from "/assets/pexels-liliana-drew-8555509.jpg";
import momAndSon from "/assets/paige-cody-bOVZ_f3fbQM-unsplash.jpg";
import smallFamily from "/assets/jessica-rockowitz-6c4Uhhe68yQ-unsplash.jpeg";
import momAndChild from "/assets/momandchild.jpg";
import coupleOne from "/assets/allison-heine-_5_85Zqqsm4-unsplash.jpeg";
import coupleTwo from "/assets/romane-van-troost-sn61a37mbUM-unsplash.jpeg";

export default () => html`
  <div id="main-content">
    <div class="homepageimage">
      <!-- <img src="../images/nathan-dumlao-bhPJ7-AdgFE-unsplash.jpeg" alt="image of a woman holding a baby, standing in a field of tall grass and trees, and mountains in the background"> -->
    </div>

    <div class="pageheader">
      <h2>WHO WE ARE</h2>
    </div>
    <div class="main">
      <p>
        The Wandering Photographer is a photography group that travels to you,
        the client. We believe that you, our client, don't have to go through
        the hassle of finding a place for your next photoshoot. We're here to
        take care of that for you! From single portraits to family portraits,
        we're here to provide the best possible photography services to you.
      </p>
    </div>

    <div class="pageheader">
      <h2>GALLERY</h2>
    </div>

    <div class="gallery">
      <ul>
        <li>
          <img
            src="${seniorPortrait}"
            alt="image of a girl with brown hair, smiling, and surrounded by bushes"
            height="300"
          />
        </li>
        <li>
          <img src="${flowerGirl}" " alt="image of a girl black hair, smiling,
          and with a sunflower crown" height="300">
        </li>
        <li>
          <img
            src="${weddingCouple}"
            alt="bride and groom standing on a balcony, looking out in the distance"
            height="300"
          />
        </li>
        <li>
          <img
            src="${familyPhoto}"
            alt="image of a family in a field of orange flowers"
            height="300"
          />
        </li>
        <li>
          <img
            src="${businessMan}"
            alt="image of a man in a suit, smiling at the camera"
            height="300"
          />
        </li>
        <li>
          <img
            src="${momAndSon}"
            alt="image of a mother and son, sitting on a couch"
            height="300"
          />
        </li>
        <li>
          <img
            src="${smallFamily}"
            alt="image of a husband and wife, holding a baby"
            height="300"
          />
        </li>
        <li>
          <img
            src="${momAndChild}"
            alt="image of a black woman hugging her child"
            height="300"
          />
        </li>
        <li>
          <img
            src="${coupleOne}"
            alt="image of a black couple in a rocky area, dressed in fancy clothing"
            height="300"
          />
        </li>
        <li>
          <img
            src="${coupleTwo}"
            alt="image of a couple hugging in a corn field"
            height="300"
          />
        </li>
        <!-- <li><div class="galleryContainer"></div></li> -->
      </ul>
    </div>

    <div id="session-button">
      <h4>INTERESTED IN HIRING US?</h4>
      <a href="https://wanderingphotographer.netlify.app/Forms" target="_blank"
        ><p>BOOK A SESSION</p></a
      >
    </div>
  </div>

  <hr />
`;
