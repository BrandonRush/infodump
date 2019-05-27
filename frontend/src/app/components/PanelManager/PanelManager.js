import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

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
  state = {
    panels: this.props.panels,
    copied: true,
    selected: '',
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
          {!this.state.selected && <SearchBar />}
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
