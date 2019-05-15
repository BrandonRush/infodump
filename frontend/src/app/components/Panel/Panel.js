import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { PanelConsumer } from '../PanelManager/PanelManager';
import PanelContainer from '../PanelContainer/PanelContainer';
import PanelContentItem from '../PanelContentItem/PanelContentItem';

class Panel extends Component {
  static propTypes = {
    colors: PropTypes.object,
    data: PropTypes.object,
    description: PropTypes.string,
    footer: PropTypes.string,
    header: PropTypes.string,
    icon: PropTypes.element,
    new: PropTypes.bool,
    preview: PropTypes.arrayOf(PropTypes.object),
  };

  state = { selected: false, mouseOver: false, mouseDown: false };

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

  render() {
    const colors = this.props.colors || {
      key: 'black',
      primary: 'lightgray',
      secondary: 'gray',
    };

    const previewArr = this.props.preview;
    let previewList = !this.props.preview ? (
      <div className="align-items-center">
        <Spinner
          animation="border"
          role="status"
          style={{ color: colors.header }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : (
      previewArr.map(item => {
        return <PanelContentItem data={item} key={item.name} />;
      })
    );

    const dataArr = this.props.data;
    let dataList = dataArr.map(item => {
      return <PanelContentItem data={item} key={item.name} />;
    });

    // let waitingState = context.selected;
    // let clickedState = this.props.title === context.selected;
    // let notSelectedState = this.props.title !== context.selected && context.selected;

    return (
      <PanelConsumer>
        {context => (
          <div
            className={classNames('panel m-4 p-0 col-3 canselect', {
              'panel-waiting': context.selected === '',
              'panel-leftover ':
                this.props.title !== context.selected && context.selected,
              'panel-clicked': this.props.title === context.selected,
            })}
            onClick={() => {
              this.props.title !== context.selected &&
                context.changeSelection(this.props.title);
            }}
          >
            <div
              className="panel-header font-weight-bold nohighlight h5"
              style={{
                color: colors.header,
                border: 'none',
                background: 'white',
              }}
            >
              {this.props.icon}
              {this.props.title}
              <button
                type="button"
                className={classNames('close ', {
                  invisible: this.props.title !== context.selected,
                })}
                aria-label="Close"
                style={{ color: 'black' }}
                onClick={() => {
                  context.changeSelection(this.props.title);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="panel-body nohighlight"
              // onMouseDown={() => {
              //   this.setState({ mouseDown: true });
              // }}
              // onMouseUp={() => {
              //   this.setState({ mouseDown: false });
              // }}
              // onMouseEnter={() => {
              //   this.setState({ mouseOver: true }, () => {
              //     console.log(
              //       `Mouse entered ${this.props.title}: ${this.state.mouseOver}`
              //     );
              //   });
              // }}
              // onMouseLeave={() => {
              //   this.setState({ mouseOver: false }, () => {
              //     console.log(
              //       `Mouse left ${this.props.title}: ${!this.state.mouseOver}`
              //     );
              //   });
              // }}
            >
              <PanelContainer>{previewList}</PanelContainer>
              {this.props.title === context.selected ? (
                <PanelContainer>{dataList}</PanelContainer>
              ) : null}
            </div>
            <div
              className=" nohighlight text-right panel-footer"
              style={{
                color: colors.header,
                border: 'none',
                background: 'white',
              }}
            >
              {/* {this.props.footer ? (
                this.props.footer
              ) : (
                <i className="icon ion-md-arrow-round-forward mr-2" />
              )} */}
            </div>
          </div>
        )}
      </PanelConsumer>
    );
  }
}

export default Panel;
