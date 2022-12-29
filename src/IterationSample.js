import { useState } from "react";

export const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const onRemove = (targetToBeRemoved) => {
    const removedArray = names.filter((name) => name.id !== targetToBeRemoved);
    setNames(removedArray);
  };
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  return (
    <div>
      <input value={inputText} onChange={onChange} onKeyPress={onClick}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};
