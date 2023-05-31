import React from "react";

import { Link } from "react-router-dom";

<Link to="/about">소개</Link>;

const Button = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1, { replace: true });
  };

  const goArticles = () => {
    navigate("/articles", { replace: true });
  };

  return <button>{title}</button>;
};

export default Btn;
