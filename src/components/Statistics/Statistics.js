import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}

      <ul className={s['stat-list']}>
        {stats.map(item => {
          return (
            <li
              className={s.item}
              style={{
                backgroundColor: `${getRandomHexColor()}80`,
                width: `calc((100% - 20px * ${stats.length}) / ${stats.length})`,
              }}
              key={item.id}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
