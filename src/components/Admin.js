import React, { useState } from "react";
import { nanoid } from "nanoid";
import Issue from "./Issue";

const DATA = [
    { id: "issue-1", name: "Broken pipe", desc: "Desc1", email: "email"}
  ];

function Admin(props) {

    const [issues, setIssues] = useState(props.issues);

    const issueList = DATA.map(issue => (
        <Issue
            name={issue.name}
            desc={issue.desc}
            email={issue.email}
            id={issue.id}
            key={issue.id}
            deleteIssue={deleteIssue}
        />
    ));

    function deleteIssue(id) {
        const remainingIssues = issues.filter((issue) => id !== issue.id);
        setIssues(remainingIssues);
    }

    return (
        <div>
            {issueList}
        </div>
    );
}

export default Admin;