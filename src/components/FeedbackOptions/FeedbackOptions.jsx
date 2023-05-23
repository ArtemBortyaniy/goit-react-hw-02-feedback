// import { css } from './FeedbackOptions.module.scss'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    // console.log(options);
    return (
        <div>
            <ul>
                {options.map(option => {
                    return (
                        <button 
                            type="button" 
                            onClick={() => onLeaveFeedback(option)} 
                            key={option}
                        >
                            {option}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
}