import axios from 'axios'
import qs from 'qs'
const base = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default function () {
    const vm = this
    const api = {
        user: params => get(`${base}/user`, params), // 获取当前登入用户
        //公司级
        corporateOverview:params => post(`${base}/puws/company/corporateOverview`, qs.stringify(params)), // 公司级页面展示数据
        
        //单项目
        projectinfo: params => post(`${base}/puws/project/chadSudanProjectFind`, qs.stringify(params)), // 单项目信息。
        findContacts:params => post(`${base}/puws/project/findContacts`, qs.stringify(params)), // 项目人员联系方式。
        findManhour:params => post(`${base}/puws/project/findManhour`, qs.stringify(params)), // 项目人员联系方式。
        domesticOrForeign:params => post(`${base}/puws/project/domesticOrForeign`, qs.stringify(params)), // 项目国内外比例统计。
        passRate:params => post(`${base}/puws/project/passRate`, qs.stringify(params)), // 项目首检合格率。
    }

    function get(url, params) {
        return axios.get(url, { params }).then(middleware)
    }

    function post(...args) {
        return axios.post(...args).then(middleware)
    }

    function del(url, params) {
        return axios.delete(url, { params }).then(middleware)
    }

    function put(url, params) {
        return axios.put(url, params).then(middleware)
    }

    function middleware(res) {
        if (res.data.err) {
            vm.$message({
                showClose: true,
                message: res.data.err,
                type: 'error'
            })
        }
        // if (res.data.login) {
        //     location.href = '/admin/login'
        // }
        return res.data
    }
    return api
}