import React from "react";
import Link from "../UI/Link";

const CardFooter = (props) => {
  return (
    <div>
      <p className="card-footer">Copyright 2021 Evan Bechtol</p>
      <p>{props.content}</p>
      <Link page="https://www.google.com">Google</Link>
    </div>
  )
};

export default CardFooter;
