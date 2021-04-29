import { useEffect, useRef } from "react";

const Input = (props) => {
  const element = useRef();
  useEffect(() => {
    if (props.validity) {
      element.current.setCustomValidity(props.validity);
    }
  }, []);
  let output = <input ref={element} {...props} />;
  if (props.type == 'select') {
    const options = Object.keys(props.options)
      .map((key) => <option value={key}>{props.options[key]}</option>);
    output = <select ref={element} {...props}>{options}</select>;
  }
  return output;
}
export default Input;