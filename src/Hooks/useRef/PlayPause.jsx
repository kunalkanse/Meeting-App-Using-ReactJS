import { useState, useRef } from 'react';

function App() {
    const [play, setPlay] = useState(false);
    const vdoRef = useRef();

    const playPause = () => {
        if (vdoRef.current.paused) {
            vdoRef.current.play();
            setPlay(true);
        } else {
            vdoRef.current.pause();
            setPlay(false);
        }
    };

    return (
        <div style={{ backgroundColor: '#212121', height: '100vh' }}>
            <center>
                <video ref={vdoRef} width="1100" style={{ marginTop: '30px' }}>
                    <source src="https://cdn.pixabay.com/vimeo/520427372/grass-66810.mp4?width=1280&hash=f9d5b56ee319b56625aadff30fcffb2931655616" type="video/mp4" />
                </video>
                <h1><button onClick={playPause} style={{ padding: '5px 20px', fontSize: '30px', fontWeight: '800' }}>{play ? 'Pause' : 'Play'}</button></h1>
            </center>
        </div>
    );
}

export default App;