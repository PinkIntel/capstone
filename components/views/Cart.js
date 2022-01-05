import html from "html-literal";
import unavailableX from "/assets/x_svg.svg";
export default () => html`
  <div class="cart-image"></div>

  <div class="pageheader">
    <h2>SHOPPING CART</h2>
  </div>

  <div class="main">
    <img
      src="${unavailableX}"
      alt="image of an X for not available"
      height="300"
    />

    <h4>Page Unavailable! Please come back later!</h4>
  </div>
  <hr />
`;
