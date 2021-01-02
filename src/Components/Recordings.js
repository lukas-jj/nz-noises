import Sound from "./Sound"

function Recordings() {
    return (
      <div id="Recordings">
        <h1 className="page-header"> Recordings</h1>
        <div className="sound-block">
            <h2>1.</h2>
        <Sound url="https://soundcloud.com/ufotofu2/sandycrack"/>
        </div>
        <div className="sound-block">
            <h2>2.</h2>
        <Sound url="https://soundcloud.com/ufotofu2/sandycrack"/>
        </div>      <div className="sound-block">
            <h2>3.</h2>
        <Sound url="https://soundcloud.com/ufotofu2/sandycrack"/>
        </div>
        </div>
    )
  }
  
  export default Recordings;
  