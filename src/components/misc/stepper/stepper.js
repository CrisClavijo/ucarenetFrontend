import React, { useRef } from 'react';
import { Button } from 'primereact/button';

import './stepper.scss'

function growingSteps(i, activeIndex, lastIndex, _numberSteps, list){
    if (i < activeIndex - 1 || lastIndex) {
        return(
            <li key={i} className="bt active">
                <div className="text-style filled">
                    <span className='color-active'>
                    <i className="pi pi-check" style={{'fontSize': '1em'}}></i>
                    </span>
                    {list && (
                        <span className='p-steps-title title-active-care'>
                            {list[i].label}
                        </span>
                    )}
                </div>
            </li>
        )
    }

    if (i === activeIndex - 1) {
        return(
            <li key={i} className="bt current">
                <div className="text-style filled">
                        <span className='color-current'>
                        </span>
                    {list && (
                        <span className='p-steps-title title-current-care'>
                            {list[i].label}
                        </span>
                    )}
                </div>
            </li>
        )
    }

    if (i > activeIndex - 1) {
        return(
            <li key={i} className="bt next">
                <div className="text-style">
                    <span className='color-next'></span>
                    {list && (
                        <span className='p-steps-title title-next-care'>
                            {list[i].label}
                        </span>
                    )}
                </div>
            </li>
        )
    }
}

const Steps =({ numberSteps, activeIndex, lastIndex, list }) =>{
    let renderSteps = [];

    if (numberSteps) {
        if (numberSteps > 2) {
            for (let i = 0; i < numberSteps; i++) {
                renderSteps.push(
                    growingSteps(i,activeIndex, lastIndex, numberSteps, list)
                )
            }
        } else {
            for (let i = 0; i < 2; i++) {
                renderSteps.push(
                    growingSteps(i,activeIndex, lastIndex, numberSteps, list)
                )
            }
        }
    }

    return renderSteps;
}

const Stepper=(props) =>{

    const progressBar = useRef(null)

    let { model, activeIndex, setActiveIndex, lastIndex, className, list, ...rest } = props;
    let numberSteps = 0;

    if (!activeIndex)
        activeIndex = 1


    if (model) {
        numberSteps = Array.isArray(model) ? model?.length : model;
        if(numberSteps < 2)
            numberSteps = 2;

        if (activeIndex < 1)
            activeIndex = 1
        if (activeIndex > numberSteps)
            activeIndex = numberSteps
    }

    else
        numberSteps = 2;


    React.useEffect(() => {
        progressBar.current.style.setProperty('--overlaySteps', numberSteps)
    })
    const backStepper = () => {
        props.setActiveIndex(activeIndex-1);
    }
    return (
        <div {...rest} className={(className ? className : "")}>
            <div className="wrapper-progressBar">
                <ul className="progressBar d-flex" ref={progressBar}>
                    { (props.activeIndex > 1 && props.activeIndex < list.length + 1) && (
                        <Button label="< BACK" className="p-button-danger p-0 p-button-text btn-back ms-auto" onClick={backStepper}/>
                    )}
                    <Steps numberSteps={numberSteps} activeIndex={activeIndex} lastIndex={lastIndex} list={list} />
                </ul>
            </div>
        </div>
    )
}


export default Stepper;