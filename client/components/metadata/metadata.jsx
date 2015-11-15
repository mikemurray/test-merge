// TODO: Placeholder imports
// import React from "react"
// import TextField from "reaction-ui/textfield"
// TODO: For now lets pretend we have to do imports
const TextField = ReactionUI.Components.TextField;
const Button = ReactionUI.Components.Button;

Metadata = class Metadata extends React.Component {

  /**
   * Handle form submit
   * @param  {Event} event Event object
   * @return {void} no return value
   */
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleRemove = (event) => {
    console.log("Remove!!");
  }

  /**
   * Render user readable metadata
   * @return {JSX} metadata
   */
  renderMetadata() {
    return this.props.metafields.map((metadata, index) => {
      return (
        <div className="meta-item" key={index}>
          <div className="meta-key">{metadata.key}</div>
          <div className="meta-key">{metadata.value}</div>
        </div>
      );
    });
  }

  /**
   * Render a metadata form
   * @return {JSX} metadata forms for each row of metadata
   */
  renderMetadataForm() {
    return this.props.metafields.map((metadata, index) => {
      return (
        <div className="meta-item" key={index}>
          <form onSubmit={this.handleSubmit}>
            <TextField name="key" value={metadata.key}></TextField>
            <TextField name="value" value={metadata.value}></TextField>
            <Button type="button" icon="times-circle" onClick={this.handleRemove}></Button>
          </form>
        </div>
      );
    });
  }

  /**
   * render
   * @return {JSX} component
   */
  render() {
    // Admin editable metadata
    if (this.props.editable) {
      return (
        <div className="metadata edit">
          {this.renderMetadataForm()}
        </div>
      );
    }

    // User readable metadata
    return (
      <div className="metadata">
        {this.renderMetadata()}
      </div>
    );
  }
};

// Prop Types
Metadata.propTypes = {
  metafields: React.PropTypes.array
};
