import styled from "styled-components";
import { useEffect, useState } from "react";

export const User = () => {
  const [studentName, SetStudentName] = useState([]);

  useEffect(() => {
    const getUsersName = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      SetStudentName(data);
    };
    getUsersName();
  }, []);

  return (
    <div>
      <h1>Students List</h1>
      {studentName.map((item) => {
        return (
          <List>
            <h1>{item.name}</h1>
            <h2>{item.id}</h2>
          </List>
        );
      })}
    </div>
  );
};

const List = styled.li`
  list-style: none;
  padding: 5px;
  border: 1px dashed black;
  margin-right: 20px;
  background-color: orange;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;
