import { PageTitle } from "../../../_cloner/layout/core";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import Dropdown5 from "../../../_cloner/partials/content/dropdown/Dropdown5";
import SearchInput from "../../../_cloner/partials/layout/search/SearchInput";
import { handleDropdownValue } from "../../modules/product/core/_function";
import { IProductProps } from "../../modules/product/core/_models";
import { useProducts } from "../../modules/product/core/hooks";
import { useState } from 'react'

const OrderPage = (props: IProductProps) => {
    const { data } = props;
    
    return (
        <>
            <Card5 title="سفارشات" image="">
                <SearchInput placeholder="جستجو مشتری ..." />
                <div className="order">
                    <Dropdown5 title="محصولات" data={data} />
                    {/* <Dropdown5 title="انبار" data={data} /> */}
                </div>
            </Card5>
        </>
    );
};

const OrderWrapper = () => {
    const { data: products, isLoading } = useProducts();

    return (
        <>
            <PageTitle description="ثبت سفارش"></PageTitle>
            <OrderPage data={products} />
        </>
    );
};

export default OrderWrapper;
