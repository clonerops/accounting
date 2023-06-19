import { PageTitle } from "../../../_cloner/layout/core"
import { Search } from "../../../_cloner/partials"
import { Card5 } from "../../../_cloner/partials/content/cards/Card5"
import SearchInput from "../../../_cloner/partials/layout/search/SearchInput"

const OrderPage = () => {
    return (
        <>
         <Card5 title="سفارشات" image="">
            <SearchInput placeholder="جستجو مشتری ..."  />
         </Card5>
        </>
    )
}

const OrderWrapper = () => {
  return (
    <>
        <PageTitle description="ثبت سفارش">

        </PageTitle>
        <OrderPage />
    </>
  )
}

export default OrderWrapper