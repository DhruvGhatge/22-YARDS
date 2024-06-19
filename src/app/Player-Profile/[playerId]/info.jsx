export default function Info({data}){
    console.log("data", data)
    return(
        <>
        <div style={{marginRight: "120px", marginLeft: "120px", marginTop: "25px", marginBottom: "50px"}}>
        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "25px"}}>
            <div>
                <h2>Date of Birth</h2>
                <h1><b>{data?.dob|| "-"}</b></h1>
            </div>

            <div>
                <h2>Gender</h2>
                <h1><b>{data?.gender|| "-"}</b></h1>
            </div>

            <div>
                <h2>PREFERED LOCATION</h2>
                <h1><b>{data?.location|| "-"}</b></h1>
            </div>

            <div>
                <h2>ABOUT</h2>
                <h1><b>{data?.description|| "-"}</b></h1>
            </div>
        </div>

        <div style={{background: "#fff9ab", display: "flex" , justifyContent: "center", height: "2.928vw", fontSize: "1.171vw", fontWeight: "400", alignItems: "center"}}>
            <h1>SPECIFICATION</h1>
        </div>

        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", background: "#edd8ff", padding: "9.89px"}}>

             <div>
                <h2>HAND TYPE</h2>
                <h1><b>{data?.specialization?.handType|| "-"}</b></h1>
            </div>

            <div>
                <h2>BATTING TYPE</h2>
                <h1><b>{data?.specialization?.batsman|| "-"}</b></h1>
            </div>

            <div>
                <h2>BOWLING TYPE</h2>
                <h1><b> {data?.specialization?.bowler|| "-"}</b></h1>
            </div>

            <div>
                <h2>KEEPER TYPE</h2>
                <h1><b>{data?.specialization?.keeper|| "-"}</b></h1>
            </div>

            <div>
                <h2>ALLROUNDER TYPE</h2>
                <h1><b>{data?.specialization?.allrounder|| "-"}</b></h1>
            </div>

        </div>
        </div>
        </>
    );
};