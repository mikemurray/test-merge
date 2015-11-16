// const React = React;
const TextField = ReactionUI.Components.TextField;
const Button = ReactionUI.Components.Button;
// const Sortable = ReactionUI.Lib.Sortable;
const classnames = ReactionUI.Lib.classnames;

class Tags extends React.Component {
  displayName = "Tag List (Tags)"

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
            <Button icon="bars" />
            <TextField value={tag.name} />
            <Button icon="bookmark" />
            <Button icon="times-circle" />
          </div>
        );
      });

      // Add a blank tag for creating new tags
      tags.push(
        <div className="rui tag edit create" key="create">
          <TextField i18nPlaceholder="addTag" />
          <Button icon="plus" />
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
  editable: React.PropTypes.bool,
  tags: React.PropTypes.arrayOf(ReactionCore.Schemas.Tag)
};

// Export
ReactionUI.Components.Tags = Tags;
