import PropTypes from 'prop-types'; 
import css from './Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <ul className={css.list}>
                <li className={css.item}><p>Good : { good }</p></li>
                <li className={css.item}><p>Neutral : { neutral }</p></li>
                <li className={css.item}><p>Bad : { bad }</p></li>
                <li className={css.item}><p>Total : {total}</p></li>
                <li className={css.item}><p>PositivePercentage : { positivePercentage }</p></li>
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    positivePercentage : PropTypes.string.isRequired,

}