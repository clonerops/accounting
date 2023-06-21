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
import { useCreateCustomer, useCustomerList } from "../../modules/customer/core/_hooks";
import { handleDropdownValue } from "../../modules/product/core/_function";
import { IProductProps } from "../../modules/product/core/_models";
import { useProducts } from "../../modules/product/core/hooks";
import { useStores } from "../../modules/store/core/_hooks";
import { TablesWidget5 } from "../../../_cloner/partials/widgets";
import CustomTextarea from "../../../_cloner/partials/content/input/CustomTextarea";
import CustomDatepicker from "../../../_cloner/partials/content/input/CustomDatepicker";

interface ISelectValue {
    value?: number
    label?: string
    type?: string
}

interface IOrders {
    title: string | undefined
    pack?: number | undefined
    amount: string | undefined
    store: string | undefined
}

const OrderPage = (props: IProductProps) => {
    const { products, stores } = props;
    // let orders: IOrders[] = []
    const [orders, setOrders] = useState<IOrders[]>([])
    const [productValue, setProductValue] = useState<ISelectValue>({})
    const [storeValue, setStoreValue] = useState<ISelectValue>({})
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        nationalCode: "",
        mobile: "",
        telephone: "",
        amount: "",
        quantity: ""
    });

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setInputs((state) => ({ ...state, [name]: value }));
        },
        []
    );

    const productOnChange = (selectedOption: any) => setProductValue(selectedOption)
    const storeOnChange = (selectedOption: any) => setStoreValue(selectedOption)


    const { mutate } = useCreateCustomer();

    const createCustomer = () => {
        mutate({
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            nationalCode: inputs.nationalCode,
            mobile: inputs.mobile,
            telephone: inputs.telephone,
        });
    };

    const addedOrders = () => {
        if (!productValue) {
            alert('وارد نمودن محصول اجباری می باشد')
        } else {
            const newObject = {
                title: productValue.label,
                amount: inputs.amount,
                quantity: inputs.quantity,
                store: storeValue.label
            }

            setOrders((prev) => [...prev, newObject])
        }
    }


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
                        autoFocus={true}
                    />
                    <CustomSelect
                        title="انبار"
                        placeholder="انتخاب کنید..."
                        options={handleDropdownValue(stores)}
                        onChange={storeOnChange}
                    />
                    <CustomInput name="quantity" key="quantity" value={inputs.quantity} onChange={onChangeHandler} title="مقدار" />
                    {storeValue.type == '2' &&
                        <>
                            <CustomInput title="خرید از" />
                            <CustomInput title="قیمت خرید" />
                        </>
                    }
                    <CustomInput key='amount' name='amount' value={inputs.amount} onChange={onChangeHandler} title="قیمت" />
                    <div className="button_add_order">
                        <button onClick={addedOrders} className="custombutton btn btn-primary">
                            افزودن
                        </button>
                    </div>
                </div>
                <div className="order_items mt-5">
                    <TablesWidget5 className="" orders={orders} setOrders={setOrders} />
                </div>
                <div className="d-flex mt-5 gap-4">
                    <CustomDatepicker title="تاریخ تسویه" />
                    <div className="w-100">
                        <CustomTextarea title="توضیحات" />
                    </div>
                </div>

                <div className="mt-5">
                    <Card5 title="فاکتور فروش محصولات" image="">
                        <div className="salefactor d-flex justify-content-between">
                            <span className="font-weight-bold">قیمت کل</span>
                            <span className="font-weight-bold">590,000,000</span>
                        </div>
                        <div className="salefactor d-flex justify-content-between">
                            <span className="font-weight-bold">تخفیف</span>
                            <span className="font-weight-bold">800,000</span>
                        </div>
                        <div className="salefactor d-flex justify-content-between">
                            <span className="font-weight-bold">قیمت قابل پرداخت</span>
                            <span className="font-weight-bold">550,000,000</span>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <button className=" btn btn-primary">
                                ثبت سفارش
                            </button>
                        </div>
                    </Card5>
                </div>


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
