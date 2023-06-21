export const handleDropdownValue = (data: any) => {
    return (
        data &&
        data.map((obj: { id: any; title: any; type: any }): any => {
            const { id, title, type } = obj;
            return { value: id, label: title, type: type };
        })
    );
};
