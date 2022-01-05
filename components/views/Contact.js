import html from "html-literal";
export default () => html`

   <div id="main content">
        <div class="contactus-image">
        </div>
        <div class="pageheader">
    <h2>CONTACT US</h2>
  </div>

        <div class="main">
            <h1>Contact Us</h1>
            <h4>Got a question for us? Or just want to say hello? We'd love to hear from you!</h4>
        </div>

        <div id ="contact-form">
            <div id="form-elements">
                <form action="https://formspree.io/f/mknynrol" method="POST">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Full Name" />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="janedoe@email.com" />
                    </div>

                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div>
                        <label for="msg">Enter your message:</label>
                        <br>
                        <textarea name="msg" id="msg" cols="50" rows="10"></textarea>
                    </div>

                    <div>
                        <label for="marketing">How did you hear about us?</label>
                        <select name="marketing" id="marketing">

                            <option value="social">Social Media (FB, Twitter, Instagram)</option>
                            <option value="github">Online Portfolio (GitHub)</option>
                            <option value="search">Search Engine</option>
                            <option value="email">Email</option>
                            </optgroup>
                            <option value="referral">Personal referral</option>
                            </optgroup>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>




    </div>

    <hr/>
`;
