const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-black">Female</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
