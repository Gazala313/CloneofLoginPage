import "./check.png";
function LastPage() {
  return (
    <div>
      <div>{/* <img src="./check.png" /> */}</div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <img
          src="https://w7.pngwing.com/pngs/645/763/png-transparent-right-done-check-ticked-off-check-mark-button-icon-symbol.png"
          style={{ height: "50px" }}
        />
      </div>
      <h1
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        Congratulations!
      </h1>
      <p style={{ color: "grey", display: "flex", justifyContent: "center" }}>
        you have completed onboarding,you can start using the Eden
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px"
        }}
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
        >
          Launch Eden
        </button>
      </div>
    </div>
  );
}
export default LastPage;
