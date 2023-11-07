import React from 'react';

const Button = ({ text, textColor, fontSize, bg, pl, pr, pt, pb }) => {
  const buttonStyle = {
    textAlign: 'left', 
    display: 'flex', 
    marginTop:'30px',
    marginLeft:'25px',
    alignItems: 'center', 
    color: textColor,
    backgroundColor: bg,
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb,
    borderRadius: '3px',
    border: 'none',
    fontWeight: 600,
    fontSize: fontSize,
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;


