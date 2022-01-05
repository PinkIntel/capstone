import html from "html-literal";

import backToTopArrow from "/assets/arrow_upward_white_24dp.svg";
import facebookIcon from "/assets/facebook_svg.svg";
import instagramIcon from "/assets/instagram_svg.svg";
import twitterIcon from "/assets/twitter_svg.svg";

export default st => `
<footer>
    <div class="footer">
      <div class="footer-left">

      <p>
          <br>Capstone by Julliette H. &copy; 2021
          <br>The Wandering Photographer
          <br> 1234 Creative Ave.
          <br>Sunnyville, CA 90210
      </p>
      </div>

      <div class="footer-middle">
          <p>
              <br><a href="https://julliettehuynh.myportfolio.com" target="_blank">Check out my portfolio!</a>
              <br><a href="https://fontawesome.com/v5.15/icons/bars?style=solid" target="_blank">Hamburger icon</a>
              <br><a href="https://www.pexels.com/api/" target="_blank">API Photos provided by Pexels</a>
              <br><a href="https://www.unsplash.com/" target="_blank">Other photos provided by Unsplash</a>
          </p>
          </div>


      <div class="footer-right">
          <ul>
              <li><img src="${facebookIcon}" alt="facebook button"></li>
              <li><img src="${instagramIcon}" alt="instagram button"></li>
              <li><img src="${twitterIcon}" alt="twitter button"></li>
          </ul>
      </div>

      <div id ="backtotop">
          <a href="#"><img src="${backToTopArrow}"></a>
      </div>
    </div>
</footer>
`;
