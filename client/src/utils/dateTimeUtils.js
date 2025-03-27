export const fromIsoDate = (isoDate) => {
    const date = new Date(isoDate);

    // const formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedDate = date.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

    return formattedDate;
}

export const toDataInput = (isoDate) => {
    const dateOnly = isoDate.split("T")[0];

    return dateOnly;
}