import React from 'react'
import { IconContext } from 'react-icons'
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'

const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
positopn: relative;
height: 100vh;

`;
const Container = styled.div`
position: absolute;
top: 30%;
cursor: pointer
`;
const Wrap = styled.div`

p {
    color: white
}
`;

export default function Accordion({ content }) {


    return (
        <div className='accordion_section'>
            <button className='accordion'>
                <p>{content.contentTitle}</p>
            </button>
            <div className='accordion_content'>
                {content.subMenu.map((item) => {
                    console.log(item)
                    return (
                        <div
                            className='accordion text'
                            dangerouslySetInnerHTML={{ __html: item.subTitle }}
                        >

                        </div>
                    )
                })}

            </div>
        </div>
    )
}
