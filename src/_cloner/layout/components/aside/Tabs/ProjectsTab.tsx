import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { Dropdown1, Search } from "../../../../partials";

const projects: ReadonlyArray<{ image: string; title: string; link: string }> =
    [
        {
            image: "/media/svg/brand-logos/bebo.svg",
            title: "Briviba SaaS",
            link: "By James",
        },
        
    ];

const ProjectsTab = () => {
    return (
        <div className="m-0">
            {/* begin::Toolbar */}
            <div className="d-flex mb-10">
                <Search />
            </div>
        </div>
    );
};

export { ProjectsTab };
