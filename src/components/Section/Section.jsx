import css from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title }) => {
    return (
        <section className={css.section}>
        { title && <h2>{title}</h2> }
        </section>
    )
}

Section.propTypes = {
    title : PropTypes.string.isRequired,
}

