import html from "html-literal";
export default st => html`
  <div class="sessions-image"></div>

  <h1>Sessions</h1>
  <p>Page unavailable. Please come back later!</p>

  ${st.sessions.map((session, i) => {
    return `This is submission number ${i}: Name: ${session.name} Phone: ${session.phone} Address: ${session.address} <br>`;
  })}
  <hr />
`;
