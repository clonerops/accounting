/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { sliceNumberPrice } from "../../../helpers/sliceNumberPrice";

type Props = {
    className: string;
    orders: any;
    setOrders?: any;
};

const TablesWidget11: React.FC<Props> = ({ className, orders, setOrders }) => {
    const handleRemoveItem = (indexToRemove: number) => {
        const updatedArray = [...orders]; // Create a copy of the original array
        updatedArray.splice(indexToRemove, 1); // Remove the item at the specified index
        setOrders(updatedArray); // Update the state with the updated array
    };

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">
                        لیست سفارشات
                    </span>
                    {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span> */}
                </h3>
                {/* <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Member
          </a>
        </div> */}
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className="card-body py-3">
                {/* begin::Table container */}
                <div className="table-responsive">
                    {/* begin::Table */}
                    <table className="table align-middle gs-0 gy-4">
                        {/* begin::Table head */}
                        <thead>
                            <tr className="fw-bold text-muted bg-light">
                                <th className="ps-4 min-w-200px rounded-start">
                                    محصول
                                </th>
                                <th className="min-w-125px">تعداد</th>
                                <th className="min-w-125px">قیمت</th>
                                <th className="min-w-200px">انبار</th>
                                {/* <th className='min-w-150px'>Status</th>
                <th className='min-w-200px text-end rounded-end'></th> */}
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            {orders?.map((item: any, index: any) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-30px me-2">
                                                    <img
                                                        src={toAbsoluteUrl(
                                                            "/media/svg/brand-logos/plurk.svg"
                                                        )}
                                                        className=""
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-start flex-column">
                                                    <a
                                                        href="#"
                                                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-dark fw-bold text-hover-primary fs-6">
                                            {" "}
                                            {item.quantity}
                                        </td>
                                        <td className="text-dark fw-bold text-hover-primary fs-6">
                                            {sliceNumberPrice(item.amount)} ریال
                                        </td>
                                        <td className="text-dark fw-bold text-hover-primary fs-6">
                                            انبار {item.store}
                                        </td>
                                        <td className="text-end">
                                            <a
                                                onClick={() =>
                                                    handleRemoveItem(index)
                                                }
                                                href="#"
                                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                            >
                                                <KTSVG
                                                    path="/media/icons/duotune/arrows/arr061.svg"
                                                    className="svg-icon-2"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        {/* end::Table body */}
                    </table>
                    {/* end::Table */}
                </div>
                {/* end::Table container */}
            </div>
            {/* begin::Body */}
        </div>
    );
};

export { TablesWidget11 };
