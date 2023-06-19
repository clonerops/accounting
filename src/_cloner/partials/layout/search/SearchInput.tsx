import { FC } from 'react'
import { KTSVG } from "../../../helpers";

interface IProps {
    placeholder?: string
}

const SearchInput:FC<IProps> = ({placeholder='جسجو...'}) => {
    return (
        <form
            data-kt-search-element="form"
            className="w-100 position-relative mb-5 mb-lg-0"
            autoComplete="off"
        >
            <KTSVG
                path="/media/icons/duotune/general/gen021.svg"
                className="svg-icon-2 svg-icon-lg-3 svg-icon-gray-800 position-absolute top-50 translate-middle-y ms-5"
            />
            {/*begin::Input*/}
            <input
                type="text"
                className="search-input form-control form-control-solid ps-13"
                name="search"
                placeholder={placeholder}
                data-kt-search-element="input"
            />
            {/*end::Input*/}
            {/*begin::Spinner*/}
            <span
                className="position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                data-kt-search-element="spinner"
            >
                <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
            </span>
            {/*end::Spinner*/}
            {/*begin::Reset*/}
            <span
                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-4 d-none"
                data-kt-search-element="clear"
            >
                <KTSVG
                    path="/media/icons/duotune/arrows/arr061.svg"
                    className="svg-icon svg-icon-2 svg-icon-lg-1 me-0"
                />
            </span>
            {/*end::Reset*/}
        </form>
    );
};

export default SearchInput;
