import React from 'react';
import styles from './SubMenu.module.scss';


const SubMenu = ({data, x, y, h, selectedItems, handleMouseLeave, handleClick}) => {

    const stylesInline = {
        top: y,
        left: x,
        height: h
    };
    return (<ul style={stylesInline} className={styles.sxSubDropdownList} onMouseLeave={handleMouseLeave}>
        {
            data.items.map((i) => {
                return (<li key={i.val} className={selectedItems.includes(i) ? styles.sxSubListItemSelected: styles.sxSubListItem} onClick={() => handleClick(i, data.parent)}><span className={styles.sxSubListItemLabel}>{i.label}</span></li>)
            })
        }
    </ul>);

};

export default SubMenu;