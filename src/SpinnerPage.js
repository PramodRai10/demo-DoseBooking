import React from 'react'
import LoadingOverlay from "react-loading-overlay";
import "./SpinnerPage.css";

function SpinnerPage() {
    return (
        <div className="darkBg">
            <LoadingOverlay
                active={true}
                // spinner={<BounceLoader />}
                spinner={true}
                text="Please Hold On, Submitting your details..."
            >
                {/* <p>Some content or children or something.</p> */}
            </LoadingOverlay>
        </div>
    )
}

export default SpinnerPage
