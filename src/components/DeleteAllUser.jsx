import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
    const dispatch = useDispatch();

    const deleteUsers = () => {
        dispatch(deleteUser());
    };
  return <div className="btn" onClick={() => deleteUsers()}>DeleteAllUser</div>;
};