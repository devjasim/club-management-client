import styled, {createGlobalStyle} from 'styled-components';

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #fff;
    font-family: Arial, 'Sans-serif';
  }
`;

export const PageWrapper = styled.div`
  background-color: #fff;
  max-width: 1460px;
  margin: 0 auto;
`
  
// Input
export const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  height: 40px;
  padding: 0 1rem;
  border-radius: 5px;
  &:foucs{
    outline: none;
    box-shadow: none;
  }
`

// Form Group
export const FormGroup = styled.div`
  margin-bottom: 1rem;
`

export const AppBar = styled.div`
  padding: 1.5rem 1rem;
  box-shadow: 0 1px 6px 2px rgba(0,0,0, .123);
  text-align: center;
  border-radius: 5px;
  margin: 2rem 1rem;
  background-color:#286bb1;
  color: #fff;
`

export const HeadingOne = styled.div`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
`

export const Paper = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 6px 1px rgba(0, 0, 0, .232);
  padding: 1.4rem 1.5rem;
  max-width: 100%;
`
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width:1160px) {
    .item{
      flex: 1 !important;
    }
  }
  

  @media screen and (max-width:768px) {
    .item{
      flex: initial !important;
    }
    flex-direction: column-reverse;
  }

`

export const ButtonPrimary = styled.button`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  background-color: #286bb1;
  cursor: pointer;
  color: #fff;
  &:focus{
    outline: none;
  }
`

export const ButtonCustom = styled.button`
  border: none;
  border-radius: 5px;
  padding: .5rem;
  font-size: .775rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  background-color: #286bb1;
  cursor: pointer;
  color: #fff;
  &:focus{
    outline: none;
  }
`

export const HeadingTwo = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 1.2rem;
  color: #444;
`

export const FormLabel = styled.label`
  fontSize: .875rem;
  font-weight: 500;
  margin-bottom: .4rem;
  display: inline-block;
`

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media screen and(max-width: 1160px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`

export const Card = styled.div`
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0, .123);
`

export const Avatar = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  strong{
    font-size: 1rem;
    font-weight: 600;
    display: block;
    margin-right: .2rem;
  }

  span{
    font-size: 1rem;
    font-weight: 400;
  }
`