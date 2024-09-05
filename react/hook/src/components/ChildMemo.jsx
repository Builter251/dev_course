import React from 'react';
import { memo } from 'react';

const ChildMemo = (props) => {
    const { update } = props;

    console.log('ChildMemo rendered');
    return (
        <div>
            
        </div>
    );
};

export default memo(ChildMemo);