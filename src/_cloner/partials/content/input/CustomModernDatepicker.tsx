import { useState } from "react";
import DatePicker from "react-modern-calendar-datepicker";

const CustomModernDatepicker = () => {
    const [selectedDay, setSelectedDay] = useState<any>(null);

    return (
        <div
            style={{
                minWidth: "10vw",
                gap: 8,
            }}
        >
            <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                inputPlaceholder="تاریخ تسویه"
                shouldHighlightWeekends
            />
        </div>
    );
};

export default CustomModernDatepicker;
