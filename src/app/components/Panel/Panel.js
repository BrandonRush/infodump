import React, { Component } from 'react';

import { Spinner } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { PanelConsumer } from '../PanelManager/PanelManager';
import PanelItem from '../PanelItem/PanelItem';
import PanelListing from '../PanelListing/PanelListing';
import PanelFetch from '../PanelFetch/PanelFetch';

class Panel extends Component {
  static propTypes = {
    // colors: PropTypes.object,
    data: PropTypes.object,
  };

  state = {
    selected: false,
  };

  componentDidMount() {}

  render() {
    const colors = this.props.data.colors || {
      key: 'black',
      primary: 'lightgray',
      secondary: 'gray',
    };

    const previewArr = this.props.data.preview;
    let previewList = previewArr.map(item => {
      if (!item.variant) {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelItem data={data} />}
          />
        );
      } else if (item.variant === 'fetch') {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelFetch data={data} />}
          />
        );
      } else if (item.variant === 'auto') {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelFetch auto data={data} />}
          />
        );
      }
    });

    const dataArr = this.props.data.data;
    let dataList = dataArr.map(item => {
      if (!item.variant) {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelItem data={data} />}
          />
        );
      } else if (item.variant === 'fetch') {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelFetch data={data} />}
          />
        );
      } else if (item.variant === 'auto') {
        return (
          <PanelListing
            key={item.name}
            data={item}
            render={data => <PanelFetch auto data={data} />}
          />
        );
      }
    });

    return (
      <PanelConsumer>
        {context => (
          <section
            className={classNames('panel canselect', {
              'panel-waiting': context.selected === '',
              'panel-clicked': this.props.data.title === context.selected,
            })}
            onClick={() => {
              this.props.data.title !== context.selected &&
                context.changeSelection(this.props.data.title);
            }}
          >
            <h5
              className="panel-header font-weight-bold nohighlight h5"
              title={this.props.data.summary}
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
                <i className="icon mr-2 ion-md-close" />
              </button>
            </h5>
            <div className="panel-body nohighlight">
              {previewList}
              {this.props.data.title === context.selected ? dataList : null}
            </div>
          </section>
        )}
      </PanelConsumer>
    );
  }
}
export default Panel;
