import PropTypes from 'prop-types';
const FilterItems = ({filter,onInputValue}) => {
    return ( <><input onChange={onInputValue} name="filter" value={filter}>
    </input></> );
}
FilterItems.propTypes = {
    filter: PropTypes.string.isRequired,
    onInputValue: PropTypes.func.isRequired
}
export default FilterItems;