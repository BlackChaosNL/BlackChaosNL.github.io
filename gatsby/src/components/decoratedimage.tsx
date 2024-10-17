import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const DecoratedImage = () => {
    return (
        <>
            <StaticImage 
                src="../images/pic.png" 
                alt="My picture" 
                width={300} 
                height={300} 
                style={{
                    borderRadius: "50%",
                    border: "1px solid #e35c38",
                }} 
            />
        </>
    )
}

export default DecoratedImage;