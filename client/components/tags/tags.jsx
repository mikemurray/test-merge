
class Tags extends React.Component {

  renderTags() {
    if (_.isArray(this.props.tags)) {
      return this.props.tags.map((tag, index) => {
        return (
          <span key={index}>{tag.name}</span>
        );
      });
    }
  }

  renderEditableTags() {
    if (_.isArray(this.props.tags)) {
      return this.props.tags.map((tag, index) => {
        return (
          <TextField value={tag.name} key={index}></TextField>
        );
      });
    }
  }

  render() {
    return (
      <div className="tag-list">
        {this.renderTags()}
      </div>
    );
  }
}

// Prop Types
Tags.propTypes = {
  tags: React.PropTypes.array
};

// Export
ReactionUI.Components.Tags = Tags;
