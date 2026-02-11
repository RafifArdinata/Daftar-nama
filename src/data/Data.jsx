import React, { createContext, useContext, useState } from "react";
import { useImmerReducer } from "use-immer";
import "./data.css";

export const StudentContext = createContext(null);
const initialState = {
  students: [],
};

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.students.push({
        id: Date.now(),
        nama: action.payload.nama,
        umur: action.payload.umur,
        kelas: action.payload.kelas,
      });
      break;
    case "DELETE_STUDENT":
      draft.students = draft.students.filter(
        (s) => s.id !== action.payload.id
      );
      break;
    case "UPDATE_STUDENT":
      const idx = draft.students.findIndex(
        (s) => s.id === action.payload.id
      );
      if (idx !== -1) {
        draft.students[idx] = {
          ...draft.students[idx],
          ...action.payload.data,
        };
      }
      break;
    default:
      break;
  }
}

// 3️⃣ Provider
export function StudentProvider({ children }) {
  const [state, dispatch] = useImmerReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider
      value={{ students: state.students, dispatch }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// 4️⃣ Form Tambah Data
export function StudentForm() {
  const { dispatch } = useContext(StudentContext);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !umur || !kelas) return alert("Semua field wajib diisi!");
    dispatch({ type: "ADD_STUDENT", payload: { nama, umur, kelas } });
    setNama(""); setUmur(""); setKelas("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="number"
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />
      <button type="submit">Tambah Siswa</button>
    </form>
  );
}

// 5️⃣ Tabel Data
export function StudentTable() {
  const { students, dispatch } = useContext(StudentContext);

  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus siswa ini?")) {
      dispatch({ type: "DELETE_STUDENT", payload: { id } });
    }
  };

  const handleEdit = (student) => {
    const nama = prompt("Nama:", student.nama) || student.nama;
    const umur = prompt("Umur:", student.umur) || student.umur;
    const kelas = prompt("Kelas:", student.kelas) || student.kelas;
    dispatch({
      type: "UPDATE_STUDENT",
      payload: { id: student.id, data: { nama, umur, kelas } },
    });
  };

  if (students.length === 0) return <p>Belum ada data siswa.</p>;

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.nama}</td>
            <td>{s.umur}</td>
            <td>{s.kelas}</td>
            <td>
              <button onClick={() => handleEdit(s)}>Edit</button>{" "}
              <button onClick={() => handleDelete(s.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
