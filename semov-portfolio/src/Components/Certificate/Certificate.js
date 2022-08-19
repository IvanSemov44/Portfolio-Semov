import Carousel from "react-bootstrap/Carousel";
import "./Certificate.css"

const Certificate = () => {
    return (
        <div className="cert-div">
            <Carousel variant="dark" interval={null}>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 cert-img"
                        src="images/CSharpFundamentalsJanuary2020.jpeg"
                        alt="C# Fundamentals"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cert-img"
                        src="images/JSAdvancedSeptember2021.jpeg"
                        alt="JS Advanced"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 cert-img"
                        src="images/JSApplicationsFebruary2022.jpeg"
                        alt="Js Applications"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 cert-img"
                        src="images/HTMLCSSMay2022.jpeg"
                        alt="HTML and CSS"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 cert-img"
                        src="images/ReactJSJune2022.jpeg"
                        alt="React JS"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Certificate;