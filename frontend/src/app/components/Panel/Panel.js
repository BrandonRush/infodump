import React, { Component } from 'react';

import { Spinner } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { PanelConsumer } from '../PanelManager/PanelManager';
import PanelContainer from '../PanelContainer/PanelContainer';
import PanelItem from '../PanelItem/PanelItem';

class Panel extends Component {
  static propTypes = {
    // colors: PropTypes.object,
    data: PropTypes.object,
    // description: PropTypes.string,
    // footer: PropTypes.string,
    // header: PropTypes.string,
    // icon: PropTypes.element,
    // new: PropTypes.bool,
    // preview: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    selected: false,
    //  mouseOver: false,
    //   mouseDown: false
  };

  componentDidMount() {}

  render() {
    const colors = this.props.data.colors || {
      key: 'black',
      primary: 'lightgray',
      secondary: 'gray',
    };

    const previewArr = this.props.data.preview;
    let previewList = !this.props.data.preview ? (
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
        return <PanelItem data={item} key={item.name} />;
      })
    );

    const dataArr = this.props.data.data;
    let dataList = dataArr.map(item => {
      return <PanelItem data={item} key={item.name} />;
    });

    return (
      <PanelConsumer>
        {context => (
          <div
            className={classNames('panel m-4 p-0 col-3 canselect', {
              'panel-waiting': context.selected === '',
              'panel-leftover ':
                this.props.data.title !== context.selected && context.selected,
              'panel-clicked': this.props.data.title === context.selected,
            })}
            onClick={() => {
              this.props.data.title !== context.selected &&
                context.changeSelection(this.props.data.title);
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
              {this.props.data.icon}
              {this.props.data.title}
              <button
                type="button"
                className={classNames('close ', {
                  invisible: this.props.data.title !== context.selected,
                })}
                aria-label="Close"
                style={{ color: 'black' }}
                onClick={() => {
                  context.changeSelection(this.props.data.title);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="panel-body nohighlight">
              <PanelContainer>{previewList}</PanelContainer>
              {this.props.data.title === context.selected ? (
                <PanelContainer>{dataList}</PanelContainer>
              ) : null}
            </div>
          </div>
        )}
      </PanelConsumer>
    );
  }
}
export default Panel;
