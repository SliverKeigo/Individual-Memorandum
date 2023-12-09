import React, {useEffect, useRef, useState} from 'react';
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import {API_GET_DATA} from "../../global/constants.ts";

async function fetchData(setData) {
  const response = await fetch(API_GET_DATA);
  const {data} = await response.json();
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
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
  return (<div className={"app"}
               style={{width: '25%', margin: '0 auto'}}>
    <Edit add={setData}
          submitData={submitData}/>
    <List listData={data}
          deleteData={setData}
          submitData={submitData}/>
  </div>);
};

export default Home;
