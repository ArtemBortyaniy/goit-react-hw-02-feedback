import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <ul className={css.list}>        
                {options.map(option => {
                    return (
                        <li key={option} className={css.item}>
                        <button 
                            type="button" 
                            onClick={() => onLeaveFeedback(option)} 
                            className={css.optionBtn}
                        >
                            {option}
                        </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };