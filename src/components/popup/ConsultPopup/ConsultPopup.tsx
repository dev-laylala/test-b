import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { requestState } from "../../../store/RequestStore";

interface Props {
  visible: boolean;
  onClose: any;
}

const ConsultPopup = ({ visible, onClose }: Props) => {
  const [request, setRequest] = useRecoilState(requestState);
  const [inputs, setInputs] = React.useState<any>({
    name: undefined,
    phone: undefined,
    sector: undefined,
    check: false
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(Object.values(inputs));
  };

  useEffect(() => {
    console.log("request: ", request);
  });

  const changeValue = (input: { name?: string }) => {
    console.log("input: ", input);
    setRequest({
      ...request,
      ...input
    });
  };

  return (
    <div className={`consult-popup ${visible ? "visible" : ""}`}>
      <div className="card">
        <button className="close" onClick={onClose}>
          <img src={require("../../../static/close-button.png")} />
        </button>
        <h1 className="title">상담신청</h1>
        <form className="input-wrapper">
          <div>
            <input
              type="text"
              placeholder="성함"
              onChange={(e) => changeValue({ name: e.target.value })}
              value={request.name}
              required
            />
          </div>
          <input type="text" placeholder="휴대폰 번호" required />
          <input type="text" placeholder="업종" required />
          <textarea placeholder="문의사항 (선택)" rows={4} />
          <div className="check-input">
            <input type="checkbox" required />
            <label>(필수) 개인정보취급방침에 동의합니다</label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ConsultPopup;
