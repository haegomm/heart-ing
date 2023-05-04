import { useSetRecoilState } from "recoil";
import {
  readMessageAtom,
  selectedMessageIdAtom,
} from "../../atoms/messageAtoms";

import HeartItemIcon from "../common/HeartItemIcon";
import ResponseEmojiIcon  from "../common/ResponseEmojiIcon";

function HeartBoxListItem({ ...props }) {
  const setReadMessageAtom = useSetRecoilState(readMessageAtom);
  const setSelectedMessgeIdAtom = useSetRecoilState(selectedMessageIdAtom);

  const readMessage = (messageId: number) => {
    console.log(messageId + " 메시지를 읽습니다");
    // messageId의 메시지를 열람합니다
    setReadMessageAtom(true);
    setSelectedMessgeIdAtom(messageId);
  };

  return (
    <div
      className="bg-hrtColorWhiteTrans flex items-center border-2 border-hrtColorPink rounded-lg p-2 m-2 my-4 relative"
      onClick={() => readMessage(props.messageId)}
    >
      <div className="flex-none">
        <HeartItemIcon id={props.heartId} />
      </div>
      <div className="flex-auto text-xl">{props.context}</div>
      <div className="flex-none">
        <ResponseEmojiIcon id={props.emojiId} /></div>
      <div className="w-2 h-2 rounded-xl border-2 border-hrtColorPink absolute left-1 top-1"></div>
      <div className="w-2 h-2 rounded-xl border-2 border-hrtColorPink absolute right-1 top-1"></div>
      <div className="w-2 h-2 rounded-xl border-2 border-hrtColorPink absolute left-1 bottom-1"></div>
      <div className="w-2 h-2 rounded-xl border-2 border-hrtColorPink absolute right-1 bottom-1"></div>
    </div>
  );
}

export default HeartBoxListItem;
