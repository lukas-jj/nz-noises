import ReactPlayer from "react-player"


function Sound(props) {

    return (

        <div className="Sound">
            <ReactPlayer className="sound-block" width="80%" height="130px"
                url={props.url}
            />
            {      console.log(ReactPlayer)
            }      </div>
    )
}

export default Sound;
