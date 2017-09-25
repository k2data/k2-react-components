import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from './Button'
import Welcome from './Welcome'
import Header from './Header'
import Share from './Share'
import { SubMenu, MenuItem, LeftMenu } from './LeftMenu'
import { testValue1, testValue2 } from './headerConfig'
let loading = false
function share (val) {
  loading = true
  console.info(val)
  setTimeout(() => {
    loading = false
  }, 10000)
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Header', module)
  .add('default', () => <Header {...testValue2} />)

storiesOf('LeftMenu', module)
.add('light', () => (<LeftMenu><SubMenu name='一级菜单'> <MenuItem name='二级菜单' /> </SubMenu> </LeftMenu>))
.add('dark', () => (<LeftMenu them='dark'><SubMenu name='一级菜单'> <MenuItem name='二级菜单' /> </SubMenu> </LeftMenu>))

storiesOf('Share', module)
  .add('default', () => <Share
    list={['javascript', 'Node', 'React', 'Vue']}
    share={(val) => { share(val) }}
    title='分享'
    type='primary'
    size='small'
    loading={loading}
  />)
