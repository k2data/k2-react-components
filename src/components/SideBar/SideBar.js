import React from 'react'

type Props = {
  children: React.PropTypes.elem,
  width: React.PropTypes.number,
  list: React.PropTypes.array
}
export default class SideBar extends React.Component {
  props: Props
  constructor (props) {
    super(props)
    this.navClick = this.navClick.bind(this)
  }

  navClick (event) {
    const e = event || window.event
    const target = e.target || e.srcElement
    if (target && target.nodeName.toUpperCase() === 'A') {
      const lists = this.refs.sidebar.getElementsByTagName('li')
      const targetNode = event.target.parentNode
      if (targetNode.childNodes.length === 1) {
        Array.prototype.forEach.call(lists, (li) => {
          li.className = ''
        })
        targetNode.className = 'active'
      } else {
        const current = targetNode.childNodes[1].style.height
        targetNode.childNodes[1].style.height = current === '0px' ? 'auto' : 0
        // const current = targetNode.childNodes[1].style.display
        // // console.info(targetNode.childNodes[1].style.display)
        // targetNode.childNodes[1].style.display = current === 'block' ? 'none' : 'block'
      }
    }
  }

  render () {
    const { children, width, list } = this.props
    return (
      <div className='side_bar' style={{ width: `${width || 140}px` }}>
        {
          children ||
          <div className='side_bar_container'>
            <ul onClick={this.navClick} ref='sidebar'>
              {
                list && list instanceof Array &&
                list.map((nav, index) => {
                  const icon = (target) => {
                    if (!target) {
                      return
                    }
                    if (target.icon) {
                      return target.icon
                    }
                    if (target.img) {
                      return <i className='imgIcon' style={{ background: `url(${target.img}) no-repeat center` }} />
                    }
                  }
                  return nav.href
                    ? <li key={`nav${index}`} className={nav.active ? 'active' : ''}>
                      <a href={nav.href || ''}
                        style={{ pointerEvents: nav.disabled ? 'none' : 'all' }}
                        disabled={nav.disabled || false}>
                        <span>{icon(nav)}</span>
                        {nav.name || ''}
                      </a>
                    </li>
                  : <li key={`nav${index}`} className={nav.active ? 'active' : ''}>
                    <a onClick={nav.onClick || null}
                      style={{ pointerEvents: nav.disabled ? 'none' : 'all' }}
                      disabled={nav.disabled || false}>
                      <span>{icon(nav)}</span>
                      {nav.name || ''}
                    </a>
                    {
                      nav.second && nav.second instanceof Array &&
                      <ul style={{ height: `${nav.toggle ? 'auto' : 0}` }}>
                        {
                          nav.second.map((b, i) => {
                            return <li key={`second${i}`} className={b.active ? 'active' : ''}>
                              <a onClick={b.onClick || null}
                                style={{ pointerEvents: b.disabled ? 'none' : 'all' }}
                                disabled={b.disabled || false}
                                >
                                {b.name}
                              </a>
                            </li>
                          })
                        }
                      </ul>
                    }
                  </li>
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
// style={{ display: `${nav.toggle ? 'block' : 'none'}` }}
