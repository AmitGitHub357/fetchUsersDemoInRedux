import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userAction";
const UserContainer = ({ fetchUsers, userData }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h1>loading</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      <h2>User List</h2>
      <div>{userData && userData.users.map((user) => <p key={user.id}>{user.name} </p>)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
