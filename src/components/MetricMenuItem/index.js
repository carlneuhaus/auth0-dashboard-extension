export default (props) => {
  var activeClass = props.isActive ? 'mentric-menu-item--active' : '';
  return <a href="" onClick={props.onClick} className={"metric-menu-item " + activeClass}>{props.name}</a>
}
