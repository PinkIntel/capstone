import html from "html-literal";
import ceoPic from "/assets/ficticiousceo.jpeg";
import coCeoPic from "/assets/ficticiouscoceo.jpeg";
import editorPic from "/assets/ficticiouseditor.jpeg";
import makeupArtistPic from "/assets/ficticiousassistant.jpg";
import setExpertPic from "/assets/ficticiousworker.jpeg";
import videographerPic from "/assets/ficticiousvideographer.jpeg";
import corgi from "/assets/ficticiousdog.jpeg";

export default () => html`
  <div id="main content">
    <div class="about-image">
      <!-- <img src="../images/nathan-dumlao-bhPJ7-AdgFE-unsplash.jpeg" alt="image of a woman holding a baby, standing in a field of tall grass and trees, and mountains in the background"> -->
    </div>

    <div id="about-main">
      <h1>Meet the Wandering Team!</h1>

      <div class="team-member">
        <li>
          <img src="${ceoPic}" alt="photo of WP Ceo" />
        </li>
        <li>
          <h3>Claire Carpenter (aka CC), CEO of WP, Lead Photographer</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img src="${coCeoPic}" alt="photo of WP Co-CEO" />
        </li>
        <li>
          <h3>
            Aaron Carpenter (aka CC), Co-CEO of WP, Accountant, also Claire's
            hubby.
          </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img
            src="${editorPic}"
            alt="photo of Assistant Photographer and Editor"
          />
        </li>
        <li>
          <h3>Mariyah Washington, Graphic Designer & Editor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img src="${makeupArtistPic}" alt="photo of WP Makeup Artist" />
        </li>
        <li>
          <h3>Lisa Wong, Makeup Artist & Social Manager</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img src="${setExpertPic}" alt="photo of WP Set & Lighting Expert" />
        </li>
        <li>
          <h3>Mike Smith, Set & Lighting Expert</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>
      <div class="team-member">
        <li>
          <img src="${videographerPic}" alt="photo of Lead Videographer" />
        </li>
        <li>
          <h3>Jakob Williams, Videographer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img src="${corgi}" alt="photo of WP Carly the Corgi" />
        </li>
        <li>
          <h3>Carly, Emotional Support Animal, Professional Cuddle Buddy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales lectus efficitur, cursus sapien in, vulputate ipsum. In
            sollicitudin nibh in fringilla aliquet. Aenean bibendum ornare elit
            et maximus. Nulla in condimentum lacus. Vestibulum dapibus, dui ut
            vulputate tempor, turpis eros eleifend ipsum, ac tincidunt turpis
            ipsum id urna. Morbi sed vestibulum ex. Fusce non pharetra magna,
            vitae mattis tellus.
          </p>
        </li>
      </div>
    </div>
  </div>

  <hr />
`;
