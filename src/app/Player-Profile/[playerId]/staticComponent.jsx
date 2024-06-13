export default function StaticComponent({ data }) {
    console.log("data", data)
    return (
        <>
            <div style={{ marginRight: "120px", marginLeft: "120px", marginTop: "25px", marginBottom: "50px" }}>
                <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "25px" }}>
                    <div>
                        <h2>Date of Birth</h2>
                        <h1><b>{data?.age || "data not found"}</b></h1>
                    </div>

                </div>
            </div>
        </>
    );
};
