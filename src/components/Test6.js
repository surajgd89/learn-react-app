
import React, { forwardRef } from 'react';

function Test6(props, ref) {
    return (
        <div className="text-center">
            <h4>Test6 Component</h4>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(Test6);