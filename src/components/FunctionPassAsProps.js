
import Test from "../components/Test";

function FunctionPassAsProps(props) {

    return (
        <div className="text-center">
            <h1>Function Pass As Props</h1>
            <div>
                <button onClick={props.data}>Click</button>
            </div>
            <div>
                <Test data={props.data} />
            </div>
        </div>
    );
}

export default FunctionPassAsProps;