import { useEffect, useState } from 'react';
import './App.css';

import Description from './components/DescriptionFile/Description.jsx';
import Options from './components/OptionsFile/Options.jsx';
import Feedback from './components/FeedbackFile/Feedback.jsx';
import Notification from './components/NotificationFile/Notification.jsx';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <div>
        <Description />

        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />

        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </>
  );
}

export default App;
