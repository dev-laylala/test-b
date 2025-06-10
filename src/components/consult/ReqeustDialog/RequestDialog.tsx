import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useAtomValue } from "jotai";

import "./RequestDialog.scss";
import { Dialog } from "../../base";
import { ReactComponent as CloseIcon } from "../../../static/icons/close.svg";
import {
  REQUEST_SERVICE,
  requestErrorState,
  RequestService,
  requestState,
} from "../../../store/RequestStore";
import { useLocalStorage } from "../../../shared/utill";
import { useInjection } from "../../../shared/InversifyProvider";
import { totalKeywordAtom } from "../../../shared/KeywordAtom";
import { useLoading } from "../../../contexts/LoadingProvider";

const RequestDialog = ({ visible, onSubmitSuccess, onClose }: any) => {
  const [request, setRequest] = useRecoilState(requestState);
  const [persistedRequest, setPersistedRequest] = useLocalStorage(
    "request",
    request
  );
  const resetRequest = useResetRecoilState(requestState);
  const requestService = useInjection<RequestService>(REQUEST_SERVICE);
  const keyword = useAtomValue(totalKeywordAtom);
  const [errors, setErrors] = useRecoilState(requestErrorState);
  const [next, setNext] = useState<boolean>(false);
  const loading = useLoading();

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      const err = requestService.checkRequest(request);
      setErrors(err);

      if (!err.isValid()) {
        return;
      }
      loading.show();
      await sendRequest();
      if ((window as any).fbq) {
        (window as any).fbq("track", "PageView");
      }
      loading.hide();
    },
    [loading, request]
  );

  const sendRequest = async () => {
    await requestService?.sendRequest(request, {
      first: keyword.final ? keyword.final : keyword.first,
      final: keyword.first,
    });
    window.localStorage.removeItem("request");
    resetRequest();
    setNext(true);
  };

  const onChange = (e: any) => {
    setRequest((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    setPersistedRequest(request);
  };

  const handleTelChange = (e: any) => {
    let str = e.target.value.replace(/[^0-9]/g, "");

    var tmp = "";
    if (str.length < 4) {
      setRequest((prev: any) => ({ ...prev, phone: str }));
    } else if (str.length < 7) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3);
      setRequest((prev: any) => ({ ...prev, phone: tmp }));
    } else if (str.length < 11) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 3);
      tmp += "-";
      tmp += str.substr(6);
      setRequest((prev: any) => ({ ...prev, phone: tmp }));
    } else {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 4);
      tmp += "-";
      tmp += str.substr(7);
      setRequest((prev: any) => ({ ...prev, phone: tmp }));
    }

    setRequest((prev: any) => ({ ...prev, phone: e.target.value }));
    setPersistedRequest(request);
  };

  return (
    <Dialog visible={visible} onClose={onClose}>
      <div className="dialog-inner">
        {!next && (
          <div className="close-button" onClick={onClose}>
            <CloseIcon />
          </div>
        )}
        <div className={`dialog-content ${next ? "next" : ""}`}>
          <div
            className="request-card"
            style={{
              justifyContent: next ? "center" : "flex-start",
            }}
          >
            {next ? (
              <>
                <h1 className="card-title">
                  감사합니다.
                  <br />
                  문의가 완료되었습니다.
                </h1>
                <p>오피스 매니저가 신속히 연락드리도록 하곘습니다.</p>
                <div className="box">
                  <strong>상담 가능시간 :</strong>
                  평일 09시 ~ 19시
                </div>
                <div className="go-main" onClick={onSubmitSuccess}>
                  메인으로
                </div>
              </>
            ) : (
              <>
                <h1 className="card-title">상담신청</h1>
                <form className="input-wrapper">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="성함"
                      name="name"
                      value={request.name}
                      onChange={onChange}
                    />
                    {errors.isNameError ? (
                      <p className="error">필수 입력사항입니다</p>
                    ) : (
                      false
                    )}
                  </div>
                  <div className="input">
                    <input
                      name="phone"
                      type="text"
                      placeholder="휴대폰 번호"
                      onChange={handleTelChange}
                      value={request.phone}
                      maxLength={13}
                    />
                    {errors.isPhoneEmpty || errors.isPhoneError ? (
                      <p className="error">필수 입력사항입니다</p>
                    ) : (
                      false
                    )}
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="업종"
                      name="bizType"
                      value={request.bizType}
                      onChange={onChange}
                    />
                    {errors.isBizTypeError ? (
                      <p className="error">필수 입력사항입니다</p>
                    ) : (
                      false
                    )}
                  </div>
                  <textarea
                    placeholder="문의사항 (선택)"
                    rows={4}
                    name="comment"
                    onChange={onChange}
                  />
                  <div className="check-input">
                    <input
                      type="checkbox"
                      id="cb"
                      value={String(request.isPrivacyPolicyChecked)}
                      defaultChecked={request.isPrivacyPolicyChecked}
                      onClick={() => {
                        setRequest((prev: any) => ({
                          ...prev,
                          isPrivacyPolicyChecked: !prev.checked,
                        }));
                        setPersistedRequest(request);
                      }}
                    />
                    <label htmlFor="cb" className="checkbox" />
                    <Link
                      to="/terms"
                      target="_blank"
                      style={{
                        color: errors.isPrivacyPolicyError
                          ? "#EB5757"
                          : "#9198a4",
                      }}
                    >
                      (필수) <span className="underline">개인정보취급방침</span>
                      에 동의합니다
                    </Link>
                  </div>
                  <input type="submit" onClick={onSubmit} value="신청하기" />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default RequestDialog;
