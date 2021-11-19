import React, { useState } from "react";

function FormValidation() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [subBtn, setSubBtn] = useState(true);

    function loginHandler(e) {
        e.preventDefault();
        if (user.length < 3 || password.length < 8) {
            alert("Enter correct Username & Password");
        } else {
            alert("Welcome" + user);
        }
    }

    function userHandler(e) {
        e.preventDefault();
        let userVal = e.target.value;
        userVal.length < 3 ? setUserError(true) : setUserError(false);
        setUser(userVal);
    }

    function passHandler(e) {
        e.preventDefault();
        let passVal = e.target.value;
        passVal.length < 8 ? setPassError(true) : setPassError(false);
        setPassword(passVal);
        setSubBtn(false);
    }



    return (
        <div>
            <h1>Form Validation</h1>
            <form onSubmit={loginHandler}>
                <div>
                    <input type="text" placeholder="Enter Username" value={user} onChange={userHandler} />
                    {userError ? <span>Invalid User</span> : null}
                </div>
                <div>
                    <input type="password" placeholder="Enter Password" value={password} onChange={passHandler} />
                    {passError ? <span>Invalid Password</span> : null}
                </div>
                <div>
                    <button type="submit" disabled={subBtn}>Login</button>
                </div>
            </form>
        </div>

    );
}

export default FormValidation;