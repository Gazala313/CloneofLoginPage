import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LastPage from "./LastPage";
import SecondPage from "./SecondPage";

function Main1() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const [first, last] = input.split(" ");
    setDisplay(first);
  });
  // function Create() {
  //   if (input != "") {
  //     <Router>navigate("./SecondPage");</Router>;
  //   }
  // }
  return (
    // <BrowserRouter>

    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Welcome! First things first...
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "grey",
          padding: "10px"
        }}
      >
        You can always change them later.
      </p>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <label>Full Name</label>
          <input
            style={{
              borderStyle: "groove",
              height: "35px",
              fontSize: "15px",
              color: "grey",
              borderRadius: "5px",
              padding: "10px",
              borderColor: "grey"
            }}
            placeholder="Steve Jobs"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <label>Display Name</label>
          <input
            style={{
              height: "35px",
              fontSize: "15px",
              color: "grey",
              borderRadius: "5px",
              padding: "10px",
              borderStyle: "groove"
            }}
            placeholder="Steve"
            value={display}
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
            if (display != " ") {
              navigate("/SecondPage");
              <LastPage display={display} />;
            }
          }}
        >
          Create Workspace
        </button>
      </div>
    </div>
    // </BrowserRouter>
  );
}
export default Main1;
