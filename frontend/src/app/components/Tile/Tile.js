import React, { Component } from 'react';
import { TileConsumer } from '../TileManager/TileManager';

class Tile extends Component {
  static propTypes = {
    header: PropTypes.string,
    summary: PropTypes.string,
    footer: PropTypes.string,
    icon: PropTypes.element,
    color: PropTypes.string,
  };

  state = { preview: [], selected: false };

  componentDidMount() {}

  onTileClick = () => {
    event.preventDefault();

    this.setState({ selected: true });
    console.log('registered click!');
  };

  render() {
    return (
      <TileConsumer>
        {context => (
          <div
            className="card m-4 p-0  col-3 shadow canselect rounded-lg"
            style={{ minWidth: '360px' }}
            onClick={() => context.updateTitle(this.props.header)}
          >
            <div className="card-header font-weight-bold noselect h5 ">
              {this.props.icon}
              {this.props.header}
            </div>
            <div className="card-body noselect">
              <span>
                <h5 className="card-title">test</h5>
              </span>
              <h6 className="card-subtitle mb-2 text-muted noselect">
                {this.props.summary}
              </h6>
            </div>
            <div className="card-footer noselect text-right">
              {this.props.footer ? (
                this.props.footer
              ) : (
                <i className="icon ion-md-arrow-round-forward mr-2" />
              )}
            </div>
          </div>
        )}
      </TileConsumer>
    );
  }
}

export default Tile;
