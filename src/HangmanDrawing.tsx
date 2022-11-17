const HEAD = (
  <div style={{
    width: "50px",
    height: "50px",
    border: "10px solid black",
    borderRadius: "100%",
    position: "absolute",
    top: "50px",
    right: "-30px"
  }} />
)
const BODY = (
  <div style={{
    width: "10px",
    height: "100px",
    backgroundColor: "black",
    position: "absolute",
    top: "118px",
    right: "0px"
  }} />
)
const RIGHT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "150px",
    right: "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom"
  }} />
)
const LEFT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "150px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "right bottom"
  }} />
)
const RIGHT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "210px",
    right: "-100px",
    rotate: "60deg",
    transformOrigin: "left top"
  }} />
)
const LEFT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "210px",
    right: "10px",
    rotate: "-60deg",
    transformOrigin: "right top"
  }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingsProps = {
  numberOfGuesses: number
}

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingsProps) => {
  return (
    <div style={{ position: "relative"}}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0, 
        backgroundColor: "black", 
        height: "50px", 
        width: "10px"}} />

      <div style={{
        height: "10px", 
        width: "200px", 
        backgroundColor: "black", 
        marginLeft: "120px"}}/>

      <div style={{
        height: "400px", 
        width: "10px", 
        backgroundColor: "black", 
        marginLeft: "120px"}}/>

      <div style={{
        height: "10px", 
        width: "250px", 
        backgroundColor: "black"}} />
    </div>
  )
}
