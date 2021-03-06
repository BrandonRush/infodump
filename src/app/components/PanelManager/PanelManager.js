import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Fuse from 'fuse.js';

import Panel from '../Panel/Panel';
import SearchBar from '../SearchBar/SearchBar';

const PanelContext = React.createContext();

const SortableItem = sortableElement(({ children }) => (
  <div className="panel-container">{children}</div>
));

const SortableContainer = sortableContainer(({ children }) => {
  return (
    <div className="row justify-content-center" style={{ maxWidth: '1450px' }}>
      {children}
    </div>
  );
});

class PanelManager extends Component {
  _searchOptions = { keys: ['title', 'summary', 'data.name', 'preview.name'] };

  state = {
    panels: this.props.panels,
    copied: true,
    selected: '',
    searchQuery: '',
    changeSelection: newTitle => this.changeSelection(newTitle),
  };

  changeSelection = newTitle => {
    if (this.state.selected === newTitle) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: newTitle });
    }
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ panels }) => ({
      panels: arrayMove(panels, oldIndex, newIndex),
    }));
  };

  handleSearch = e => {
    this.setState({ searchQuery: e.target.value });

    if (!!e.target.value) {
      let searchList = new Fuse(this.props.panels, this._searchOptions);
      let results = searchList.search(e.target.value);

      this.setState({ panels: results });
    } else {
      this.setState({ panels: this.props.panels });
    }
  };

  handleClear = () => {
    this.setState({ searchQuery: '', panels: this.props.panels });
  };

  render() {
    let selectedPanel = this.state.selected
      ? this.state.panels.find(panel => this.state.selected === panel.title)
      : null;

    return (
      <PanelContext.Provider value={this.state}>
        <main
          className="container container-fluid"
          style={{ maxWidth: '1450px' }}
        >
          {!this.state.selected && (
            <SearchBar
              value={this.state.searchQuery}
              onChange={this.handleSearch}
              clearSearch={this.handleClear}
            />
          )}
          <SortableContainer
            axis="xy"
            onSortEnd={this.onSortEnd}
            // distance={25}
            pressDelay={200}
            lockToContainerEdges
          >
            {!this.state.selected ? (
              this.state.panels.map((panel, index) => {
                return (
                  <SortableItem key={panel.title} index={index}>
                    <CSSTransition
                      appear
                      in={this.state.selected === ''}
                      classNames="panel-fade"
                      timeout={2000}
                      helperClass="panel-dragging"
                      key={panel.title}
                    >
                      <Panel key={panel.title} data={panel} />
                    </CSSTransition>
                  </SortableItem>
                );
              })
            ) : (
              <CSSTransition
                appear
                in={this.state.selected !== ''}
                classNames="selected-fade"
                timeout={4000}
                key={selectedPanel.title + ':selected'}
              >
                <Panel key={selectedPanel.title} data={selectedPanel} />
              </CSSTransition>
            )}
          </SortableContainer>
        </main>
      </PanelContext.Provider>
    );
  }
}

export const PanelConsumer = PanelContext.Consumer;
export default PanelManager;
