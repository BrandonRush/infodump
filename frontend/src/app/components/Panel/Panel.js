import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { PanelConsumer } from '../PanelManager/PanelManager';

class Panel extends Component {
  static propTypes = {
    header: PropTypes.string,
    summary: PropTypes.string,
    footer: PropTypes.string,
    icon: PropTypes.element,
    colors: PropTypes.object,
  };

  state = { preview: [], selected: false, mouseOver: false };

  componentDidMount() {}

  onPanelOpen = () => {
    event.preventDefault();
    clicked;
  };

  onPanelClose = () => {
    event.preventDefault();
    clicked;
  };

  onMouseEnterHandler = event => {
    update(event);
  };

  onMouseLeaveHandler = () => {
    inner.style = '';
  };

  onMouseMoveHandler = event => {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,

    updatePosition: event => {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },

    setOrigin: e => {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },

    show: () => {
      return '(' + this.x + ', ' + this.y + ')';
    },
  };

  update = event => {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  updateTransformStyle = (x, y) => {
    var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    inner.style.transform = style;
  };

  render() {
    const colors = this.props.colors || {
      header: 'black',
      primary: 'lightgray',
      secondary: 'gray',
    };

    return (
      <PanelConsumer>
        {context => (
          <Card
            className={classNames('m-4 p-0 col-3 rounded-lg panel', {
              'panel-leftover shadow ':
                this.props.header !== context.selected && context.selected,
              'panel-clicked': this.props.header === context.selected,
            })}
            style={{ minWidth: '360px' }}
          >
            <Card.Header
              className="font-weight-bold nohighlight h5"
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
              className="nohighlight canselect"
              onClick={() => {
                context.changeSelection(this.props.header);
              }}
              onMouseEnter={() => {
                this.setState({ mouseOver: true }, () => {
                  console.log(
                    `Mouse entered ${this.props.header}: ${
                      this.state.mouseOver
                    }`
                  );
                });
              }}
              onMouseLeave={() => {
                this.setState({ mouseOver: false }, () => {
                  console.log(
                    `Mouse left ${this.props.header}: ${!this.state.mouseOver}`
                  );
                });
              }}
            >
              <span>
                <h5 className="card-title">test</h5>
              </span>
              <h6 className="card-subtitle mb-2 text-muted nohighlight">
                {this.props.summary}
              </h6>
            </Card.Body>
            <Card.Footer
              className=" nohighlight text-right"
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
      </PanelConsumer>
    );
  }
}

export default Panel;
