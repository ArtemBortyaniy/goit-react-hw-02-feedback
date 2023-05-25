import css from './FeedbackOptions.module.css'

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
                            // key={option}
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