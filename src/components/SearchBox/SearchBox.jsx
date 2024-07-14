import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
    return (
        <div className={s.search}>
            <p>Find contacts by name</p>
            <input className={s.field} type="text" value={value} onChange={(e)=>onSearch(e.target.value)} />
        </div>
    );
};

export default SearchBox;