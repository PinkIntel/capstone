import * as views from "./views";

export default () => `
${views["Home"]()}, ${views["About"]()}, ${views["Sessions"]()}, ${views[
  "Packages"
]()}, ${views["BookASession"]()}, ${views["Contact"]()}, ${views[
  "ShoppingCart"
]()};
`;
