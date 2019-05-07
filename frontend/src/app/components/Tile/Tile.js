import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { TileConsumer } from '../TileManager/TileManager';

class Tile extends Component {
  static propTypes = {
    header: PropTypes.string,
    summary: PropTypes.string,
    footer: PropTypes.string,
    icon: PropTypes.element,
    colors: PropTypes.object,
  };

  state = { preview: [], selected: false };

  componentDidMount() {}

  onTileOpen = () => {
    event.preventDefault();
    clicked;
  };

  onTileClose = () => {
    event.preventDefault();
    clicked;
  };

  render() {
    const colors = this.props.colors || {
      header: 'black',
      primary: 'lightgray',
      secondary: 'gray',
    };

    return (
      <TileConsumer>
        {context => (
          <Card
            className={classNames('m-4 p-0 col-3 shadow rounded-lg', {
              leftover:
                this.props.header !== context.selected && context.selected,
              clicked: this.props.header === context.selected,
            })}
            style={{ minWidth: '360px' }}
          >
            <Card.Header
              className="font-weight-bold noselect h5"
              style={{ color: colors.header }}
            >
              {this.props.icon}
              {this.props.header}
              <button
                type="button"
                className={classNames('close ', {
                  invisible: this.props.header !== context.selected,
                })}
                aria-label="Close"
                onClick={() => {
                  context.changeSelection(this.props.header);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Card.Header>
            <Card.Body
              className="noselect canselect  "
              onClick={() => {
                context.changeSelection(this.props.header);
              }}
            >
              <span>
                <h5 className="card-title">test</h5>
              </span>
              <h6 className="card-subtitle mb-2 text-muted noselect">
                {this.props.summary}
              </h6>
            </Card.Body>
            <Card.Footer
              className=" noselect text-right"
              style={{ color: colors.header }}
            >
              {this.props.footer ? (
                this.props.footer
              ) : (
                <i className="icon ion-md-arrow-round-forward mr-2" />
              )}
            </Card.Footer>
          </Card>
        )}
      </TileConsumer>
    );
  }
}

export default Tile;
