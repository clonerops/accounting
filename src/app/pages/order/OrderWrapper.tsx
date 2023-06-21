import { useCallback, useState } from "react";
import { KTSVG } from "../../../_cloner/helpers";
import { ProjectsTab } from "../../../_cloner/layout/components/aside/Tabs/ProjectsTab";
import { PageTitle } from "../../../_cloner/layout/core";
import { Search } from "../../../_cloner/partials";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import Dropdown5 from "../../../_cloner/partials/content/dropdown/Dropdown5";
import CustomSelect from "../../../_cloner/partials/content/dropdown/Dropdown6";
import CustomInput from "../../../_cloner/partials/content/input/CustomInput";
import SearchInput from "../../../_cloner/partials/layout/search/SearchInput";
import CustomModal from "../../../_cloner/partials/modals/CustomModal";
import { useCreateCustomer } from "../../modules/customer/core/_hooks";
import { handleDropdownValue } from "../../modules/product/core/_function";
import { IProductProps } from "../../modules/product/core/_models";
import { useProducts } from "../../modules/product/core/hooks";
import { useStores } from "../../modules/store/core/_hooks";

const OrderPage = (props: IProductProps) => {
    const { products, stores } = props;
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        nationalCode: "",
        mobile: "",
        telephone: "",
    });

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setInputs((state) => ({ ...state, [name]: value }));
        },
        []
    );

    const productOnChange = (selectedOption: any) => {};

    const { mutate } = useCreateCustomer();

    const createCustomer = () => {
        mutate(
            {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                nationalCode: inputs.nationalCode,
                mobile: inputs.mobile,
                telephone: inputs.telephone,
            }
        )
    };



    return (
        <>
            <CustomModal
                id={"createcustomer"}
                title="ایجاد مشتری جدید"
                onClick={createCustomer}
            >
                <div className="create_customer">
                    <CustomInput
                        key="firstName"
                        name="firstName"
                        value={inputs.firstName}
                        onChange={onChangeHandler}
                        title="نام"
                    />
                    <CustomInput
                        key="lastName"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={onChangeHandler}
                        title="نام خانوادگی"
                    />
                    <CustomInput
                        key="nationalCode"
                        name="nationalCode"
                        value={inputs.nationalCode}
                        onChange={onChangeHandler}
                        title="کدملی"
                    />
                    <CustomInput
                        key="mobile"
                        name="mobile"
                        value={inputs.mobile}
                        onChange={onChangeHandler}
                        title="شماره همراه"
                    />
                    <CustomInput
                        key="telephone"
                        name="telephone"
                        value={inputs.telephone}
                        onChange={onChangeHandler}
                        title="شماره ثبت"
                    />
                </div>
            </CustomModal>

            <Card5 title="سفارشات" image="">
                <div className="m-0">
                    <div className="d-flex mb-10 gap-8">
                        <Search placeholder="جستجو مشتری" />
                        <div
                            data-bs-target="#createcustomer"
                            data-bs-toggle="modal"
                            className="add_customer"
                        >
                            <label className="add_customer_icon">
                                <KTSVG
                                    path="/media/icons/duotune/arrows/arr063.svg"
                                    className="svg-icon-2 rotate-180"
                                />
                            </label>
                            <span>افزودن مشتری جدید</span>
                        </div>
                    </div>
                </div>
                <div className="order">
                    <CustomSelect
                        title="محصولات"
                        placeholder="انتخاب کنید..."
                        options={handleDropdownValue(products)}
                        onChange={productOnChange}
                    />
                    <CustomSelect
                        title="انبار"
                        placeholder="انتخاب کنید..."
                        options={handleDropdownValue(stores)}
                        onChange={productOnChange}
                    />
                    <CustomInput title="قیمت" />
                </div>
                <button className="custombutton btn btn-primary">افزودن</button>
            </Card5>
        </>
    );
};

const OrderWrapper = () => {
    const { data: products } = useProducts();
    const { data: stores } = useStores();

    return (
        <>
            <PageTitle description="ثبت سفارش"></PageTitle>
            <OrderPage products={products} stores={stores} />
        </>
    );
};

export default OrderWrapper;
