import React, { useState } from "react";

function Issue(props) {

    const [reply, setReply] = useState("");
    const [replies, setReplies] = useState(props.issues);


    /*function replying(reply) {
        const newReply = { reply: reply };
        setReplies([...replies, newReply]);
    }*/

    function handleChangeReply(e) {
        setReply(e.target.value);
    }

    function handleReply(e) {
        e.preventDefault();
        setReplies(reply);
        setReply("");
    }

    return (
        <div className="">
            <h3>Pending issues (3)</h3>
            <label className="" htmlFor={props.id}>
                <li>Title: {props.name}</li>
                <li>Description: {props.desc}</li>
                <li>E-mail: {props.email}</li>
                <li>ID: {props.id}</li>
                <li>Reply: {replies}</li>
                <button type="button" onClick={() => props.deleteIssue(props.id)}>
                    Delete
                </button>
            </label>
            <form onSubmit={handleReply}>
                <label>Answer ticket</label>
                <input
                    value={reply}
                    onChange={handleChangeReply}
                />
                <button type="submit">Send reply</button>
            </form>
        </div>
    );
}

export default Issue;