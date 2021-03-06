import request from '@/utils/request'
import { httpConfig } from '@/config'

const { userApi, commonApi } = httpConfig

const admin = {
  /**
   * permission
   */
  // 权限列表
  permissionList (params) {
    const url = `/permManage`
    return request.get(url, params, userApi)
  },

  // 保存权限
  savePermission (params) {
    const url = `/permManage`
    return request.post(url, params, userApi)
  },

  // 删除权限
  deletePermission (id) {
    const url = `/permManage-del/${id}`
    return request.post(url, {}, userApi)
  },

  // 功能模块
  functionModuleName (params) {
    const url = `/permManage/functionModule`
    return request.get(url, params, userApi)
  },

  /**
   * role
   */
  // 角色列表
  roleList (params) {
    const url = `/role`
    return request.get(url, params, userApi)
  },

  // 角色权限信息
  rolePermissions (params) {
    const url = `/role/update`
    return request.get(url, params, userApi)
  },

  // 添加角色的权限列表
  roleAddPermissions (params) {
    const url = `/perm/list`
    return request.get(url, params, userApi)
  },

  // 保存角色数据
  saveRole (namespaceCode, params) {
    const url = `/role/${namespaceCode}`
    return request.postJson(url, params, userApi)
  },

  /**
   * users
   */
  // 用户列表
  userList (params) {
    const url = `/userManage/page/filter`
    return request.get(url, params, commonApi)
  },

  // 添加教师
  addInstructor (params) {
    const url = `/userManage/instructor/like`
    return request.get(url, params, commonApi)
  },

  // 批量保存
  batchSaveUsers (params) {
    const url = `/userManage/batch/role`
    return request.postJson(url, params, commonApi)
  },

  // 添加角色
  saveUser (params) {
    const url = `/userManage/user`
    return request.post(url, params, userApi)
  },

  // 编辑角色页面的列表
  userInfo (instructorId, params) {
    const url = `/userManage/user/${instructorId}`
    return request.get(url, params, userApi)
  },

  // 管理部门finder
  mangeDepartment (params) {
    const url = `/optionFinder/userManage/department`
    return request.get(url, params, commonApi)
  },

  // 添加管理部门
  addManageDepartment (params) {
    const url = `/userManage/user/dept`
    return request.post(url, params, userApi)
  },

  // 删除上课教师标签
  deleteDepartment (id) {
    const url = `/userManage/user/dept-del/${id}`
    return request.post(url, {}, userApi)
  },

  // 保存可分配角色
  saveAssignablePerms (userId, params) {
    const url = `/userManage/batch/role?userId=${userId}`
    return request.postJson(url, params, userApi)
  },

  // refresh
  refresh (params) {
    const url = `/userManage/user-nameSpace/permission`
    return request.get(url, params, userApi)
  },

  /**
   * announcement
   */
  // 公告列表
  announcementList (params) {
    const url = `/announcement/filter`
    return request.get(url, params)
  },

  // 公告详情
  announcementDetail (announcementId) {
    const url = `/announcement/single/${announcementId}`
    return request.get(url)
  },

  // 下载公告附件
  downloadAttachment (attachmentId) {
    const url = `/single/download?attachmentId=${attachmentId}`
    return request.download(url, {})
  },

  // 删除公告
  deleteAnnouncement (announcementId) {
    const url = `/announcement/single-del/${announcementId}`
    return request.post(url, {})
  },

  // 发布公告
  releaseAnnouncement (params) {
    const url = `/announcement/section/release`
    return request.postJson(url, params)
  },

  // 编辑页的公告发布|保存
  submitAnnouncement (formData) {
    console.log(formData)
    const url = `/announcement/single/save`
    return request.upload(url, formData)
  }
}

export default admin

