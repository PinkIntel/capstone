import html from "html-literal";
export default st => html`
  <div class="sessions-image"></div>

  <div class="pageheader">
    <h2>SESSIONS LIST</h2>
  </div>

  <div class="main">
    <h1>Sessions List</h1>
    <h4>
      Curious about your place in line? Here's our current client queue list!
    </h4>

    ${st.sessions.map((session, i) => {
      return `

        <div id ="sessionslistitem">
        <p>
          <strong>Client ${i}:</strong> ${session.name} | ${session.sessiontype}
        <p>
        </div>

    <br>
    `;
    })}
  </div>
  <hr />
`;
