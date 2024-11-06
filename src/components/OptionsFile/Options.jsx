
import styles from './Options.module.css';
const Options = ({ updateFeedback, resetFeedback, totolFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}> Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      
      {totolFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
