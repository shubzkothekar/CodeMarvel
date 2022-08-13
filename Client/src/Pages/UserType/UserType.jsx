import "./UserType.css"

const cardAssets = [
    {
        name: "STARTUP",
        image_url: "startup.svg"
    },
    {
        name: "INVESTOR",
        image_url: "investor.svg"
    },
    {
        name: "MENTOR",
        image_url: "professor.svg"
    },
    {
        name: "INCUBATOR",
        image_url: "incubator.svg"
    },
    {
        name: "ACCELERATOR",
        image_url: "accelerator.svg"
    },
    {
        name: "CORPORATE",
        image_url: "corporate.svg"
    }
]

export const UserType = () => {
    return (
        <div className="signUp-page">
            <div className="card-box">
               {
                cardAssets.map(({name, image_url}) => {
                    return (
                        <div className="card">
                            <div className="image-holder">
                                <img src={`assets/${image_url}`} alt="start-up" />
                            </div>
                            <p className="card-name">
                            <strong>{name}</strong>
                            </p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}