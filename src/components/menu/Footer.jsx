import React from 'react';
import sec from '../../sec.png';
import oct from '../../oct.png';

function Footer() {
    const footerStyle = {
        padding: '0 0 0 10px',
        textAlighn: 'left',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        zIndex: '100',
        flexShrink: '0',
    };

    const pStyle = {
        margin: '0.2rem 0',
        fontSize: '0.9rem',
    };

    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        ':hover': {
            textDecoration: 'underline',
        },
    };

    const imgStyle = {
        width: '0.8rem',
        height: '0.8rem',
        margin: '0 0.2rem 0 0',
    };

    return (
        <footer style={footerStyle}>
            <p>Developed By:</p>
            <p style={pStyle}>
                <a
                    href="https://github.com/sfu-software-engineering-club/Macm316"
                    style={linkStyle}
                >
                    <img src={sec} style={imgStyle} alt="team_logo" />
                    SFU Software Engineering Club
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/jiin-kim109" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @jiin-kim109
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/pisache" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @pisache
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/darshea" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @darshea
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/shp2018" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @shp2018
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/TommyTroll123" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @TommyTroll123
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/heyj0jo" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @heyj0jo
                </a>
            </p>
            <p style={pStyle}>
                <a href="https://github.com/iainchun" style={linkStyle}>
                    <img src={oct} style={imgStyle} alt="github_logo" />
                    @iainchun
                </a>
            </p>
        </footer>
    );
}

export default Footer;
