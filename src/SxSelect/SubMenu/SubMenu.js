import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubMenu.module.scss';


const SubMenu = ({data, selectedItems, handleMouseLeave, handleClick}) => {

    return (<ul className={styles.sxSubDropdownList} onMouseLeave={handleMouseLeave}>
        {
            data.items.map((i) => {
                return (<li key={i.val}
                            className={selectedItems.includes(i) ? 'sxSelected ' + styles.sxSubListItemSelected : styles.sxSubListItem}
                            onClick={() => handleClick(i, data.parent)}><span
                    className={styles.sxSubListItemLabel}>{i.label}</span></li>)
            })
        }
    </ul>);

};

SubMenu.propTypes = {
    data: PropTypes.array,
    selectedItems: PropTypes.array,
    handleMouseLeave: PropTypes.func,
    handleClick: PropTypes.func
};

export default SubMenu;