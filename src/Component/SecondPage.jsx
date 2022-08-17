import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThirdPages from "./ThirdPages";

function SecondPage() {
  const navigate = useNavigate();
  const [work, setWork] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1
        style={{ fontSize: "25px", display: "flex", justifyContent: "center" }}
      >
        Let's set up a home for all your work
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "grey",
          padding: "10px"
        }}
      >
        You can always create another workspace later.
      </p>
      <div style={{ padding: "10px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <label style={{ padding: "5px" }}>Workspace Name</label>
          <input
            style={{
              height: "30px",
              fontSize: "15px",
              color: "grey",
              borderRadius: "5px",
              borderColor: "grey",
              padding: "10px"
            }}
            placeholder="Eden"
            value={work}
            onChange={(e) => {
              setWork(e.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <label style={{ padding: "5px" }}>
            Workspace URL
            <span style={{ color: "grey", padding: "5px" }}>(optional)</span>
          </label>
          <input
            style={{
              height: "30px",
              fontSize: "15px",
              color: "grey",
              borderRadius: "5px",
              borderColor: "grey",
              padding: "10px"
            }}
            placeholder="www.eden.com/     Example"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button
          style={{
            height: "50px",
            width: "100%",
            borderRadius: "5px",
            borderColor: "#664de5",
            backgroundColor: "#664de5",
            color: "white"
          }}
          onClick={() => {
            if (work != " ") {
              navigate("/thirdPage");
            }
          }}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}
export default SecondPage;
