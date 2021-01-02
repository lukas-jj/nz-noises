import ReactPlayer from "react-player"

import { useState } from 'react'

function Sound(props) {

    return (

        <div className="Sound">
            <ReactPlayer height="130px"
                url={props.url}
            />
            {      console.log(ReactPlayer)
            }      </div>
    )
}

export default Sound;
