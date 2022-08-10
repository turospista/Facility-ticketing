import React, { useState } from "react";
import Reply from "./Reply";

function Issue(props) {

    const [reply, setReply] = useState("");

    function handleChangeReply(e) {
        setReply(e.target.value);
    }

    function handleReply(e) {
        e.preventDefault();
        props.replying(reply);
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
                <button type="button" onClick={() => props.deleteIssue(props.id)}>
                    Delete
                </button>
            </label>
            <form onSubmit={handleReply}>
                <label>Answer ticket</label>
                <input
                    value={props.reply}
                    onChange={handleChangeReply}
                />
                <button type="submit">Send reply</button>
            </form>
        </div>
    );
}

export default Issue;