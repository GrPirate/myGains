/**
 * 引入svg文件夹下的svg文件（不包含子目录）
 * @param {*} requireContext 
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)