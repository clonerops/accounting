import { FC } from "react";
import { KTSVG } from "../../helpers";

interface IProps {
    id?: string
    title?: string
    onClick?: () => void
    children: React.ReactNode
}

const CustomModal: FC<IProps> = ({id, title, onClick, children}) => {
    return (
        <>
            <div className="modal fade" tabIndex={-1} id={`${id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <div
                                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <KTSVG
                                    path="/media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                />
                            </div>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                            >
                                بستن
                            </button>
                            <button onClick={onClick} type="button" className="btn btn-primary">
                                ثبت 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomModal;
