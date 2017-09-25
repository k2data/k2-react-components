import { SubMenu, MenuItem, LeftMenu } from '../src/components/LeftMenu'
import '../src/components/LeftMenu/LeftMenu.css'

// demo:
// const LeftMenus = (props) => {
//   let { menu, them } = props
//   them = them || 'light'
//   return (
//     <LeftMenu {...props} >
//       {
//         menu.map((item, index) => (
//           item['subMenu']
//           ? (
//             <SubMenu name={item.name}>
//               {
//                 item.subMenu.map((subItem, subIndex) => (
//                   <MenuItem
//                     icon={(
//                       <div
//                         className={subItem['icon']}
//                         style={{
//                           position: 'absolute',
//                           left: '40px',
//                           width: '14px',
//                           height: '40px',
//                           lineHeight: '40px',
//                           padding: '0',
//                         }}
//                       />
//                     )}
//                     name={subItem['name']}
//                   />
//                 ))
//               }
//             </SubMenu>
//           )
//           : (
//             <MenuItem name={item.name}
//               icon={(
//                 <div
//                   className={item['icon']}
//                   style={{
//                     position: 'absolute',
//                     left: '40px',
//                     width: '14px',
//                     height: '40px',
//                     lineHeight: '40px',
//                     padding: '0',
//                   }}
//                 />
//               )}
//             />
//           )
//         ))
//       }
//     </LeftMenu>
//   )
// }

export { SubMenu, MenuItem, LeftMenu }
