import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from '../store'
import Skeleton from './Skeleton'

function UsersList() {
  const {isLoading, data, error} = useSelector((state) => {
    return state.users
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

if (isLoading) {
  return <Skeleton times={10} className='h-10 w-full'/>
}

if(error){
  return <div>Error fetching data...</div>
}

  return (
    <div className='text-2xl'>
      {data.length}
    </div>
  )
}

export default UsersList