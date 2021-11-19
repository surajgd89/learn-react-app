import React from "react";
import { useState } from "react/cjs/react.development";


function BasicForm() {

    const [name, setName] = useState("");
    const [movie, setMovie] = useState("");
    const [tnc, setTnc] = useState(false);


    function getFormData(e) {
        e.preventDefault();
        console.log(name);
        console.log(movie);
        console.log(tnc);
    }

    function resetFormData(e) {
        e.preventDefault();
        setName("");
        setMovie("");
        setTnc(false);
    }

    return (
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={getFormData} onReset={resetFormData}>
                <div>Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
                <div>
                    Movie:
                    <select value={movie} onChange={(e) => setMovie(e.target.value)}>
                        <option>Select</option>
                        <option>DDLJ</option>
                        <option>Marvel</option>
                    </select>
                </div>
                <div><input type="checkbox" checked={tnc} onChange={(e) => setTnc(e.target.checked)} /> I accept Terms and conditions </div>
                <div>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    );
}

export default BasicForm;