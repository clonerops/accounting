export const handleDropdownValue = (data: any) => {
    return (
        data &&
        data.map((obj: { id: any; title: any; }): any => {
            const { id, title } = obj;
            return { id, text: title };
        })
    );
};
