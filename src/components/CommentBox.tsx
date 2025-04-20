import React, { useEffect, useState } from "react";
const COMMENTBOX_PROJECT_ID = import.meta.env.PUBLIC_COMMENTBOX_PROJECT_ID;

const CommentBox = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    script.onload = () => {
      //@ts-ignore
      if (window.commentBox) {
        //@ts-ignore
        window.commentBox(COMMENTBOX_PROJECT_ID);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className='commentbox'></div>;
};

export default CommentBox;
