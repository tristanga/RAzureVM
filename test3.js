() => {
        const { themes: { defaultTheme } } = Spectacle;
        const theme = defaultTheme({
          primary: "#ff4081"
        });
        // Example source code for a source code slide.
        const exampleDeck = `
return (
  <Deck transition={['zoom','slide']} transitionDuration={800}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps>
        React Presentations
      </Heading>
      <Heading size={2} fit caps>
        Written In React
      </Heading>
    </Slide>
    <Slide bgColor="black">
      <Heading size={1} fit textColor="primary" textFont="secondary">
        Wait What?
      </Heading>
    </Slide>
    <Slide bgColor="primary" textColor="black" align="center top">
      <Heading size={1} textColor="black" textFont="primary">
        Thats right
      </Heading>
      <List>
        <ListItem>Inline style based theme system</ListItem>
        <ListItem>Autofit Text</ListItem>
        <ListItem>PDF Export</ListItem>
      </List>
    </Slide>
  </Deck>
)
        `.trim();
        // Interactive code.
        const { Component } = React;
        const { Heading } = Spectacle;
        class Interactive extends Component {
          constructor() {
            super();
            this.state = {
              count: 0
            };
            this.handleClick = this.handleClick.bind(this);
          }
          handleClick() {
            this.setState({
              count: this.state.count + 1
            });
          }
          render() {
            const styles = {
              padding: 20,
              background: "black",
              minWidth: 300,
              marginTop: 20,
              textTransform: "uppercase",
              border: "none",
              color: "white",
              outline: "none",
              fontWeight: "bold",
              fontSize: "2em"
            };
            return (
              <div>
              {this.state.count < 5 ?
                <div>
                  <Heading size={5} textColor="black">
                    The button has been clicked {this.state.count} times
                  </Heading>
                  <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
                </div> :
                  <Heading size={5} fit caps textColor="black">Easy there pal</Heading>
                }
              </div>
            );
          }
        }
        // --------------------------------------------------------------------
        // The presentation!
        // --------------------------------------------------------------------
        return (
          <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Spectacle
              </Heading>
              <Heading size={1} fit caps>
                A ReactJS Presentation Library
              </Heading>
              <Heading size={1} fit caps textColor="black">
                Where You Can Write Your Decks In JSX
              </Heading>
              <Link href="https://github.com/FormidableLabs/spectacle">
                <Text bold caps textColor="tertiary">View on Github</Text>
              </Link>
              <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
            </Slide>
            <Slide id="wait-what" transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
              <Image src={"https://github.com/FormidableLabs/spectacle/raw/master/example/assets/kat.png"} margin="0px auto 40px" height="293px"/>
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Wait what?
              </Heading>
            </Slide>
          </Deck>
        );
      }
