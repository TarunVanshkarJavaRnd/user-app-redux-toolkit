import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeUser } from '../store/slices/UserSlice';
// import {MdDeleteForever} from 'react-icons/all.js';

const DisplayUsers = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }
    
    return (
        <div>
            {
                data.map((user, id) => {
                    return <li key={id}>
                        {user}
                        <button className='btn-delete' onClick={() => deleteUser(id)}>
                            {/* <MdDeleteForever className="delete-icon" /> */}
                            <div>delete</div>
                        </button>
                    </li>
                })
            }
        </div>
    );
}

export default DisplayUsers;
