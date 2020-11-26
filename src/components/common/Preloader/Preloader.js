import React from 'react';
import preloader from "../../../assets/preloader.svg";

let Preloader = (props) =>{
    return <div>
        <img src={props.isFetching ?preloader: null}/>
    </div>
};

export default Preloader;