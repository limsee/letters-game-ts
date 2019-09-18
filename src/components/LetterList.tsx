import * as React from "react";
import "../App.css";
import dictionaryData from "../data/dictionary.json";
import cardData from "../data/test-board-1.json";
import Letter from "./Letter";
import Validate from "./Validate";

interface Props {}

interface LetterData {
  id: number;
  text: string;
  check: string[];
}

interface State {
  dictionary: string[];
  letters: string[];
  selectedLetters: LetterData[];
}

export default class LetterList extends React.Component<Props, State> {
  public state: State = {
    dictionary: dictionaryData.words,
    letters: cardData.board,
    selectedLetters: []
  };

  public onSelected = (data: LetterData, selected: boolean): void => {
    const { selectedLetters } = this.state;

    selected
      ? this.setState({
          selectedLetters: selectedLetters.concat(data)
        })
      : this.setState({
          selectedLetters: selectedLetters.filter(
            letter => letter.id !== data.id
          )
        });
  };

  public render() {
    const { letters, selectedLetters, dictionary } = this.state;

    const pw: string = selectedLetters.map(letter => letter.text).join("");

    const check: string[] = dictionary.filter(data => {
      return data === pw.toLowerCase();
    });

    const list = letters.map((letter, index) => (
      <Letter
        key={index}
        id={index}
        text={letter}
        check={check}
        onSelected={this.onSelected}
      />
    ));

    return (
      <div className="container">
        <div className="letters">{list}</div>
        <div className="validate_div">
          <Validate text={pw} check={check} />
        </div>
      </div>
    );
  }
}
