// Style your components here

import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
`
export const MemeRenderContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const MemeGeneratorHeading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin-right: 750px;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    height: 50vh;
    width: 90vh;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 100px;
    order: 1;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: ${props => props.fontSize}px;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    order: 0;
    margin-top: 10px;
  }
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 30px;
  width: 300px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 5px;
  outline: none;
`

export const CustomLabel = styled.label`
  display: flex;
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 5px;
`

export const CustomSelect = styled.select`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 30px;
  width: 300px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 5px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 13px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  border: none;
  border-radius: 5px;
  height: 30px;
  text-align: center
  padding: 8px;
  font-size: 10px;
  cursor: pointer;
  outline: none;
`
