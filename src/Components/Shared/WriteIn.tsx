import React from "react";

export default class WriteIn extends React.Component<
  { text: string; speedInMilliseconds: number },
  {
    renderText: string;
    unrenderedText: string[];
  }
> {
  private mounted: boolean = false;
  private textChanged: boolean = false;
  static defaultProps = {
    speedInMilliseconds: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      ...this.originalState(),
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.updateRenderText();
  }
  componentWillMount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.textChanged = true;
      this.setState({ ...this.originalState() }, () => {
        this.textChanged = false;
        this.updateRenderText();
      });
    }
  }

  private originalState() {
    return {
      renderText: "",
      unrenderedText: this.props.text.split(""),
    };
  }

  updateRenderText() {
    const { renderText, unrenderedText } = this.state;
    const toRender = unrenderedText.shift();
    if (!this.mounted || this.textChanged || !toRender) {
      return;
    }

    this.setState(
      {
        renderText: `${renderText}${toRender}`,
        unrenderedText,
      },
      () => {
        if (unrenderedText.length) {
          setTimeout(() => {
            this.updateRenderText();
          }, this.props.speedInMilliseconds);
        }
      }
    );
  }

  render() {
    return <>{this.state.renderText}</>;
  }
}
