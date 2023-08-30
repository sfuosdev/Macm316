import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    background-image: linear-gradient(
        DarkGoldenRod,
        Chocolate,
        Chocolate,
        Chocolate
    );
    color: white;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    text-shadow: 0 0 2px black;
`;

const Credit = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Image = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

function Header() {
    return (
        <Wrapper>
            <h3>Macm316 - Numerical Method Visualizer</h3>
            <a
                href="https://github.com/sfuSwSo/Macm316/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                <Credit>
                    <Image
                        alt=""
                        src={`${process.env.PUBLIC_URL}/github-mark.svg`}
                    />
                    <h3>Developed By SFU SwSo</h3>
                </Credit>
            </a>
        </Wrapper>
    );
}

export default Header;
