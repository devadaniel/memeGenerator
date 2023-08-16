import {Component} from 'react'
import {
  MemeGeneratorContainer,
  MemeRenderContainer,
  MemeGeneratorHeading,
  MemeGeneratorForm,
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomOption,
  CustomButton,
  TextContent,
  MemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" bgImage={backgroundImageUrl}>
        <TextContent fontSize={activeFontSizeId}>{topText}</TextContent>
        <TextContent fontSize={activeFontSizeId}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  renderMemeGenerator = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onSubmitForm}>
        <CustomLabel htmlFor="url">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="ulr"
          placeholder="Enter the image URL"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
        />

        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
        />

        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
        />

        <CustomLabel htmlFor="selectFont">Font Size</CustomLabel>
        <CustomSelect
          id="selectFont"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>

        <CustomButton type="submit">Generate</CustomButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    return (
      <MemeGeneratorContainer>
        <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
        <MemeRenderContainer>
          {this.renderMeme()}
          {this.renderMemeGenerator()}
        </MemeRenderContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
