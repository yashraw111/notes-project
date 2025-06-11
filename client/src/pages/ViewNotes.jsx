import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Error fetching notes");
    }
  };

  const deleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axios.delete(`http://localhost:8000/api/notes/${id}`);
        fetchNotes();
      } catch (err) {
        console.error("Error deleting note:", err);
        alert("❌ Error deleting note");
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">📋 Your Notes</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <div className="row">
          {notes.map((note) => (
            <div className="col-md-4 mb-3" key={note._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                  <p className="text-muted small">
                    {new Date(note.createdAt).toLocaleString()}
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteNote(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewNotes;
