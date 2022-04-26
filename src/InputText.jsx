const InputText = (props) => {
  return (
    <>
      <input
        value={props.value}
        type={props.type || "text"}
        placeholder={props.placeholder}
        style={{
          border: props.errMessage ? "1px solid red" : "1px solid black",
        }}
        onChange={props.onChange}
      />
      <p>{props.errMessage}</p>
    </>
  );
};

export default InputText;
