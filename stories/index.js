import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from './Button'
import Welcome from './Welcome'
import Header from './Header'
import LoadingRotate from './LoadingRotate'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Header', module)
  .add('default', () => <Header
    showSearch={false}
    showSelects={false}
    navList={[
      {
        name: '数据接入',
        menuClick: () => { window.location.href = 'https://www.baidu.com' },
      },
      {
        name: '数据管理',
        active: true,
        menuClick: () => {},
      },
      {
        name: '数据分析',
        menuClick: () => { window.location.href = 'https://www.baidu.com' },
      },
      {
        name: '系统管理',
        menuClick: () => { window.location.href = 'https://www.baidu.com' },
      },
    ]}
    selects={['时序数据', '关系型', '半结构化', '非结构化']}
    userMessage={{'name': '管理员', navList: ['登出']}}
    userControll={() => { console.log('user controle') }}
    logo={'/logo.png'}
    logoData={{'title': 'KMX Manager'}}
  />)

storiesOf('Loading', module)
  .add('rotate', () => <LoadingRotate />)
