// coppied from bootstrap
// to generate inputs and giving them ids and passing variables to trace input of the user.
const FormGroup = ({
    Id,
    Label,
    Type,
    onChange,
    Value,
    // defaultValue,
    Checked,
    defaultChecked,
    Placeholder,
    readOnly,
    Desc
}) => {
    return (
      <div className="form-group pt-3">
        <label htmlFor={Id}>{Label}</label>
        <input
          type={Type}
          className="form-control"
          id={Id}
          name={Id}
          onChange={onChange}
          value={Value}
          placeholder={Placeholder}
          // defaultValue={defaultValue}
          checked={Checked}
          defaultChecked={defaultChecked}
          aria-describedby={Id + "Help"}
          readOnly={readOnly}
        />
        {Desc && (
          <small id={Id + "Help"} className="form-text text-muted">
            {Desc}
          </small>
        )}
      </div>
    );
};
  
export default FormGroup;