import React from 'react'
import Button from "./Button"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./Item.css"

function Item({title,desc,descLink,backgroundImg,leftBtnTxt,
    leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) {
    return (
        <div className="item"
        style= {{
            backgroundImage: `url(${backgroundImg})`
        }}
        >
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Button
                          img="primary" 
                          text={leftBtnLink}
                          link={leftBtnLink} 
                        />
                        {twoButtons && (
                            <Button 
                                img="secondary"
                                text={rightBtnLink}
                                link={rightBtnLink}
                            />
                        )}
                        {first && (
                            <div className="item__expand">
                                <ExpandMoreIcon/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item