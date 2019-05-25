import React, {
    useCallback, useEffect, useMemo, useState
} from 'react';

function MemoVsCallback() {
    const [countForCallback, setCountForCallback] = useState(0);
    const [incrementSize, setIncrementSize] = useState(0);
    const [triggerMemo, setTriggerMemo] = useState(false);
    // useful: this can (based on dep list) prevent recreation of the function -- otherwise anonymous functions are always recreated for each re-render.
    // The function will only be recreated when incrementSize change.
    const callbackFunc = useCallback(() => {
        setCountForCallback(currCount => currCount + incrementSize);
    }, [triggerMemo]);
    // this will only change when countForCallback changes.
    const memoizedIncrementSize = useMemo(() => {
        return incrementSize;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[triggerMemo]);
    // the incrementSize will change when we increment the countForCallBack, but because the function is memoized, we don't see the incrementSize take effect.
    useEffect(() => {
        setIncrementSize(0);
    }, [countForCallback]);
    return (
        <>
            <label htmlFor='memo_inc_button'>
                <span style={{color: "red"}}>{incrementSize}</span> -- Current increment size<br/>
                <span style={{color: "red"}}>{memoizedIncrementSize}</span> -- Increment size in effect (memoized value)<br/>
                <button id='memo_inc_button' type='submit' onClick={() => setIncrementSize(currCount => currCount + 1)}>increase increment size</button>
                <button id='memo_inc_button' type='submit' onClick={() => setIncrementSize(currCount => currCount - 1)}>decrease increment size</button>
            </label>
            <hr/>

            <label htmlFor='memo_toggle_button'>
                <span style={{color: "red"}}>{`${triggerMemo}`}</span> -- trigger value<br/>
                Click this to trigger a memoization of increment size, for both a memo value above, and update a memoized function, below<br/>
                <button id='memo_toggle_button' type='submit' onClick={() => setTriggerMemo(prev => !prev)}>Trigger Memo</button>
            </label>
            <hr/>
            <label htmlFor='callback_inc_button'>
                <span style={{color: "red"}}>{countForCallback}</span> -- Increment size memoized in the function.<br/>
                This will reset incrementSize, but since the function is memoized, incrementSize change won't take effect until is triggered.<br/>
                <button id='callback_inc_button' type='submit' onClick={callbackFunc}>call a memoized function to use the increment size</button>
            </label>
        </>
    );
}

export default MemoVsCallback;
