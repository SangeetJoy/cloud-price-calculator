import React from "react";
import "./index.css"
import Button from '@material-ui/core/Button';

const rowData = [
    {
        id: 1,
        mainText: "Thinking which cloud to choose",
        subText: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
        imageClassName: "image-container-1",
        isButtonPresent: false
    },
    {
        id: 2,
        mainText: "Try our cloud calculator",
        subText: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
        imageClassName: "image-container-2",
        isButtonPresent: true
    }

]

class LandingPage extends React.Component {
    render() {
        return (
            rowData.map(({ id, mainText, subText, imageClassName, isButtonPresent }) => {
                return (
                    <>
                        <div className="row-container" style={{ backgroundColor: id % 2 === 0 && "#f6f6f6" }}>
                            {id % 2 === 0 ?
                                <>
                                    <div className="text-container">
                                        <h2 className="main-text">{mainText}</h2>
                                        <p className="sub-text">{subText}</p>
                                        {isButtonPresent &&
                                            <div className="price-cal-button-container">
                                                <Button variant="contained" color="primary" className="price-cal-button">
                                                    Launch Calculator
                                                </Button>
                                            </div>}
                                    </div>
                                    <div className={imageClassName}></div>
                                </> : <>
                                    <div className={imageClassName}></div>
                                    <div className="text-container">
                                        <h2 className="main-text">{mainText}</h2>
                                        <p className="sub-text">{subText}</p>
                                        {isButtonPresent &&
                                            <div className="price-cal-button-container">
                                                <Button variant="contained" color="primary" className="price-cal-button">
                                                    Launch Calculator
                                                </Button>
                                            </div>}
                                    </div>
                                </>
                            }
                        </div>
                    </>
                )
            })
        )
    }
}
export default LandingPage;
