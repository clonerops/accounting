/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  orders: any
  setOrders?: any
}

const TablesWidget5: React.FC<Props> = ({className, orders, setOrders}) => {
  const handleRemoveItem = (indexToRemove: number) => {
    const updatedArray = [...orders]; // Create a copy of the original array
    updatedArray.splice(indexToRemove, 1); // Remove the item at the specified index
    setOrders(updatedArray); // Update the state with the updated array
  };
  

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>لیست سفارشات</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>
            {`تعداد ${orders.length} سفارش در سبد سفارش موجود می باشد`}
          </span> */}
        </h3>
        {/* <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {orders?.map((item: any, index: any) => {
                    return  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        {item.title}
                      </a>
                      {/* <span className='text-dark fw-bold text-hover-primary fs-6'>{`${item.quantity} بسته`}</span> */}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> تعداد {item.quantity}</td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{item.amount} ریال</td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>انبار {item.store}</td>
                    {/* <td className='text-end'>
                      <span className='badge badge-light-success'>Approved</span>
                    </td> */}
                    <td className='text-end'>
                      <a
                        onClick={() => handleRemoveItem(index)}
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr061.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  })}
                 
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
