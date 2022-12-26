import React from 'react'
import '../css/index.css'
import styled from 'styled-components'
function CategoriesTab(props) {


    const Decoration = styled.button`
    height: 20%;
    width: 100%;
    background-color: ${props.dato.color};
    `;

    var showCurrent
    var showPrevious
    if (props.display === "daily") {
        showCurrent = props.dato.timeframes.daily.previous
        showPrevious = props.dato.timeframes.daily.previous
    }
    if (props.display === "weekly") {
        showCurrent = props.dato.timeframes.weekly.previous
        showPrevious = props.dato.timeframes.weekly.previous
    }
    if (props.display === "monthly") {
        showCurrent = props.dato.timeframes.monthly.previous
        showPrevious = props.dato.timeframes.monthly.previous
    }

    console.log(showPrevious)
    return (



        <div className='Datos'>

            <div className='decoration'>

            </div>

            <Decoration> </Decoration>

            <div className='information'>
                <div className='category'>
                    <div className='title'>
                        {props.dato.title}
                    </div>
                    <div>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>

                    </div>
                </div>
                <div className='hours'>
                    {showCurrent}hrs
                </div>
                <div className='lasthours'>

                    Last-week - {showPrevious}
                </div>
            </div>



        </div>
    )
}

export default CategoriesTab