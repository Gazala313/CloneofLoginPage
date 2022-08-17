import { useNavigate } from "react-router-dom";
import LastPage from "./LastPage";

function ThirdPages() {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{ fontSize: "25px", display: "flex", justifyContent: "center" }}
      >
        How are you planning to use Eden?
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "grey",
          padding: "10px"
        }}
      >
        We'll streamline your setup experience accordingly.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 10px 10px 10px"
        }}
      >
        <div
          style={{
            borderStyle: "groove",
            borderRadius: "5px",
            padding: "10px",
            height: "150px",
            width: "175px"
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEKaEXSZKsl6TEWcMtQHeqJ-wy-l3t7DC3seIe4jRqSS3AIayS3PYsa-W5w9jFh1S3tI&usqp=CAU"
            style={{ height: "20px", padding: "0px 0px 0px 10px" }}
          />
          <h3 style={{ padding: "5px" }}>For myself</h3>
          <p style={{ padding: "5px", color: "grey" }}>
            Write better. Think more clearly. Stay organized
          </p>
        </div>
        <div
          style={{
            borderStyle: "groove",
            borderRadius: "5px",
            padding: "10px",
            height: "150px",
            width: "175px"
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/33/33308.png"
            style={{ height: "25px" }}
          />
          <h3 style={{ padding: "5px" }}>With my team</h3>
          <p style={{ padding: "5px", color: "grey" }}>
            Wikis,docs,tasks & projects, allin one place.
          </p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button
          onClick={() => {
            navigate("/lastPage");
          }}
          style={{
            height: "50px",
            width: "100%",
            borderRadius: "5px",
            borderColor: "#664de5",
            backgroundColor: "#664de5",
            color: "white"
          }}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}
export default ThirdPages;
