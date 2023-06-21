import { Link } from "react-router-dom";
import { Search } from "../../../../partials";

const ProjectsTab = () => {
    return (
        <div className="m-0">
            {/* begin::Toolbar */}
            {/* <div className="d-flex mb-10">
                <Search />
            </div> */}
            <div className="d-flex mb-10">
                <Link to='/order'>ثبت سفارش محصولات</Link>
            </div>
            <div className="d-flex mb-10">
                <Link to='/orderlist'>سفارشات مشتریان</Link>
            </div>
        </div>
    );
};

export { ProjectsTab };
