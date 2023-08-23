import React from 'react';
import { Col, Row } from 'antd';
import Item from 'components/item';
import { Link } from 'react-router-dom';
function CategoryList (props) {

  const category = props.category;
  // const category2 = props.category2;
    return (
        <>
            <Row>
                  <Col span={24} className="home-page-main-content_category_title">Danh mục</Col>
                </Row>
                <Row>                  
                    {/* {category2.slice(0,16).map((info)=> {
                      return (
                            <><img src={window.open(info.image)} alt='hinh_anh'/>
                              <Col key = {info.id} span={3} className="home-page-main-content_category_list">
                                <Link   to={`/category-view/${info.id}`}>
                                  <Item
                                    imageURL={info.image}
                                    itemName={info.name}
                                    width='88px'
                                    height='84px'
                                  />
                                </Link>
                              </Col>
                            </>
                            )
                            })
                      } */}
                      {category.map((info)=> {
                      return (
                              <Col key = {info.id}  span={3} className="home-page-main-content_category_list">
                                <Link  to={`/category-view/${info.id}`}>
                                  <Item
                                    imageURL="https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn"
                                    itemName={info.name}
                                    width='88px'
                                    height='84px'
                                  />
                                </Link>
                              </Col>
                            )
                            })
                      }
                  
                </Row>
        </>
    )
}

export default CategoryList;