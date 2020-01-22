import React, { Component } from 'react'
import './index.less'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Comment,
  Avatar,
  Card,
  Timeline,
  // Steps,
  Typography,
  PageHeader,
  Dropdown,
  Button,
  Tag,
  BackTop,
  Drawer
} from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
// const { Step } = Steps
const { Meta } = Card
const { Paragraph } = Typography

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0
        }}
      >
        <Icon
          type="ellipsis"
          style={{
            fontSize: 20,
            verticalAlign: 'top'
          }}
        />
      </Button>
    </Dropdown>
  )
}

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu'
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu'
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu'
  }
]

const IconLink = ({ src, text }) => (
  <a
    href="/"
    style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <img
      style={{
        marginRight: 8
      }}
      src={src}
      alt="start"
    />
    {text}
  </a>
)

const content = (
  <div className="content">
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level
      color system and a product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color
      model, which makes it easier for designers to have a clear psychological
      expectation of color when adjusting colors, as well as facilitate
      communication in teams.
    </Paragraph>
    <Row className="contentLink" type="flex">
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </Row>
  </div>
)

const Detail = ({ children, extraContent }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        style={{
          marginLeft: 80
        }}
      >
        {extraContent}
      </div>
    </Row>
  )
}

const ExampleComment = ({ children }) => (
  <Timeline>
    <Timeline.Item>
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a href="/">Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    </Timeline.Item>
  </Timeline>
)

class Index extends Component {
  state = {
    current: 'mail'
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  state = { visible: false }

  showDrawer = e => {
    this.setState({
      visible: true
    })
    e.preventDefault()
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <Layout className="main" style={{ background: 'transparent' }}>
        <Header
          className="header"
          style={{ height: '48px', background: '#fff' }}
        >
          <Row>
            <Col span={18}>
              <Menu
                style={{ lineHeight: '48px', background: 'transparent' }}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="mail">
                  <Icon type="mail" />
                  Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                  <Icon type="appstore" />
                  Navigation Two
                </Menu.Item>
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon type="setting" />
                      Navigation Three - Submenu
                    </span>
                  }
                >
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                  <a
                    href="https://ant.design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Navigation Four - Link
                  </a>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={6}>
              <Menu
                style={{
                  lineHeight: '48px',
                  background: 'transparent',
                  float: 'right'
                }}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    onClick={this.showDrawer}
                  />
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px', width: '90%', margin: '0 auto' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <Content style={{ padding: '0 50px', width: '90%', margin: '0 auto' }}>
          <Row>
            <Col span={6}>
              <Card
                style={{ width: 250, borderRadius: '20px' }}
                cover={
                  <img
                    alt="example"
                    style={{ borderRadius: '20px 20px 0 0' }}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                  style={{ borderRadius: '20px' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 250, borderRadius: '20px' }}
                cover={
                  <img
                    alt="example"
                    style={{ borderRadius: '20px 20px 0 0' }}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                  style={{ borderRadius: '20px' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 250, borderRadius: '20px' }}
                cover={
                  <img
                    alt="example"
                    style={{ borderRadius: '20px 20px 0 0' }}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                  style={{ borderRadius: '20px' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 250, borderRadius: '20px' }}
                cover={
                  <img
                    alt="example"
                    style={{ borderRadius: '20px 20px 0 0' }}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                  style={{ borderRadius: '20px' }}
                />
              </Card>
            </Col>
          </Row>
          {/* <Steps current={1}>
            <Step title="Finished" description="This is a description."></Step>
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            ></Step>
            <Step title="Waiting" description="This is a description."></Step>
            <Step title="Waiting" description="This is a description."></Step>
          </Steps> */}
        </Content>
        <Content style={{ padding: '0 50px', width: '95%', margin: '0 auto' }}>
          <Row>
            <Col span={18}>
              <Layout style={{ padding: '24px 0', background: 'transparent' }}>
                <Content style={{ background: '#fff', borderRadius: '20px' }}>
                  <Card
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                    style={{ borderRadius: '20px 20px 0 0' }}
                  >
                    <PageHeader
                      title="Title"
                      style={{
                        border: '1px solid rgb(235, 237, 240)'
                      }}
                      subTitle="This is a subtitle"
                      tags={<Tag color="blue">Running</Tag>}
                      extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                          Primary
                        </Button>,
                        <DropdownMenu key="more" />
                      ]}
                      avatar={{
                        src:
                          'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
                      }}
                      breadcrumb={{ routes }}
                    >
                      <Detail
                        extraContent={
                          <img
                            src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                            alt="content"
                          />
                        }
                      >
                        {content}
                      </Detail>
                    </PageHeader>
                  </Card>
                  <div style={{ padding: '24px' }}>
                    <ExampleComment>
                      <ExampleComment />
                      <ExampleComment />
                    </ExampleComment>
                  </div>
                </Content>
              </Layout>
              <Layout style={{ padding: '24px 0', background: 'transparent' }}>
                <Content style={{ background: '#fff', borderRadius: '20px' }}>
                  <Card
                    style={{ borderRadius: '20px 20px 0 0' }}
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                  >
                    <PageHeader
                      title="Title"
                      style={{
                        border: '1px solid rgb(235, 237, 240)'
                      }}
                      subTitle="This is a subtitle"
                      tags={<Tag color="blue">Running</Tag>}
                      extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                          Primary
                        </Button>,
                        <DropdownMenu key="more" />
                      ]}
                      avatar={{
                        src:
                          'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
                      }}
                      breadcrumb={{ routes }}
                    >
                      <Detail
                        extraContent={
                          <img
                            src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                            alt="content"
                          />
                        }
                      >
                        {content}
                      </Detail>
                    </PageHeader>
                  </Card>
                  <div style={{ padding: '24px' }}>
                    <ExampleComment>
                      <ExampleComment />
                      <ExampleComment />
                    </ExampleComment>
                  </div>
                </Content>
              </Layout>
            </Col>

            <Col span={6}>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{
                    background: '#fff',
                    margin: '0 48px 0 0',
                    borderRadius: '20px'
                  }}
                >
                  <Card
                    style={{ borderRadius: '20px' }}
                    cover={
                      <img
                        alt="example"
                        style={{ borderRadius: '20px 20px 0 0' }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Card title"
                      description="This is the description"
                      style={{ borderRadius: '20px' }}
                    />
                  </Card>
                </Sider>
              </Layout>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{
                    background: '#fff',
                    margin: '0 48px 0 0',
                    borderRadius: '20px'
                  }}
                >
                  <Card
                    style={{ borderRadius: '20px' }}
                    cover={
                      <img
                        alt="example"
                        style={{ borderRadius: '20px 20px 0 0' }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Card title"
                      description="This is the description"
                      style={{ borderRadius: '20px' }}
                    />
                  </Card>
                </Sider>
              </Layout>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{
                    background: '#fff',
                    margin: '0 48px 0 0',
                    borderRadius: '20px'
                  }}
                >
                  <Card
                    hoverable
                    style={{ width: 250, borderRadius: '20px' }}
                    cover={
                      <img
                        style={{ borderRadius: '20px 20px 0 0' }}
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Sider>
              </Layout>
            </Col>
          </Row>
        </Content>
        <div>
          <BackTop />
        </div>
        <div>
          <Drawer
            title="user info"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Card
              style={{ width: 200, borderRadius: '20px' }}
              cover={
                <img
                  alt="example"
                  style={{ borderRadius: '20px 20px 0 0' }}
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
                style={{ borderRadius: '20px' }}
              />
            </Card>
          </Drawer>
        </div>
      </Layout>
    )
  }
}

export default Index
