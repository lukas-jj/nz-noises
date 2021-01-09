import Sound from "./Sound"

function Recordings() {
    return (
        <div id="Recordings">
            <h1 className="page-header"> Recordings</h1>
            <div>
                <h2>1.</h2>
                <Sound url="https://soundcloud.com/ufotofu2/sandycrack" />
                <h2>2.</h2>
                <Sound  url="https://soundcloud.com/ufotofu2/synthwave-practice-4" />
                <h2>3.</h2>
                <Sound  url="https://soundcloud.com/ufotofu2/track-1-fiver-melodic-audio" />
                </div>
        </div>
    )
}

export default Recordings;
