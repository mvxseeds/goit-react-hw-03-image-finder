import { LoadMoreBtn } from "./Button.styled";

const Button = ({onLoadMore}) => {
    return (
        <LoadMoreBtn type="button" onClick={onLoadMore}>Load more</LoadMoreBtn>
    );
};

export default Button;
