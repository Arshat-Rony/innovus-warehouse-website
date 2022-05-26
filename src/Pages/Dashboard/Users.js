import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading type="spokes" color=" black"></Loading>
    }

    const handleAdmin = (email) => {
        const url = `http://localhost:5000/admin/user/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast("You have succesfully made him admin")
                }

            })
    }

    return (
        <div className='min-h-screen'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S/L No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.address}</td>
                                    <td>{user.role === "admin" ? <span className='text-blue-600'>Admin</span> : <button onClick={() => handleAdmin(user?.email)} className='btn-sm btn-secondary btn font-bold text-red-500'>Make Admin</button>}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;