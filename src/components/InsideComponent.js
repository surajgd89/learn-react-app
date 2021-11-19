// eslint-disable-next-line
function InsideComponent() {

    function ChildComponent() {
        return (
            <div>Child Component Example</div>
        );
    }

    return (
        <>
            <div>Inside Component Example </div>
            <ChildComponent />
        </>
    );
}
export default InsideComponent;