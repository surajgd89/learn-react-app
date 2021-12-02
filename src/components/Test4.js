function Test4(props) {

    let newData = { firstName: "Kajal", lastName: "Patil" }

    return (
        <>
            <div>Test 4 {props.name}</div>
            <button onClick={() => props.alert(newData)}>Click</button>
        </>
    )
}

export default Test4;