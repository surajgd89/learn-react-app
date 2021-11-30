// eslint-disable-next-line
function InsideComponent() {

    function ChildComponent() {
        return (
            <div>Child Component Example</div>
        );
    }

    return (
        <div className="text-center">
            <h1>Inside Component Example </h1>
            <ChildComponent />
        </div>
    );
}
export default InsideComponent;