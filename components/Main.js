import * as views from "./views";
import html from "html-literal";

export default st => html`
  ${views[st.view](st)}
`;
// previous code below this line

// import * as views from "./views";

// export default () => `
// ${views["Home"]()}, ${views["About"]()}, ${views["Sessions"]()}, ${views[
//   "Packages"
// ]()}, ${views["BookASession"]()}, ${views["Contact"]()}, ${views[
//   "ShoppingCart"
// ]()};
// `;
