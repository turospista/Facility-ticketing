import React, { useState } from 'react';
import './App.css';
import Submit from './components/Submit';
import Reply from './components/Reply';

function App(props) {;

  const [issues, setIssues] = useState(props.issues);

    /*function replying(reply) {
      const newReply = {reply: reply};
      setReplies([...replies, newReply]);
    }*/

  return (
    <div className="App">
      <Submit issues={issues} />
    </div>
  );
}

export default App;

/*function App(props) {

  const [issues, setIssues] = useState(props.issues);
  const [replies, setReplies] = useState(props.issues);
  const [isAdmin, setAdmin] = useState(false);

    const issueList = issues.map(issue => (
        <Issue
            name={issue.name}
            desc={issue.desc}
            email={issue.email}
            reply={issue.reply}
            id={issue.id}
            key={issue.id}
            deleteIssue={deleteIssue}
        />
    ));

    function submitting(name, desc, email) {
        const newSubmit = { name: name, desc: desc, email: email, id: "issue-" + nanoid() };
        setIssues([...issues, newSubmit]);
    }

    function replying(reply) {
      const newReply = {reply: reply};
      setReplies([...replies, newReply]);
    }

    function deleteIssue(id) {
        const remainingIssues = issues.filter((issue) => id !== issue.id);
        setIssues(remainingIssues);
    }

  return (
    <div className="App">
      <button type='button' onClick={() => setAdmin(true)}>
        Login
      </button>
      <button type='button' onClick={() => setAdmin(false)}>
        Logout
      </button>
      {isAdmin ? issueList : <Submit submitting={submitting} />}
    </div>
  );
}

export default App;*/
