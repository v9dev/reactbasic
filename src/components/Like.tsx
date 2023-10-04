import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [notLiked, setLiked] = useState(true);
  const toggle = () => {
    setLiked(!notLiked);
    onClick();
  };
  if (notLiked) return <AiOutlineHeart size={20} onClick={toggle} />;
  return <AiFillHeart size={20} color="red" onClick={toggle} />;
};

export default Like;
