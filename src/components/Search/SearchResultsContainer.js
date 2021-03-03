import {connect} from 'react-redux';
import {getFilteredCards} from '../../redux/cardsRedux';
import SearchResults from '../Search/SearchResults';
import {
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  cards: getFilteredCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);