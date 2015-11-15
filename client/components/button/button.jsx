const classnames = ReactionUI.Lib.classnames;

class Button extends React.Component {

  props: {
    toggle: false,
    active: false
  }

  renderOnStateIcon() {
    if (this.props.onIcon) {
      const iconClassName = `fa fa-${this.props.onIcon}`;
      return <i className={iconClassName}></i>;
    }
  }

  renderNormalStateIcon() {
    if (this.props.icon) {
      const iconClassName = `fa fa-${this.props.icon}`;
      return <i className={iconClassName}></i>;
    }
  }

  renderIcon() {
    if (this.props.toggle) {
      if (this.props.toggleOn) {
        return this.renderOnStateIcon();
      }
    }

    return this.renderNormalStateIcon();
  }

  render() {
    const classes = classnames({
      "btn": true,
      "btn-default": true,
      "active": this.props.active
    });

    return (
      <button type="button" className={classes} {...this.props}>
        {this.renderIcon()}
        {this.props.children}
      </button>
    );
  }
}

ReactionUI.Components.Button = Button;
