import React, {Children, cloneElement, useEffect, useState} from 'react';

/*
 * Show random content
*/

const Content = ({ range, children }) => <>{children}</>

const RandomContent = ({ max, children }) => {
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * (parseInt(max) + 1)));
    }, [max]);

    const cases = Children.map(children, (child) => {
        if (!child || !child.props.range) return null;
        const [start, end] = child.props.range.split('..').map(Number);
        if (randomNumber >= start && randomNumber <= end) {
            return cloneElement(child, { isActive: true });
        }
        return null;
    });

    return <>{cases.find((c) => c !== null)}</>;
};

RandomContent.Content = Content

export default RandomContent