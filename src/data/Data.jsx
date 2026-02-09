import { useImmerReducer } from "use-immer";
import { useState } from "react";
import "./Data.css";

const initialStudents = [];

function studentsReducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.push(action.payload);   
      break;

    case "DELETE_DATA":
      return draft.filter((student) => student.id !== action.payload);

    case "EDIT_DATA":
      const index = draft.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        draft[index] = action.payload;
      }
      break;

    default:
      break;
  }
}

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(
    studentsReducer,
    initialStudents
  );

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      dispatch({
        type: "EDIT_DATA",
        payload: {
          id: editId,
          nama,
          umur,
          kelas,
        },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD_DATA",
        payload: {
          id: Date.now(),
          nama,
          umur,
          kelas,
        },
      });
    }

    setNama("");
    setUmur("");
    setKelas("");
  }

  function handleEdit(student) {
    setEditId(student.id);
    setNama(student.nama);
    setUmur(student.umur);
    setKelas(student.kelas);
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE_DATA",
      payload: id,
    });
  }

  return (
    <div className="container">
      <h2>Manajemen Data Siswa</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          required
        />
        <button type="submit">
          {editId ? "Update" : "Tambah"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.nama}</td>
              <td>{student.umur}</td>
              <td>{student.kelas}</td>
              <td>
                <button
                  className="btn edit"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(student.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="4" className="empty">
                Belum ada data siswa
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}