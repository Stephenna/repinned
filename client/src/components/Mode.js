import React, {useState} from "react";


const Mode = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(false)
    const mode = () => {
        setToggle(!toggle)
        setToggleIcon(!toggleIcon)
    }
    let moon = 'mapbox://styles/mapbox/dark-v9';
    let sun = 'mapbox://styles/mapbox/streets-v11';
    return (
        <div>
            <button onClick={mode}>{toggleIcon ? '🌞' : '🌚'}</button>
        </div>
    )
}

export default Mode
