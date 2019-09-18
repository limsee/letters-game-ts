import * as React from "react";

interface Props {
  id: number;
  text: string;
  check: string[];
  onSelected(data: Props, selected: boolean): void;
}
interface State {
  selected: boolean;
}

export default class Latter extends React.Component<Props, State> {
  public static defaultProps = {
    id: 0,
    text: ""
  };

  public state: State = {
    selected: false
  };

  public Click = (): void => {
    const { onSelected } = this.props;
    const { selected } = this.state;
    this.setState({
      selected: !selected
    });
    onSelected(this.props, !selected);
  };

  public render() {
    const { text, check } = this.props;
    const { selected } = this.state;

    return (
      <button
        className={
          check.length && selected
            ? "validColor col-md-3"
            : selected
            ? "selectedColor col-md-3"
            : "defaultColor col-md-3"
        }
        onClick={this.Click}
      >
        {text}
      </button>
    );
  }
}
