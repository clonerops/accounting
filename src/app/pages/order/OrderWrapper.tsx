import { useCallback, useEffect, useState } from "react";
import { KTSVG } from "../../../_cloner/helpers";
import { PageTitle } from "../../../_cloner/layout/core";
import { Search } from "../../../_cloner/partials";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import CustomSelect from "../../../_cloner/partials/content/dropdown/Dropdown6";
import CustomInput from "../../../_cloner/partials/content/input/CustomInput";
import CustomModal from "../../../_cloner/partials/modals/CustomModal";
import {
    useCreateCustomer,
    useCustomerList,
} from "../../modules/customer/core/_hooks";
import { handleDropdownValue } from "../../modules/product/core/_function";
import { IProductProps } from "../../modules/product/core/_models";
import { useProducts } from "../../modules/product/core/hooks";
import { useStores } from "../../modules/store/core/_hooks";
import {
    TablesWidget11,
} from "../../../_cloner/partials/widgets";
import CustomTextarea from "../../../_cloner/partials/content/input/CustomTextarea";
import CustomDatepicker from "../../../_cloner/partials/content/input/CustomDatepicker";
import { convertToPersianWord } from "../../../_cloner/helpers/convertPersian";
import { sliceNumberPrice } from "../../../_cloner/helpers/sliceNumberPrice";
import { useCreateOrder } from "../../modules/order/core/_hooks";

interface ISelectValue {
    value?: number;
    label?: string;
    type?: string;
}

interface IOrders {
    title: string | undefined;
    pack?: number | undefined;
    amount: string | undefined;
    store: string | undefined;
}

const OrderPage = (props: IProductProps) => {
    const { products, stores, customers } = props;
    // let orders: IOrders[] = []
    const [orders, setOrders] = useState<IOrders[]>([]);
    const [productValue, setProductValue] = useState<ISelectValue>({});
    const [storeValue, setStoreValue] = useState<ISelectValue>({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        nationalCode: "",
        mobile: "",
        telephone: "",
        amount: "",
        quantity: "",
    });

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setInputs((state) => ({ ...state, [name]: value }));
        },
        []
    );

    const productOnChange = (selectedOption: any) =>
        setProductValue(selectedOption);
    const storeOnChange = (selectedOption: any) =>
        setStoreValue(selectedOption);

    const { mutate } = useCreateCustomer();
    const { mutate: orderDetail } = useCreateOrder();

    const createCustomer = () => {
        mutate({
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            nationalCode: inputs.nationalCode,
            mobile: inputs.mobile,
            telephone: inputs.telephone,
        });
    };

    const addedOrders = (e: any) => {
        e.preventDefault();
        if (productValue.label === undefined) {
            alert("وارد نمودن محصول اجباری می باشد");
        } else {
            const newObject = {
                title: productValue.label,
                amount: inputs.amount,
                quantity: inputs.quantity,
                store: storeValue.label,
            };

            setOrders((prev) => [...prev, newObject]);
        }
    };

    useEffect(() => {
        const prices = orders.map((obj) => Number(obj.amount));
        const newPrices = [...prices];
        const newTotal = newPrices.reduce((acc: any, item) => acc + item, 0);
        setTotalAmount(newTotal);
    }, [orders]);


    const orderConfirm = () => {
        orderDetail(
            {
                customerId: 1,
                settlementDate: "2022-12-31",
                description: "test",
                totalAmount: "123",
                order_details: [
                    // {
                    //     amount: "123",
                    //     quantity: "345",
                    //     customerId: 1,
                    //     productId: 6,
                    //     storeId: 4
                    // }
                ]
            }
        )
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
                        isCreateCustomer={true}
                        title="نام"
                    />
                    <CustomInput
                        key="lastName"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={onChangeHandler}
                        isCreateCustomer={true}
                        title="نام خانوادگی"
                    />
                    <CustomInput
                        key="nationalCode"
                        name="nationalCode"
                        value={inputs.nationalCode}
                        onChange={onChangeHandler}
                        isCreateCustomer={true}
                        title="کدملی"
                    />
                    <CustomInput
                        key="mobile"
                        name="mobile"
                        value={inputs.mobile}
                        onChange={onChangeHandler}
                        isCreateCustomer={true}
                        title="شماره همراه"
                    />
                    <CustomInput
                        key="telephone"
                        name="telephone"
                        value={inputs.telephone}
                        onChange={onChangeHandler}
                        isCreateCustomer={true}
                        title="شماره ثبت"
                    />
                </div>
            </CustomModal>

            <Card5 title="سفارشات" image="">
                <div className="m-0">
                    <div className="d-flex mb-10 gap-8">
                        <Search
                            customers={customers}
                            placeholder="جستجو مشتری"
                        />
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
                <form className="order">
                    <CustomSelect
                        placeholder="محصولات"
                        // placeholder="انتخاب کنید..."
                        options={handleDropdownValue(products)}
                        onChange={productOnChange}
                        autoFocus={true}
                    />
                    <CustomSelect
                        placeholder="انبار"
                        // placeholder="انتخاب کنید..."
                        options={handleDropdownValue(stores)}
                        onChange={storeOnChange}
                    />
                    <CustomInput
                        name="quantity"
                        key="quantity"
                        value={inputs.quantity}
                        onChange={onChangeHandler}
                        placeholder="مقدار"
                    />
                    {storeValue.type === "2" && (
                        <>
                            <CustomInput placeholder="خرید از" />
                            <CustomInput placeholder="قیمت خرید" />
                        </>
                    )}
                    <CustomInput
                        key="amount"
                        name="amount"
                        value={inputs.amount}
                        onChange={onChangeHandler}
                        placeholder="قیمت"
                    />
                    <div className="button_add_order">
                        <button
                            onClick={addedOrders}
                            className="custombutton btn btn-primary"
                        >
                            <KTSVG
                                path="/media/icons/duotune/arrows/arr009.svg"
                                className="svg-icon-3 svg-icon-primary"
                            />
                        </button>
                    </div>
                </form>
                <div className="order_items_confirm mt-5">
                    <TablesWidget11
                        className="order_items1"
                        orders={orders}
                        setOrders={setOrders}
                    />
                    <div className="order_items2 mt-5">
                        <div className="d-flex flex-column mt-5 gap-4">
                            <CustomDatepicker placeholder="تاریخ تسویه" />
                            <div className="w-100">
                                <CustomTextarea placeholder="توضیحات" />
                            </div>
                        </div>

                        <div className="salefactor d-flex justify-content-between">
                            <span className="font-weight-bold">قیمت کل</span>
                            <span className="font-weight-bold">
                                {sliceNumberPrice(totalAmount)} ریال
                            </span>
                        </div>
                        <div className="salefactor d-flex flex-column justify-content-between">
                            <span className="font-weight-bold">
                                {convertToPersianWord(totalAmount)} تومان
                            </span>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <button onClick={orderConfirm} className=" btn btn-primary">
                                ثبت سفارش
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex mt-5 gap-4">
                    <CustomDatepicker title="تاریخ تسویه" />
                    <div className="w-100">
                        <CustomTextarea title="توضیحات" />
                    </div>
                </div> */}
            </Card5>
        </>
    );
};

const OrderWrapper = () => {
    const { data: products } = useProducts();
    const { data: stores } = useStores();
    const { data: customers } = useCustomerList();
    return (
        <>
            <PageTitle description="ثبت سفارش"></PageTitle>
            <OrderPage
                products={products}
                stores={stores}
                customers={customers}
            />
        </>
    );
};

export default OrderWrapper;
