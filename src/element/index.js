// 给ElementUI做按需导入配置
import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  Carousel,
  CarouselItem,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Card,
  Steps,
  Step,
  Cascader,
  Container,
  Header,
  Aside,
  Main,
  DatePicker,
  Badge,
  Popover,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message,
  MessageBox,
  Loading,
  Progress,
  // Backtop
} from 'element-ui'

var element = {
  install: function(Vue) {
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$message = Message
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    // Vue.use(Backtop)
    Vue.use(Progress)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Popover)
    Vue.use(Dropdown)
    Vue.use(DatePicker)
    Vue.use(Pagination)
    Vue.use(Dialog)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(Input)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(Switch)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tooltip)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Tag)
    Vue.use(Tree)
    Vue.use(Alert)
    Vue.use(Icon)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Upload)
    Vue.use(Card)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Cascader)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Badge)
  }
}
export default element
