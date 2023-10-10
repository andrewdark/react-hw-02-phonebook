import css from './ContactFilter.module.css';
const ContactFilter = props => {
  return (
    <div className={css.form}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        id="filter"
        className={css.inp}
        type="text"
        name="filter"
        onChange={event=>{props.handleFiltering(event.target.value)}}
        required
      />
    </div>
  );
};

export default ContactFilter;
