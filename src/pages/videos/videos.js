import React from "react"


function Videos() {
    const vidInfo = [
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
        { title: "REO Test", text: "This is a test to make sure I can upload videos here so please enjoy REO Speedwagon for now.", site: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", alt: "REO test video" },
    ]
    const renderVid = (card, index) => {
        return (
            <div className="col-lg-6">
                <div className="content" id="videoscontent" key={index}>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={card.site} allowfullscreen></iframe>
                    </div>
                    <h3 id="videoh3" ><span className="videostextbg">{card.title}</span></h3>
                    <section className="videostextbg">{card.text}</section>
                </div>
            </div>


        )
    }
    return (
        <>
            <h1 id="videoh1"><span id="videoh1bg">Some videos I made:</span></h1>
            <div className="main">
                <div id="contentback">
                    {/* card is imported here */}
                    <div className="row">
                        {vidInfo.map(renderVid)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Videos