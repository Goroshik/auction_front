import React from 'react';
import { connect } from 'react-redux';

import { productsActions, historyAction, errorAction } from '../../actions';
import { ErrorComponent, Header, InputComponent } from '../../components';
import { HistoryTable } from './components';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.productID = this.props.match.params.productID;
    this.state = {
      lastPrice: 0
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const history = {
      productID: this.productID,
      price: this.state.lastPrice
    };

    this.props.addRate(history);
  }

  handleChange = target => {
    const { value } = target;
    this.setState({ lastPrice: value });
  }

  componentDidMount() {
    this.props.resetError();
    this.props.getHistory({ productID: this.productID });
    this.props.getProduct(this.productID);
  }

  render() {
    const { product, history } = this.props;
    const { submitted } = this.state;

    const lastPrice = (history[0] && !this.state.lastPrice) ? history[0].price : this.state.lastPrice;
    const historyLastPrice = history[0] ? history[0].price : 0;

    return (
      <div>
        <Header />
        <h2>Product {product.productNumber}</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <InputComponent
              name="Description"
              type="text"
              value={product.description}
              disabled={true}
            />
            <InputComponent
              name="Last Price"
              type="text"
              value={historyLastPrice}
              disabled={true}
            />
            <InputComponent
              name="Start price"
              type="text"
              value={product.startPrice}
              disabled={true}
            />
            <InputComponent
              name="Your rate"
              type="number"
              value={Number(lastPrice)}
              onChange={this.handleChange}
              submitted={submitted}
              min={historyLastPrice + 1}
            />
          </div>
          <button type="submit">Set offer</button>
        </form>
        {history.length && <HistoryTable history={history} />}
        {this.props.error.message && <ErrorComponent error={this.props.error} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product, history, error = {} } = state;
  return {
    product,
    history: history.items,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: productID => dispatch(productsActions.getByID(productID)),
    updateProduct: product => dispatch(productsActions.save(product)),
    getHistory: productID => dispatch(historyAction.getAll(productID)),
    addRate: history => dispatch(historyAction.add(history)),
    resetError: () => dispatch(errorAction.reset())
  };
}

const connectedProductPage = connect(mapStateToProps, mapDispatchToProps)(ProductPage);
export { connectedProductPage as ProductPage };
