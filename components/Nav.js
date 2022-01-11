import html from "html-literal";
import mainLogo from "/assets/fulllogo_colored.svg";
import logoIcon from "/assets/icon_only.svg";
import shoppingCartIcon from "/assets/shoppingcarticon.svg";

export default Links => `
<div class="navigation-bar">
    <div class="navigation">
        <nav>
            <div id="responsive-logo">
                <a href="./Home"><img src="${logoIcon}" alt="wandering photographer logo (icon only)"></a>
            </div>
            <div id ="logo">
            <a href="./Home"><img src="${mainLogo}" alt="wandering photographer logo"></a>
            </div>
            <i class="fas fa-bars"></i>
            <ul class="hidden--mobile">
                ${Links.map(
                  link =>
                    `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
                ).join("")}

            </ul>
        </nav>
    </div>
</div>
`;

//   <li><a href="about.html">ABOUT</a></li>
//               <li><a href="#">SESSIONS</a></li>
//               <li><a href="#">PACKAGES</a></li>
//               <li><a href="booksession.html">BOOK A SESSION</a></li>
//               <li><a href="contact.html">CONTACT</a></li>
//               <li><a href="#"><img src ="${shoppingCartIcon}" alt ="shopping cart icon" width="35px"></a></li>
