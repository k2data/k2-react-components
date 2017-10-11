import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Select, Row, Col, Icon } from 'antd'
const Option = Select.Option

class Share extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      value: '',
      shares: [],
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.addShare = this.addShare.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setState({ visible: nextProps.loading, loading: nextProps.loading })
    }
    if (nextProps.loading !== this.props.loading && !nextProps.loading) {
      this.setState({ shares: [] })
    }
  }

  showModal () {
    this.setState({ visible: true })
  }

  handleOk () {
    this.props.share && this.props.share(this.state.shares)
  }

  handleCancel () {
    this.setState({ visible: false, shares: [], loading: false })
  }

  handleSelectChange (val) {
    this.setState({ value: val })
  }

  addShare () {
    const filter = (arr) => {
      const seen = new Map()
      return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
    }
    this.setState({ shares: filter(this.state.shares.concat(this.state.value)) })

    console.info(filter(this.state.shares.concat(this.state.value)))
  }

  deleteItem (val) {
    const newArr = this.state.shares.filter(n => n !== val)
    this.setState({ shares: newArr })
  }

  render () {
    const { visible, value, shares } = this.state
    const { title, list, loading, type, size } = this.props
    const item = {
      display: 'block',
      whiteSpace: 'nowarp',
      overflow: 'hidden',
      lineHeight: '20px',
    }
    const text = {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '90%',
      float: 'left',
    }
    const btn = {
      float: 'right',
    }
    const container = {
      maxHeight: '50vh',
      overflow: 'hidden',
      overflowY: 'auto',
    }
    return (
      <span>
        <Button type={type || 'default'} size={size || 'default'} onClick={this.showModal}>
          <Icon type='share-alt' />分享
        </Button>
        <Modal
          title={title || ''}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='100vh'
          footer={[
            <Button key='back' size='small' onClick={this.handleCancel}>取消</Button>,
            <Button key='submit' type='primary' size='small' loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <Row>
            <Col span={8}><div style={{ textAlign: 'right', padding: '10px' }}>分享:</div></Col>
            <Col span={8}>
              <div style={{ padding: '10px' }}>
                <ul style={container}>
                  {
                    shares.map((sh) => {
                      return (<li style={item} key={sh}>
                        <span style={text}>{sh}</span>
                        <a style={btn} onClick={() => { this.deleteItem(sh) }}><Icon type='delete' /></a>
                      </li>)
                    })
                  }
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}><div style={{ textAlign: 'right', padding: '10px' }}>添加分享:</div></Col>
            <Col span={16}>
              <div style={{ padding: '10px' }}>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder='Select a person'
                  optionFilterProp='children'
                  onChange={this.handleSelectChange}
                  value={value}
                  filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    list && list instanceof Array &&
                    list.map((op) => {
                      return <Option value={op} key={op}>{op}</Option>
                    })
                  }
                </Select>
                &nbsp;&nbsp;
                <Button onClick={this.addShare} disabled={!value}><Icon type='plus' />添加</Button>
              </div>
            </Col>
          </Row>
        </Modal>
      </span>
    )
  }
}

Share.propTypes = {
  // form: PropTypes.object,
  list: PropTypes.array,
  share: PropTypes.func,
  title: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
}

export default Share
