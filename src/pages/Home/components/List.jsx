import Item from "./Item";

const List = ({listData, deleteData, submitData}) => {
  return (
    <div className={"list"}>
      {listData.map((item) => {
        const {note, date, time, id} = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submitData={submitData}
          />
        );
      })}
    </div>
  );
};

export default List;
