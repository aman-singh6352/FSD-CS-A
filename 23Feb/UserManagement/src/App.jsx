import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", email: "", age: "", contact: "", company: "", desg: "", address: "" });
  const [searchId, setSearchId] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage on start
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  // Save to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearForm = () =>
    setForm({ id: "", name: "", email: "", age: "", contact: "", company: "", desg: "", address: "" });

  const saveUser = () => {
    if (!form.id) return alert("ID required");

    if (editId) {
      // update
      setUsers(users.map((u) => (u.id === editId ? form : u)));
      setEditId(null);
    } else {
      // add
      if (users.find((u) => u.id === form.id)) {
        return alert("ID already exists");
      }
      setUsers([...users, form]);
    }

    clearForm();
  };

  const deleteUser = (id) =>
    setUsers(users.filter((u) => u.id !== id));

  const editUser = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  const filteredUsers =
    searchId === ""
      ? users
      : users.filter((u) => u.id.includes(searchId));

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Form */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        <input
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="desg"
          placeholder="Designation"
          value={form.desg}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={saveUser}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>

        <button
          onClick={clearForm}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>

      {/* Table */}
      <table className="w-full border text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id} className="border-t">
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
              <td className="space-x-2">
                <button
                  onClick={() => editUser(u)}
                  className="bg-yellow-400 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(u.id)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}