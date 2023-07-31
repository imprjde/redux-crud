import "./Header.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { searchUser } from "../features/userDetailSlice";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const users = useSelector((state) => state.app.users);


  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <div className="header">
      <div className="maindiv">
        <h1
          className="h12"
          onClick={() => {
            navigate("/");
          }}
        >
          RTK CRUD
        </h1>
        <Link to="/create">
          <button className="newBtn">
            Create New User <span className="">+</span>
          </button>
        </Link>
        {location.pathname === "/" && (
          <h3
            className="allPost"
            onClick={() => {
              navigate("/");
            }}
          >
            All Post ({users ? users.length : "0"})
          </h3>
        )}
      </div>

      <input
        className="searchIP"
        placeholder="Search User..."
        onChange={(e) => setSearchData(e.target.value)}
      />
    </div>
  );
};

export default Header;
