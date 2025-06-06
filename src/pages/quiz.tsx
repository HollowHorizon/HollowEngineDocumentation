import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

const rawQuestions = [
    {
        question: 'Что выведет println(5 / 2)?',
        options: ['2', '2.5', '2.0', 'Ошибка компиляции'],
        correct: 0,
    },
    {
        question: 'Как объявить неизменяемую переменную в Kotlin?',
        options: ['let', 'const', 'val', 'var'],
        correct: 2,
    },
    {
        question: 'Какой тип у переменной: val x = 3.14?',
        options: ['Double', 'Float', 'Decimal', 'Number'],
        correct: 0,
    },
    {
        question: 'Что делает оператор `!!` в Kotlin?',
        options: ['Ничего', 'Проверяет на null', 'Вызывает исключение, если null', 'Удаляет пробелы'],
        correct: 2,
    },
    {
        question: 'Какой модификатор используется для наследования?',
        options: ['open', 'public', 'extends', 'inherit'],
        correct: 0,
    },
    {
        question: 'Что такое data class?',
        options: ['Класс с данными', 'Класс с логикой', 'Класс для хранения данных с автогенерацией методов', 'JSON-модель'],
        correct: 2,
    },
    {
        question: 'Как обозначить функцию, возвращающую ничего?',
        options: ['void', 'unit', 'null', 'Unit'],
        correct: 3,
    },
    {
        question: 'Какой из этих списков изменяемый?',
        options: ['listOf(1, 2, 3)', 'mutableListOf(1, 2, 3)', 'arrayOf(1, 2, 3)', 'setOf(1, 2, 3)'],
        correct: 1,
    },
    {
        question: 'Как вызвать suspend-функцию?',
        options: ['из любого места', 'через launch', 'только в main', 'через if'],
        correct: 1,
    },
    {
        question: 'Какой способ определения интерфейса корректный?',
        options: ['interface MyInterface {}', 'class interface MyInterface {}', 'MyInterface: interface {}', 'interface = MyInterface {}'],
        correct: 0,
    },
];

const STORAGE_KEY = 'kotlin_quiz_answers';
const SHUFFLED_KEY = 'kotlin_quiz_shuffle';
const CURRENT_KEY = 'kotlin_quiz_current';

function shuffle<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export default function QuizPage() {
    const history = useHistory();
    const [current, setCurrent] = useState(() => {
        const saved = localStorage.getItem(CURRENT_KEY);
        return saved ? parseInt(saved, 10) : 0;
    });
    const [transitioning, setTransitioning] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState(() => {
        const saved = localStorage.getItem(SHUFFLED_KEY);
        return saved ? JSON.parse(saved) : shuffle(rawQuestions);
    });
    const [answers, setAnswers] = useState<number[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : Array(rawQuestions.length).fill(-1);
    });
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        localStorage.setItem(SHUFFLED_KEY, JSON.stringify(shuffledQuestions));
    }, [shuffledQuestions]);

    const handleSelect = (index: number) => {
        const updated = [...answers];
        updated[current] = index;
        setAnswers(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const animateChange = (nextIndex: number) => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrent(nextIndex);
            setTransitioning(false);
        }, 200);
    };

    const handleSubmit = () => {
        const result = answers.reduce(
            (sum, ans, i) => sum + (ans === shuffledQuestions[i].correct ? 1 : 0),
            0
        );
        setScore(result);
        setSubmitted(true);
        if (result >= 7) {
            localStorage.setItem('quiz_passed', 'yes');
        }
    };

    useEffect(() => {
        if (submitted && score >= 7) {
            const timeout = setTimeout(() => {
                history.push('/HollowEngineDocumentation/docs/intro');
            }, 5000); // 5 секунд

            return () => clearTimeout(timeout);
        }
    }, [submitted, score, history]);

    useEffect(() => {
        localStorage.setItem(CURRENT_KEY, current.toString());
    }, [current]);

    const resetQuiz = () => {
        const blank = Array(rawQuestions.length).fill(-1);
        const newShuffle = shuffle(rawQuestions);
        setAnswers(blank);
        setShuffledQuestions(newShuffle);
        setCurrent(0);
        setSubmitted(false);
        setScore(0);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(blank));
        localStorage.setItem(SHUFFLED_KEY, JSON.stringify(newShuffle));
        localStorage.setItem(CURRENT_KEY, '0');
    };

    const q = shuffledQuestions[current];

    return (
        <Layout title="Kotlin Quiz">
            <main
                style={{
                    padding: '2rem',
                    maxWidth: 700,
                    margin: '0 auto',
                    fontFamily: 'system-ui, sans-serif',
                    color: 'var(--ifm-font-color-base)',
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Прежде чем приступить к моду, давай проверим твои знания Kotlin!
                </h1>

                {!submitted ? (
                    <>
                        {/* Прогресс */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div
                                style={{
                                    height: 10,
                                    background: 'var(--ifm-color-emphasis-100)',
                                    borderRadius: 5,
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        height: '100%',
                                        width: `${((current + 1) / shuffledQuestions.length) * 100}%`,
                                        background: 'var(--ifm-color-primary)',
                                        transition: 'width 0.4s ease',
                                    }}
                                />
                            </div>
                            <p style={{ textAlign: 'right', fontSize: '0.9rem' }}>
                                Вопрос {current + 1} из {shuffledQuestions.length}
                            </p>
                        </div>

                        {/* Вопрос */}
                        <div
                            style={{
                                opacity: transitioning ? 0 : 1,
                                transform: transitioning ? 'translateX(10px)' : 'none',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                                border: '1px solid var(--ifm-color-emphasis-200)',
                                borderRadius: 12,
                                padding: '1.5rem',
                                background: 'var(--ifm-background-color)',
                                boxShadow: 'var(--ifm-global-shadow-lw)',
                            }}
                        >
                            <strong style={{ fontSize: '1.1rem' }}>{q.question}</strong>
                            <div style={{ marginTop: '1rem' }}>
                                {q.options.map((opt, j) => (
                                    <label
                                        key={j}
                                        style={{
                                            display: 'block',
                                            marginBottom: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: 8,
                                            border:
                                                answers[current] === j
                                                    ? '2px solid var(--ifm-color-primary)'
                                                    : '1px solid var(--ifm-color-emphasis-300)',
                                            background:
                                                answers[current] === j
                                                    ? 'rgba(var(--ifm-color-primary-rgb), 0.1)'
                                                    : 'var(--ifm-background-surface-color)',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            fontWeight: 500,
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${current}`}
                                            value={j}
                                            checked={answers[current] === j}
                                            onChange={() => handleSelect(j)}
                                            style={{ marginRight: '0.6rem' }}
                                        />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Кнопки */}
                        <div
                            style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <button
                                onClick={() => animateChange(current - 1)}
                                disabled={current === 0}
                                className="button button--secondary"
                            >
                                Назад
                            </button>
                            {current < shuffledQuestions.length - 1 ? (
                                <button
                                    onClick={() => animateChange(current + 1)}
                                    disabled={answers[current] === -1}
                                    className="button button--primary"
                                    style={{ opacity: answers[current] === -1 ? 0.5 : 1 }}
                                >
                                    Далее
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={answers[current] === -1}
                                    className="button button--success"
                                    style={{ opacity: answers[current] === -1 ? 0.5 : 1 }}
                                >
                                    Завершить
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>
                            Результат: {score} / {shuffledQuestions.length}
                        </h2>
                        {score >= 7 ? (
                            <p>Отлично! Ты проходишь дальше... <br/> Страница обновится через 5 секунд.</p>
                        ) : (
                            <>
                                <p style={{ marginTop: '1rem' }}>
                                    Недостаточно правильных ответов :( <br/>
                                    Попробуй снова, через некоторое время.
                                </p>
                                <button
                                    onClick={resetQuiz}
                                    className="button button--danger"
                                    style={{ marginTop: '1rem' }}
                                >
                                    Попробовать ещё раз
                                </button>
                            </>
                        )}
                    </div>
                )}
            </main>
        </Layout>
    );
}
