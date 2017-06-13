import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from './Button'
import Welcome from './Welcome'
import Header from './Header'
import headerConfig from './headerConfig'
import LoadingRotate from './LoadingRotate'
import LoadingCirclePop from './LoadingCirclePop'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Header', module)
  .add('default', () => <Header {...headerConfig} />)

storiesOf('Loading', module)
  .add('rotate', () => <LoadingRotate />)
  .add('circle pop', () => <LoadingCirclePop />)
