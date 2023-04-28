import React from "react";
import { useState, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  readMessageAtom,
  selectedMessageIdAtom,
} from "../../atoms/messageAtoms";

import {
  IMessageDetailTypes,
  IMessageModalTypes,
} from "../../types/messageType";

import MessageModalButtonBox from "./MessageModalButtonBox";
import MessageModalHeart from "./MessageModalHeart";
import MessageModalTextbox from "./MessageModalTextbox";
import MessageModalTime from "./MessageModalTime";
import ButtonIcon from "../common/ButtonIcon";
import { getMessageDetail } from "../../features/api/messageApi";

function MessageModal({ mode }: IMessageModalTypes) {
  const setReadMessageAtom = useSetRecoilState(readMessageAtom);
  const selectedMessageId = useRecoilValue(selectedMessageIdAtom);

  const [messageData, setMessageData] = useState<IMessageDetailTypes>();

  // selectedMessageId로 상세 메시지 정보 가져오기
  async function getRecivedMessages(selectedMessageId: number | null) {
    if (!selectedMessageId) return;
    const data = await getMessageDetail(selectedMessageId);
    if (data.status === "success") {
      console.log(data.data);
      setMessageData(data.data);
    }
  }

  useEffect(() => {
    // 여기서 selectedMessageId의 메시지 정보를 가져옵니다
    getRecivedMessages(selectedMessageId);
  }, [mode]);

  // 메시지 모달을 닫습니다
  const closeModal = () => {
    setReadMessageAtom(false);
  };

  if (messageData) {
    return (
      <div className="modal border-hrtColorOutline">
        <div className="modal-header bg-hrtColorOutline border-hrtColorOutline mb-4 flex">
          <div className="flex-auto">마음 읽기</div>
          <button onClick={() => closeModal()} className="flex-none">
            <ButtonIcon id={0} />
          </button>
        </div>
        {/* <p>{selectedMessageId} 메시지 / 지금은 더미데이터</p> */}
        <div className="mx-6">
          <MessageModalHeart
            heartId={messageData.heartId}
            heartUrl={messageData.heartUrl}
            heartName={messageData.heartName}
            heartContext={messageData.shortDescription}
            emojiUrl={messageData.emojiUrl}
          />
          <MessageModalTime
            createdDate={messageData.createdDate}
            expiredDate={messageData.expiredDate}
            mode={mode}
          />
          <MessageModalTextbox
            title={messageData.title}
            content={messageData.content}
          />
          <MessageModalButtonBox
            mode={mode}
            isExpired={false}
            isStored={messageData.isStored}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default MessageModal;
