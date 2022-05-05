
import './WhiteBlock.css'

export const WhiteBlock = ({
  titleOne,
  titleTwo,
  colorTitleTwo,
  secondWordTitleTwo,
  secondWordTitleTwoColor,
  titleThree,
  titleThreeColor,
  secondWordTitleThree,
  secondWordTitleThreeColor,
  subTitle,
  avatars
}) => {
  return (
    <div className='white-main-block'>
      <div className="white-main-block_inside">
        <div className="WbTitleOne">
          <h1>
            {titleOne}
          </h1>
        </div>
        <div className="WbTitleTwo">
          <h2 style={{color:colorTitleTwo}}>
          {titleTwo}
          </h2>
          <pre>      </pre>
          <h2 style={{color:secondWordTitleTwoColor}}>
          {secondWordTitleTwo}
          </h2>
        </div>
        <div className="WbTitleThree">
          <h2 style={{color:titleThreeColor}}>
            {titleThree}
          </h2>
          <pre>   </pre>
          <h2 style={{color:secondWordTitleThreeColor}}>
            {secondWordTitleThree}
          </h2>
        </div>
        <div className="Wbsubtitle">
          <h3>
            {subTitle}
          </h3>
        </div>
      </div>
      <div className="secondBlock">
        <div className="east-west">
        <div className="east">
          <h2>
            East
          </h2>
        </div>
        <div className="west">
          <h2>
            West
          </h2>
        </div>
        </div>

        <div className="avatar">
          {avatars.map(item =>{
            return(
              <div className='gray-block'>
                <div className='gray-block_inside'>
                  <img src={item.img} alt="" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
