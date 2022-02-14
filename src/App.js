import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

export default function App() {
  const [myJSONList, setMyJSONList] = useState([]);

  const getJSON = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      let result = res.data;
      setMyJSONList(result);
      console.log(result[0].maps.googleMaps);
    });
  };

  useEffect(() => {
    getJSON();
  }, []);

  return (
    <div style={{justifyContent:'center' , alignItems:'center' , display:'flex' , width:'99vw' , flexDirection:'column'}}>
      {myJSONList.map((data, index) => (
        <div
          style={{
            border: "2px solid #2C3333",
            borderRadius: "10px",
            backgroundColor: "#00B4D8",
            margin: "5px",
            width:'48vw',
            color: "white"
          }}
        >
          <div style={{ backgroundColor: "#03045E" }}>
            <h1 style={{ textAlign: "center" }}> {data.name.common} </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "15px",
                marginRight: "15px"
              }}
            >
              <h2> {data.name.official} </h2>
              <span style={{ display: "flex" , justifyContent:'center' , alignItems:'center' }}>
                <h3 > Population : </h3> <h2> {data.population} </h2>{" "}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h4 style={{color:'#010101'}}>Flag</h4>
              <img
                src={data.flags.png}
                style={{ width: "150px", height: "150px" }}
              />
            </div>

            <div>
              <h4 style={{color:'#010101'}} > Coat Of Arms</h4>
              <img
                src={data.coatOfArms.png}
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          </div>

          <div>
              <h3 style={{color:'#010101'}}> Continents </h3>
              <ul>
                <li> {data.continents} </li>
                </ul>
            </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "15px"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.open(data.maps.googleMaps);
              }}
            >
              {" "}
              Google Map{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.open(data.maps.openStreetMaps);
              }}
            >
              Open Street Map{" "}
            </Button>
          </div>

          {/* <div>
            <iframe
              src={data.maps.googleMaps}
              height={500}
              width={500}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div> */}
        </div>
      ))}
    </div>
  );
}
