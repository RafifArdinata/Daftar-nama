import { useState } from "react";

export default function DaftarNama() {
  const [inputValue, setInputValue] = useState("");//inputannya
  const [listNama, setListNama] = useState([]);//list namanya

  
  const handleTambahNama = () => {
    if (inputValue.trim() === "") return;

    setListNama([...listNama, inputValue]);
    setInputValue(""); //
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Nama</h2>


      <input
        type="text"
        placeholder="Masukkan nama"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleTambahNama} style={{ marginLeft: "10px" }}>
        Tambah Nama
      </button>

      {/* Tabel */}
        <h2>List Nama</h2>
      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, index) => (
            <tr key={index}>
    
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}