import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchData);
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchData: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}