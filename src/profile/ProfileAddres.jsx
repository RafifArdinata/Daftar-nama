export default function ProfileAddres({ address, setAddress }) {
  return (
    <>
      <h2>Profile Address</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>Alamat: {address}</p>
    </>
  );
}


