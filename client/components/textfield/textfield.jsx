// TODO: Place holder imports
// import React from "react"

class TextField extends React.Component {
  state = {
    value: ""
  }

  /**
   * onValueChange
   * @summary set the state when the value of the input is changed
   * @param  {Event} event Event object
   * @return {void}
   */
  onValueChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  /**
   * componentWillReceiveProps - Component Lifecycle
   * @param  {Object} props Properties passed from the parent component
   * @return {Void} no return value
   */
  componentWillReceiveProps(props) {
    if (props) {
      this.setState({
        value: props.value
      });
    }
  }

  /**
   * Render a multiline input (textarea)
   * @return {JSX} jsx
   */
  renderMultilineInput() {
    return (
      <textarea
        className="{this.props.name}-edit-input"
        placeholder={this.props.i18nPlaceholder}
        value={this.state.value}
        onChange={this.onValueChange}
        {...this.props}>

      </textarea>
    );
  }

  /**
   * Render a singleline input
   * @return {JSX} jsx
   */
  renderSingleLineInput() {
    return (
      <input
        type="text"
        className="{this.props.name}-edit-input"
        {...this.props}
        value={this.state.value}
        onChange={this.onValueChange}
        placeholder={this.props.i18nPlaceholder}

        />
    );
  }

  /**
   * Render either a multiline (textarea) or singleline (input)
   * @return {JSX} jsx template
   */
  renderField() {
    if (this.props.multiline === true) {
      return this.renderMultilineInput();
    }

    return this.renderSingleLineInput();
  }

  /**
   * Render Component
   * @return {JSX} component
   */
  render() {
    return (
      <div className="product-detail-edit {this.props.name}-edit">
        {this.renderField()}
        <span className="product-detail-message" id="{{field}}-message"></span>
      </div>
    );
  }
}

// Export
ReactionUI.Components.TextField = TextField;
