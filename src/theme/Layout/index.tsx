import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import { useHistory, useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const passed = localStorage.getItem('quiz_passed') === 'yes';
        const isQuizPage = location.pathname.endsWith('/quiz');
        const isMainPage = location.pathname.endsWith("HollowEngineDocumentation/")

        if (!passed && !isQuizPage && !isMainPage) {
            history.replace('/HollowEngineDocumentation/quiz');
        }
    }, [location.pathname]);

    return <Layout {...props} />;
}
