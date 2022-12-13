import { createUltimatePagination } from "react-ultimate-pagination";

const Button = ({ value, isActive, disabled, onClick }) => (
    <button
        style={isActive ? { fontWeight: "bold" } : null}
        onClick={onClick}
        disabled={disabled}
    >
        {value}
    </button>
);

export const Pagination = createUltimatePagination({
    itemTypeToComponent: {
        PAGE: Button,
        ELLIPSIS: () => <Button value="..." />,
        FIRST_PAGE_LINK: () => <Button value="&laquo;" />,
        PREVIOUS_PAGE_LINK: () => <Button value="&lsaquo;" />,
        NEXT_PAGE_LINK: () => <Button value="&rsaquo;" />,
        LAST_PAGE_LINK: () => <Button value="&raquo;" />
    }
});