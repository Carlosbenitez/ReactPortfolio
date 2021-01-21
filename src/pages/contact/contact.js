import React from "react"




function Contact() {
    function sendTo() {
        window.location.href = "mailto:carlosbenitez86753@yahoo.com?subject=" + document.getElementById('Subject').value + "&body=" +
            document.getElementById('Message').value
        window.alert("Thank you for your message!");
    }

    return (
        <>


            <div id="contentback">
                <h1 id="contacth1"><span id="contacth1bg">Contact Me!</span></h1>
                <hr />
                <form id="contactform">
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlInput1" className="contactlabels">Subject</label>
                        <input type="email" className="form-control" id="Subject" placeholder="Subject" />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="contactlabels">Message:</label>
                        <textarea className="form-control" id="Message" rows="8" placeholder="Subject"></textarea>
                        <br />
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" id="contactbutton"onClick={sendTo}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact