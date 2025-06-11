import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const redirect = useNavigate()
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8000/api/notes', data);
      reset();
      alert(" Note added successfully");
      redirect("/viewNotes")
    } catch (err) {
      console.error(err);
      alert(" Error adding note");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Add New Note</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            {...register('title', { required: "Title is required" })}
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-danger mt-1">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register('description', { required: "Description is required" })}
            placeholder="Enter description"
          ></textarea>
          {errors.description && (
            <p className="text-danger mt-1">{errors.description.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
