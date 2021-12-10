import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function RouterExample() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>

    );
}

export default RouterExample;


function Navbar() {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>
        </>
    )
}


function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, perspiciatis inventore a porro alias, quos rerum commodi natus odio enim eius pariatur eligendi nesciunt earum magni? Mollitia quia iusto commodi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores officia porro vitae reiciendis, animi placeat earum ab? Animi reiciendis dolorem voluptates nesciunt. Beatae quidem perferendis ipsum nesciunt animi quisquam porro ad iure obcaecati fugit, eius minus, quia voluptatibus officia.</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, perspiciatis inventore a porro alias, quos rerum commodi natus odio enim eius pariatur eligendi nesciunt earum magni? Mollitia quia iusto commodi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis delectus id nihil et omnis ut aut commodi odio inventore?</p>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, perspiciatis inventore a porro alias, quos rerum commodi natus odio enim eius pariatur eligendi nesciunt earum magni? Mollitia quia iusto commodi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quia in repudiandae nihil dolore nesciunt quo, odio id labore placeat ex atque dolorum suscipit deserunt. Eius facere ipsam laboriosam atque labore iure qui tempora maxime voluptates perferendis reiciendis, est magni, vitae, quos dolorem nemo. Eligendi sint doloremque inventore nulla consequuntur.</p>
        </div>
    );
}
