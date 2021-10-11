import "./ResultField.css";

const ResultField = ({ displayValue }) => {

  return (
    <div className="result-field">
      <div className = "output" >{displayValue}</div>
    </div>
  );
};

export default ResultField;
