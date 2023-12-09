import Edit from "./components/Edit";
import List from "./components/List";
import {useEffect, useRef, useState} from "react";
import "./index.css";
import {API_GET_DATA} from "../../global/constants.js";

async function fetchData(setData) {
  const response = await fetch(API_GET_DATA);
  const {data} = await response.json();
  setData(data)
}

async function fetchSetData(data) {
  const response = await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({data})
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submitData = useRef(false);
  useEffect(() => {
    fetchData(setData)
  }, [])

  useEffect(() => {
    if (!submitData.current) {
      return
    }
    fetchSetData(data)
      .then(data => submitData.current = false)
  }, [data]);
  return (<div className={"app"}>
    <Edit add={setData}
          submitData={submitData}/>
    <List listData={data}
          deleteData={setData}
          submitData={submitData}/>
  </div>);
};

export default Home;
