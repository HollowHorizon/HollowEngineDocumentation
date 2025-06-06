import { useEffect } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';


export default function useQuizRedirect() {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const passed = localStorage.getItem('quiz_passed') === 'yes';
        const isQuizPage = location.pathname.startsWith('/quiz');

        console.log(location.pathname);

        if (!passed && !isQuizPage) {
            history.replace('/quiz'); // заменяет в истории, не давая кнопке "назад" вернуться
        }
    }, [location.pathname]);
}