
function InsideComponent() {

    function ChildComponent() {
        return (
            <div>Child Component Example</div>
        );
    }

    return (
        <>
            <div>Inside Component Example <ChildComponent /></div>

        </>
    );
}
export default InsideComponent;