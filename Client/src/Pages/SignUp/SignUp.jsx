import "./SignUp.css"

export const SignUp = () => {
    return (
        <div className="signUp-page">
            <div className="card-box">
                <div className="card">
                    <div className="image-holder">
                        <img src="assets/startup.svg" alt="start-up" />
                    </div>
                    <p className="card-name">
                       <strong>STARTUP</strong>
                    </p>
                </div>
                <div className="card">
                    <div className="image-holder">
                        <img src="assets/investor.svg" alt="investor" />
                    </div>
                    <p className="card-name">
                       <strong>INVESTOR</strong>
                    </p>
                </div>
                <div className="card">
                    <div className="image-holder">
                        <img src="assets/job-hiring.svg" alt="job-hiring" />
                    </div>
                    <p className="card-name">
                       <strong> HIRING</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}