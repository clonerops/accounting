/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { toAbsoluteUrl, KTSVG } from "../../../helpers";
import { Dropdown1 } from "../dropdown/Dropdown1";

type Props = {
    image: string;
    title: string;
    children: React.ReactNode;
};

const Card5: FC<Props> = ({ image, title, children }) => {
    return (
        <div className="card h-100">
            {/* <div className="card-header flex-nowrap border-0 pt-9"> */}
            {/* <div className="card-header flex-nowrap border-0"> */}
                {/* <div className="card-title m-0">
                    <a
                        href="#"
                        className="fs-4 fw-bold text-hover-primary text-gray-600 m-0"
                    >
                        {title}
                    </a>
                </div> */}

                {/* <div className="card-toolbar m-0">
                    <button
                        type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-flip="top-end"
                    >
                        <KTSVG
                            path="/media/icons/duotune/general/gen024.svg"
                            className="svg-icon-3 svg-icon-primary"
                        />
                    </button>

                    <Dropdown1 />
                </div> */}
            {/* </div> */}

            {/* <div className="card-body d-flex flex-column px-9 pt-6 pb-8"> */}
            <div className="card-body d-flex flex-column px-9 pt-4">
                {children}
            </div>
        </div>
    );
};

export { Card5 };
