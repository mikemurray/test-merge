const TextField = ReactionUI.Components.TextField;
const Button = ReactionUI.Components.Button;
const classnames = ReactionUI.Lib.classnames;

class Tags extends React.Component {

  renderTags() {
    if (_.isArray(this.props.tags)) {
      // Render edit fields
      if (this.props.editable) {
        return this.renderEditableTags();
      }

      // Otherwise, render tags for guest users
      return this.props.tags.map((tag, index) => {
        return (
          <span className="rui tag" key={index}>{tag.name}</span>
        );
      });
    }
  }

  renderEditableTags() {
    if (_.isArray(this.props.tags)) {
      const tags = this.props.tags.map((tag, index) => {
        return (
          <div className="rui tag edit" key={index}>
            <TextField value={tag.name}></TextField>
            <Button icon="times-circle"></Button>
          </div>
        );
      });

      // Add a blank tag for creating new tags
      tags.push(
        <div className="rui tag edit create" key="create">
          <TextField i18nPlaceholder="addTag"></TextField>
          <Button icon="plus"></Button>
        </div>
      );

      return tags;
    }
  }

  render() {
    const classes = classnames({
      rui: true,
      tags: true,
      edit: this.props.editable
    });

    return (
      <div className={classes}>
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
