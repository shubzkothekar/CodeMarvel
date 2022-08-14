import "./Card.css"
export const Card = () => {
    return (
        <div
            className="card"
            onClick={() => {
                window.location.href = "/basic-info";
            }}
        >
            <div className="image-holder">
                <img src={`assets/ngo.svg`} alt="start-up" />
            </div>
            <div className="card-contents">
                <small className="business-category">
                    Non-Profit Organization
                </small>
                <h3 className="business-name">
                    Aashmaan Foundation
                </h3>
                <p className="business-desc">
                    a small desc about aashman foundation a small desc about aashman foundation
                </p>
                <div className="fund-info">
                    <div className="collection-info">
                    <div className="collected">
                        <strong>Collected :</strong> 
                        <small>50</small>
                    </div>
                    <div className="remaining">
                    <strong>Remaining :</strong>
                        <small>50</small>
                    </div>
                    </div>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" readOnly/>
                </div>
                <button className="btn-fundraise">
                    <strong>Fundraise</strong>
                </button>
            </div>
        </div>
    )
}