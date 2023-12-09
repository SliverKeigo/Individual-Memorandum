import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const Edit = ({add, submitData}) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleChange(e) {
    setNote(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submitData.current = true
    const item = {
      id: uuidv4(),
      note,
      date,
      time,
    };
    add((prevData) => {
      return [item, ...prevData];
    });
    // 清空note
    setNote('');

  }

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事</p>
      <input type={"text"}
             value={note}
             onChange={handleChange}/>
      <p>日期</p>
      <input type={"date"}
             value={date}
             onChange={handleDateChange}/>
      <p>时间</p>
      <input type={"time"}
             value={time}
             onChange={handleTimeChange}/>
      <button className={"add"}
              onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
