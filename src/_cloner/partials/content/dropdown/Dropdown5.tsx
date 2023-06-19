import {
    DropDownList,
    DropDownListFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";
import {
    CompositeFilterDescriptor,
    filterBy,
    FilterDescriptor,
} from "@progress/kendo-data-query";
import React, { useState, FC } from "react";

interface IDropdown {
    id: number;
    text: string;
}

interface IProps {
    data: IDropdown[];
    title: string;
}

const Dropdown5: FC<IProps> = ({ data, title }) => {
    const [dropDownData, setDropDownData] = useState(data.slice());

    // For Filter Data
    const filterData = (
        filter: FilterDescriptor | CompositeFilterDescriptor
    ) => {
        const dataFilter = data.slice();
        return filterBy(dataFilter, filter);
    };

    const filterChange = (event: DropDownListFilterChangeEvent) => {
        setDropDownData(filterData(event.filter));
    };

    // For Render No Data Message
    const listNoDataRender = (element: React.ReactElement<HTMLDivElement>) => {
        const noData = (
            <h4 style={{ fontSize: "1em" }}>
                <span
                    className="k-icon k-i-warning"
                    style={{ fontSize: "2.5em" }}
                />
                <br />
                داده ای برای نمایش وجود ندارد
            </h4>
        );

        return React.cloneElement(element, { ...element.props }, noData);
    };
    return (
        <div style={{
          minWidth: '20vw',
          gap: 8

        }}>
            <label className="dropdown__label">{title}</label>
            <DropDownList
                className=""
                data={dropDownData}
                textField="text"
                filterable={true}
                listNoDataRender={listNoDataRender}
                onFilterChange={filterChange}
            />
        </div>
    );
};

export default Dropdown5;
