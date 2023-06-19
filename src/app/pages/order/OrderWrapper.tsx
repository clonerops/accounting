import { PageTitle } from "../../../_cloner/layout/core";
import { Dropdown1, Dropdown2, Search } from "../../../_cloner/partials";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import Dropdown5 from "../../../_cloner/partials/content/dropdown/Dropdown5";
// import Dropdown5 from "../../../_cloner/partials/content/dropdown/Dropdown5";
import SearchInput from "../../../_cloner/partials/layout/search/SearchInput";

const allData = [
    { id: 1, text: "ابوالفضل معصومی N23 " },
    { id: 2, text: "معصومی N63" },
    { id: 3, text: "رضایی N83" },
];

const OrderPage = () => {
    return (
        <>
            <Card5 title="سفارشات" image="">
                <SearchInput placeholder="جستجو مشتری ..." />
                <div className="order">
                    <Dropdown5 title="محصولات" data={allData} />
                    <Dropdown5 title="محصولات" data={allData} />
                    <Dropdown5 title="انبار" data={allData} />
                    <Dropdown5 title="انبار" data={allData} />
                    <Dropdown5 title="انبار" data={allData} />
                    <Dropdown5 title="محصولات" data={allData} />
                </div>
            </Card5>
        </>
    );
};

const OrderWrapper = () => {
    return (
        <>
            <PageTitle description="ثبت سفارش"></PageTitle>
            <OrderPage />
        </>
    );
};

export default OrderWrapper;
