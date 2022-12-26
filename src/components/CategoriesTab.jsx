import React from 'react'
import '../css/index.css'
import styled from 'styled-components'
function CategoriesTab(props) {


    const Tarjetitas = styled.div
    `
    background-color: ${props.dato.color};
    height: 85%;
    width: 85%;
    // background-color: hsl(235, 46%, 20%);
    border-radius: 20px;

    @media (max-width: 638px) {
        width: 95%;
      }

    `
    
    const Decoration = styled.div`
    height: 20%;
    width: 100%;
    // background-color: ${props.dato.color};
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
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


    return (

        <Tarjetitas> 
            <Decoration>
                <div>
                    <img className="imagenDeco" src={`./images/icon-${(props.dato.title).toLowerCase()}.svg`} alt="" /> </div>
            </Decoration>

                <div className='information'>
               
                    <div className='category'>
                        <div className='title'>
                            {props.dato.title}
                        </div>
                        <div>
                            <img src="./images/icon-ellipsis.svg" alt="" />
                        </div>
                    </div>
                    <div className='hourandlast'> 
                    <div className='hours'>
                        {showCurrent}hrs
                    </div>
                    <div className='lasthours'>

                        Last-week - {showPrevious}hrs
                    </div>
                    </div>
                </div>


        </Tarjetitas>
    )
}

export default CategoriesTab