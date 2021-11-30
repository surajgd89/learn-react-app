function Test(props) {
    return (
        <div className="text-center">
            <h1>Test</h1>
            <div>
                <button onClick={props.data}>Click Test</button>
            </div>
        </div>
    );
}

export default Test;