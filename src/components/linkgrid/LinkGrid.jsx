import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


class LinkGrid extends Component {
  state = {};

  // ####################################################
  // RENDER
  // ####################################################

  renderLinks = () => {
    if (this.state.settings) {
      return (
        <>
          {this.state.settings.links.map((l, i) => (
            <a href={l.url} className="shell-linkgrid__link" key={i}>
              <div className="shell-linkgrid__title">
                <span>{l.title}</span> <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="shell-linkgrid__description">{l.description}</div>
            </a>
          ))}
        </>
      );
    }
  }

  render() {
    return (
      <div className="shell-linkgrid">
        { this.renderLinks() }
      </div>
    );
  }s

  // ####################################################
  // LIFECYCLE
  // ####################################################

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.settings) {
      const currentSettings = JSON.stringify(this.state.settings);
      const newSettings = JSON.stringify(nextProps.settings);

      if (currentSettings !== newSettings) {
        this.setState(
          {
            settings: nextProps.settings
          }
        );
      }
    }
  }

  componentDidMount() {
    if (this.props.settings) {
      this.setState(
        {
          settings: this.props.settings,
        }
      );
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default LinkGrid;
