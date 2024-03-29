import React, {Fragment, useEffect, useState} from "react";

export function useFetcher(url, rejectMsg) {
    const [varValue, setVarValue] = useState({value: [], loading: true});

    useEffect(() => {
        if (!url || !url.startsWith("http")) {
            console.log("Not a valid url");
            console.log("url: [" + url + "]");
            return;
        }
        const fetchConfig = {};
        // reset value:
        setVarValue({value: [], loading: true});

        fetch(url, fetchConfig).then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                default:
                    return Promise.reject(rejectMsg);
            }
        }).then(values => {
            setVarValue({value: values, loading: false});
        }).catch(error => {
            setVarValue({value: [], loading: false});
            console.log(error);
        });
    }, [url, rejectMsg]);

    return varValue;
}

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue); // Tracking input.
    const [url, setUrl] = useState(initialValue);  // only update URL when input is done.

    function onChange(e) {
        setValue(e.target.value);
    }

    function onBlur(e) {
        setUrl(e.target.value);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            setUrl(e.target.value);
        }
    }

    return {value, url, onChange, onBlur, onKeyPress};
}


export function UseFetcherDemo(props) {
    let urlInput = useInput("https://randomuser.me/api/?results=" + props.count);
    let fetchInput = useFetcher(urlInput.url, "some error");

    return <Fragment>
        <h2>useFetcher Demo</h2>
        <label>Url input: {urlInput.value}</label>
        <br/>
        <input size="50" {...urlInput}/>
        <br/>
        {
            fetchInput.loading ? <label>loading...</label> :
                <ul>
                    {fetchInput.value.results.map((item, index) => <li key={index}>{item.email}</li>)}
                </ul>
        }
    </Fragment>

}
