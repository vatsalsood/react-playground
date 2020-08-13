import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NotesApp = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNotes = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  }

  const removeNote = currentNote => {
    setNotes(notes.filter(note => { return note.title !== currentNote.title }));
  }

  return (
    <div>
      <h3>Notes</h3>
      {notes.map(note => {
        return (
          <ul key={note.title}>
            <li >
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </li>
            <button onClick={(e) => { e.preventDefault(); removeNote(note) }}>x</button>
          </ul>
        )
      })}
      <form onSubmit={addNotes}>
        <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title}></input>
        <br />
        <textarea type="textarea" onChange={(e) => { setBody(e.target.value) }} value={body}></textarea>
        <br />
        <button>Add To form</button>
      </form>
    </div>)
}


// const App = (props) => {
//   const [count, setCount] = useState(props.count);

//   return (
//     <div>
//       Counter: {count}
//       <br />
//       <button onClick={() => { setCount(count + 1) }}>+</button>
//       <button onClick={() => { setCount(count - 1) }}>-</button>
//       <button onClick={() => { setCount(props.count) }}>Reset</button>
//     </div>);
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
