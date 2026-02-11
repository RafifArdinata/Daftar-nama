import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileAddres from "./ProfileAddres";

export default function ProfileApp() {
  const [name, setName] = useState("john doe");
  const [address, setAddress] = useState("jakarta");

  return (
    <>
      <h1>Profile App</h1>

      <ProfileForm name={name} setName={setName} />
      <ProfileAddres address={address} setAddress={setAddress} />
    </>
  );
}
