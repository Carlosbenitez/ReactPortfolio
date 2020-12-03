import React from "react"

function Homecards() {
    const cardInfo =[
        {image:"", title:"", text:""},
        {image:"", title:"", text:""},
        {image:"", title:"", text:""},
        {image:"", title:"", text:""},
        {image:"", title:"", text:""},
    ];

    const renderCard = (card, index) => {
        return(                <div className="col-sm-12 col-md-4 col-lg-4">
        <div className="content" key={index}>
            <img className="profilepics" src={card.image} alt="LinkedIn screenshot" />
            <h3>{card.title}</h3>
            <section>{card.text}</section>
        </div>
    </div>)
    }

    return (
        <>
        <div className="row">
        {cardInfo.map(renderCard)}
            </div>
        </>
    )
}

export default Homecards