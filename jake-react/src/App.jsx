import React, { useEffect, useState } from "react";
import { ColorfulMessage } from './components/ColorfulMessage'

const App = () => {
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(true);

    const onClickCountUp = () => {
        setNum(num + 1);
    };
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    }

    useEffect(() => {
        if (num % 3 === 0) {
            faceShowFlag || setFaceShowFlag(true);
        } else {
            faceShowFlag && setFaceShowFlag(false);
        }
    },[num]);

    return (
    <>
        <h1 style={{ color: 'red'}}>こんにちは！</h1>
        <ColorfulMessage color='blue'>お元気ですか</ColorfulMessage>
        <ColorfulMessage color='pink'>元気です</ColorfulMessage>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <button onClick={onClickSwitchShowFlag}>on/off</button>
        <p>{num}</p>
        {faceShowFlag && <p>('ω')ノ</p>}
    </>
    );
};

export default App;