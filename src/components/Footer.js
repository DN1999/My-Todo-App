import React from 'react'

export const Footer = () => {
    let footerStyle = {
        // position:"absolute",
        minPosition:"70vh",
        top:"100vh",
        width: "100%",
        border: "3px solid green"
    }
    return (
        <div>
            <footer className="bg-dark text-light py-2" style={footerStyle}>
                <p className="text-center">Copyright & copy by DNaphade</p>
            </footer>
        </div>
    )
}
