import React from 'react';
import './Articles.scss';
import styles from "./Articles.module.scss";

class Articles extends React.Component {
    render() {
        return (
            <div>
                <div className="articles">Our articles</div>
                <div className={styles.options}>Create, Read, Update, Delete</div>
            </div>
        )
    }
}

export default Articles;
