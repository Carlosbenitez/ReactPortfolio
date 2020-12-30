import React from "react"
import "./contactstyle.css"


function Contact() {
    function sendTo() {
        window.location.href = "mailto:carlosbenitez86753@yahoo.com?subject=" + document.getElementById('Subject').value + "&body=" +
            document.getElementById('Message').value
        window.alert("Thank you for your message!");
    }
    return (
        <>


            <div id="contentback">
                <h1>Contact Me!</h1>
                <hr />
                <form>

                    <div className="form-group col-md-6">
                        <label for="exampleFormControlInput1">Subject</label>
                        <input type="email" className="form-control" id="Subject" placeholder="Subject" />
                    </div>

                    <div className="form-group col-md-6">
                        <label for="exampleFormControlTextarea1">Message:</label>
                        <textarea className="form-control" id="Message" rows="8"></textarea>
                        <br />
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={sendTo}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact