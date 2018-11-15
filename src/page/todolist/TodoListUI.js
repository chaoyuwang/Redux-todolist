import React, { Fragment } from 'react';
import { Row, Col, Button, Input, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (prop) => {
  return(
    <Fragment>
      <Row>
        <Col span={10} offset={6}>
          <Input value={prop.inputValue} onChange={prop.handleChangeInputValue} placeholder="Todo Item" />
        </Col>
        <Col span={2} offset={1}>
          <Button type='primary' onClick={prop.handleAddSubmit}>添 加</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12} offset={6}>
        <List
          bordered
          dataSource={prop.list}
          renderItem={(item, index) => (<List.Item onClick= {()=>prop.handleRemoveItem(index)}>{item}</List.Item>)}
        />
        </Col>
      </Row>
    </Fragment>
  )
}
export default TodoListUI;