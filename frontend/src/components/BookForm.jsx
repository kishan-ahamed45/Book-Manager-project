import { useState } from "react";

function BookForm({ initialValues, onSubmit, submitText }) {
  const defaultValues = {
    title: "",
    author: "",
    description: "",
    genre: "",
    imageUrl: "",
  };

  const [formData, setFormData] = useState(
    initialValues ? { ...defaultValues, ...initialValues } : defaultValues
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Book Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Author</label>
      <input name="author" value={formData.author} onChange={handleChange} required />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
      />

      <label>Genre</label>
      <select name="genre" value={formData.genre} onChange={handleChange} required>
        <option value="">Select genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Biography">Biography</option>
      </select>

      <label>Image URL</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default BookForm;
