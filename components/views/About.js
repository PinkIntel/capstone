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
    <div class="pageheader">
    <h2>MEET THE WANDERING TEAM</h2>
  </div>
    <div id="about-main">

      <div class="team-member">
        <li>
          <img src="${ceoPic}" alt="photo of WP Ceo" />
        </li>
        <li>
          <h3>Claire Carpenter (aka CC), CEO of WP, Lead Photographer</h3>
          <br />
          <p>
            Claire is a photographer born and raised from California. She went
            to Unicorn Land University and earned her degree in photography back
            in 2012. She specializes in portraits, couple photos,
            baby/maternity, and landscape photography.

            <blockquote>"My favorite part of being a photographer is meeting new people and being able to capture beautiful and authentic moments of them." - CC, CEO</blockquote>
          </p>
        </li>
      </div>

      <div class="team-member">
        <li>
          <img src="${coCeoPic}" alt="photo of WP Co-CEO" />
        </li>
        <li>
          <h3>
            Aaron Carpenter, Co-CEO of WP, Accountant, also Claire's hubby.
          </h3>
          <br />
          <p>
            Aaron was born in Canada and moved to California when he was 16 years old. He met Claire when he attended college, and he got his degree in accounting, marketing and finance in 2012. After college, he decided to join forces with his wife and help her with book-keeping and whatever else involves money for the business. Also known as the "Number Guy" in this group, he helps keep the business in line and running smoothly. He also enjoys going on hikes and reading the comic section of the newspaper.
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
            Mariyah was born and raised in Chicago, Illinois, and met was Claire's roommate in college. She earned her degree in Graphic Design and Editorial Design, and was in the same graduating class as the CEO! She loves to design marketing and advertising material, as well as touch up photos. She also is married and has a pet cat named Dory.
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
            Lisa was born in China and moved California to learn more about cosmetology and makeup. Her career started out in the modeling industry, where she helped with special effects makeup and also on studio sets. Lisa joined the team in 2015, since she loves to travel and wants to see more of the world.
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
            Mike "Mikey" Smith was born in New York, and studied at Cookie Monster University to earn his degree in Lighting Design & Production. Mikey met the team when he came along with his sister to a photography convention in 2013, and since then he's been the expert to help the team create beautifully lit photos.
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
            Jakob "Jake" was born and raised in Ohio. He is a self-taught videographer and earned multiple certifications through the World Wide Web. The team found him from his Youtube channel, and immediately wanted him to be a part of the Wandering family. Jake loves waterfalls and being the funniest guy in the team.
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
            Carly was adopted in 2017 when the team found her in a box at a gas station. Who would want to abandon this cutie? She was trained to be an ESA and she helps the team and clients stay in their zen mode, especially when the weather gets tough. She also loves snuggles, cuddles, and doggy cookies for treats.
          </p>
        </li>
      </div>
    </div>
  </div>

  <hr />
`;
