
import Test4 from "./Test4";

function LiftingStateUp() {

    let data = "Suraj Patil"

    function parentAlert(newName) {
        alert(`Hello ${newName.firstName} ${newName.lastName}`);
        console.log(newName);
    }
    return (
        <div className="text-center">
            <h1>Lifting State Up</h1>
            <h2>Send data child to parent component</h2>
            <Test4 name={data} alert={parentAlert} />
        </div >
    )
}
export default LiftingStateUp;