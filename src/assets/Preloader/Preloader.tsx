import React, {memo} from 'react';
import './Preloader.scss';

export default memo(function Preloader() {
        return (
            <div className="linear-activity">
                <div className="indeterminate"/>
            </div>
        );
    }
)