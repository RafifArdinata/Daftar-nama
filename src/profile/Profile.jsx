import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const { name } = useContext(ProfileContext);

  return <p>Hello {name}</p>;
}
