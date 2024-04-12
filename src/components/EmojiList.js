import React from "react";
import { EmojiItem } from "./EmojiItem";
import {useSelector} from "react-redux"

export const EmojiList = () => {
  const emojiList=useSelector(state=>state.emojis)
  return (
    <div className="flex w-1/2 flex-wrap m-10 gap-12">
      {emojiList.map((emoji,index)=>{<EmojiItem key={index} emoji={emoji}/>})}
    </div>
  );
};
