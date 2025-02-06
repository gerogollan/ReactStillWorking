import React from 'react';
import './Buttoncomponent.css';
import { Link } from 'react-router-dom';

export default function ButtonComponent({ to, className, text }) {
  return (
    <>
      <Link to={to}>
        <button className={className}>{text}</button>
      </Link>
    </>
  );
}
