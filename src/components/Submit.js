import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import Issue from "./Issue";
import Reply from "./Reply";

function Submit(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    const [issues, setIssues] = useState(props.issues);
    const [isAdmin, setAdmin] = useState(false);
//////////////
    const [replies, setReplies] = useState(props.issues);


    function replying(reply) {
        const newReply = { reply: reply };
        setReplies([...replies, newReply]);
    }


//////////////
    const issueList = issues.map(issue => (
        <Issue
            name={issue.name}
            desc={issue.desc}
            email={issue.email}
            id={issue.id}
            key={issue.id}
            deleteIssue={deleteIssue}
        />

        
    ));

    function submitting(name, desc, email) {
        const newSubmit = { name: name, desc: desc, email: email, id: "issue-" + nanoid() };
        setIssues([...issues, newSubmit]);
    }

    function deleteIssue(id) {
        const remainingIssues = issues.filter((issue) => id !== issue.id);
        setIssues(remainingIssues);
    }

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleChangeDesc(e) {
        setDesc(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitting(title, desc, email);
        setTitle("");
        setDesc("");
        setEmail("");
    }

    const startingTemplate = (
        <form>
            <h1>Facility ticketing</h1>
            <button type="button" onClick={() => setSubmitting(true)}>
                Report an issue
            </button>
        </form>
    );

    const submittingTemplate = (
        <div>
            <h1>Facility ticketing</h1>
            <h2>Report an issue</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    id="new-issue"
                    className="new-issue classname"
                    name="text"
                    autoComplete="off"
                    value={title}
                    onChange={handleChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    id="new-issue-desc"
                    className="new-issue-desc classname"
                    name="desc"
                    autoComplete="off"
                    value={desc}
                    onChange={handleChangeDesc}
                />
                <h3>Attach a picture</h3>
                <input type="file" />
                <label>E-mail</label>
                <input
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <br />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );

    const adminTemplate = (
        <div>
            <h1>Admin</h1>
            {issueList}
        </div>
    );

    const userTemplate = (
        <div>
        </div>
    );

    return (
        <div>
            <button type='button' onClick={() => setAdmin(true)}>
                Login
            </button>
            <button type='button' onClick={() => setAdmin(false)}>
                Logout
            </button>
            {isSubmitting ? submittingTemplate : startingTemplate}
            {isAdmin ? adminTemplate : userTemplate}
        </div>
    )
}

export default Submit;

/* import React, { useState } from "react";

function Submit(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    const [issues, setIssues] = useState(props.issues);

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleChangeDesc(e) {
        setDesc(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.submitting(title, desc, email);
        setTitle("");
        setDesc("");
        setEmail("");
    }

    const startingTemplate = (
        <form>
            <h1>Facility ticketing</h1>
            <button type="button" onClick={() => setSubmitting(true)}>
                Report an issue
            </button>
        </form>
    );

    const submittingTemplate = (
        <div>
            <h1>Facility ticketing</h1>
            <h2>Report an issue</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    id="new-issue"
                    className="new-issue classname"
                    name="text"
                    autoComplete="off"
                    value={title}
                    onChange={handleChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    id="new-issue-desc"
                    className="new-issue-desc classname"
                    name="desc"
                    autoComplete="off"
                    value={desc}
                    onChange={handleChangeDesc}
                />
                <h3>Attach a picture</h3>
                <input type="file" />
                <label>E-mail</label>
                <input
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <br />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );

    return (
        <div>{isSubmitting ? submittingTemplate : startingTemplate}</div>
    )
}

export default Submit; */