import React from "react";

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClick}>
        {children}
        Secondary
      </button>
      <button type="button" className="btn btn-success" onClick={onClick}>
        {children}
        Success
      </button>
      <button type="button" className="btn btn-danger" onClick={onClick}>
        {children}
        Danger
      </button>
      <button type="button" className="btn btn-warning" onClick={onClick}>
        {children}
        Warning
      </button>
      <button type="button" className="btn btn-info" onClick={onClick}>
        {children}
        Info
      </button>
      <button type="button" className="btn btn-light" onClick={onClick}>
        {children}
        Light
      </button>
      <button type="button" className="btn btn-dark" onClick={onClick}>
        {children}
        Dark
      </button>

      <button type="button" className="btn btn-link" onClick={onClick}>
        {children}
        Link
      </button>
    </div>
  );
};

export default Button;
