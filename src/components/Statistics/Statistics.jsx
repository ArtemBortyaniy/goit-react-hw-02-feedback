import PropTypes from 'prop-types'; 

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <ul>
                <li><p>Good : { good }</p></li>
                <li><p>Neutral : { neutral }</p></li>
                <li><p>Bad : { bad }</p></li>
                <li><p>Total : {total}</p></li>
                <li><p>PositivePercentage : { positivePercentage }</p></li>
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