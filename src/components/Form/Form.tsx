import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useMutation } from 'react-query'
import { User, addressChanOn, emailChanOn, nameChanOn, phoneChanOn } from '../../store/userSlice'
import { userApi } from '../../service/userApi'
import { Order } from '../../types'
import { orderApi } from '../../service/orderApi'
import { orderAllRemove } from '../../store/orderSlice'

const Form: FC = () => {
  const { mutateAsync } = useMutation('user', (data: User) => userApi.postCreateUser(data), {
    onSuccess: () => {
      alert('User Saved Successfully')
    },

    onError: () => {
      alert('error')
    },
  })

  const { mutateAsync: newOrder } = useMutation(
    'order',
    (data: Order) => orderApi.postCreateOrder(data),
    {
      onSuccess: () => {
        alert('User Saved Successfully')
      },

      onError: () => {
        alert('error')
      },
    },
  )

  const username = useSelector((state: RootState) => state.user.username)
  const email = useSelector((state: RootState) => state.user.email)
  const phone = useSelector((state: RootState) => state.user.phone)
  const address = useSelector((state: RootState) => state.user.address)
  const UserOrder = useSelector((state: RootState) => state.order.UserOrder)
  const OrderPrice = useSelector((state: RootState) => state.order.OrderPrice)
  const dispatch = useDispatch()

  const NameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(nameChanOn(event.target.value))
    console.log(event.target.value)
  }

  const EmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(emailChanOn(event.target.value))
    console.log(event.target.value)
  }

  const PhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(phoneChanOn(event.target.value))
    console.log(event.target.value)
  }

  const AddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addressChanOn(event.target.value))
    console.log(event.target.value)
  }

  const handleButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (username === '') {
      return alert('Error write Name ')
    } else if (email === '') {
      return alert('Error write Email ')
    } else if (phone === '') {
      return alert('Error write Phone')
    } else if (address === '') {
      return alert('Error write Address')
    } else if (UserOrder.length === 0) {
      return alert('Error no data  Shopping Cart ')
    }

    await mutateAsync({ username, email, phone, address })

    for (let i = 0; UserOrder.length > i; i++) {
      await newOrder({ ...UserOrder[i] })
    }

    dispatch(nameChanOn(''))
    dispatch(emailChanOn(''))
    dispatch(phoneChanOn(''))
    dispatch(addressChanOn(''))
    dispatch(orderAllRemove())
  }

  return (
    <div className='border-b border-gray-900/10 pb-12 w-96 ml-12 mt-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Use a permanent address where you can receive mail.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
            Name
          </label>
          <div className='mt-2'>
            <input
              value={username}
              onChange={(event) => NameChange(event)}
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
            Email:
          </label>
          <div className='mt-2'>
            <input
              value={email}
              onChange={(event) => EmailChange(event)}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
            Phone
          </label>
          <div className='mt-2'>
            <input
              value={phone}
              onChange={(event) => PhoneChange(event)}
              id='phone'
              name='phone'
              type='phone'
              autoComplete='phone'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
            Address
          </label>
          <div className='mt-2'>
            <input
              value={address}
              onChange={(event) => AddressChange(event)}
              id='address'
              name='address'
              type='address'
              autoComplete='address'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
      <div className='flex space-x-10 mt-10'>
        <button className='text-red-500' onClick={(event) => handleButton(event)}>
          Order
        </button>
        <h1>Price: {OrderPrice} UA</h1>
      </div>
    </div>
  )
}
export default Form
