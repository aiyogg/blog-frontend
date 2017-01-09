/**
 * Created by xiangsongtao on 16/7/27.
 * Description:586f3d705081215c18a15336
 */
//线上配置
let CONFIG;
// if (process.env.NODE_ENV === 'development') {
if (process.env.NODE_ENV === 'production') {
  CONFIG = {
    url: "http://blog.fedt.xin",
    MY_INFO_ID: '586f3d705081215c18a15336',
    MY: '我',
    EMAIL: 'DOTA2mm@163.com'
  };
} else {
  CONFIG = {
    url: "http://blog.fedt.xin",
    //我的信息_id
    MY_INFO_ID: '586f3d705081215c18a15336',
    //我对对评论进行回复的信息
    MY: '我',
    EMAIL: 'DOTA2mm@163.com'
  };
}


// "http://blog.fedt.xin/api/user/586f3d705081215c18a15336".
//接口API根地址
const url = CONFIG.url;
//我的信息_id
const MY_INFO_ID = CONFIG.MY_INFO_ID;
//我对对评论进行回复的信息
const MY = CONFIG.MY;
const EMAIL = CONFIG.EMAIL;


module.exports = {
  /**
   * 通用状态码
   * */

  SYS_ERR: 'SYS_ERR', // api请求系统错误


  /**
   * 用户、登录相关
   * */
  MY_INFO_ID: MY_INFO_ID,
  MY: MY,
  EMAIL: EMAIL,
  //登录
  login: `${url}/api/login`,
  doLogin: `${url}/api/do_login`,
  //获取我的信息
  getMyInfo: `${url}/api/user/${MY_INFO_ID}`,
  //post 为了安全起见
  getMyInfoWithOriginal: `${url}/api/user/original/${MY_INFO_ID}`,
  postMyInfo: `${url}/api/user`,
  changePassword: `${url}/api/change_password`,
  imgUpload: `${url}/api/imgupload`,
  imgResource: `${url}/uploads/`,

  /**
   * 文章相关
   * */
  //获取最新的十条文章
  ArticleFrom: "0",
  ArticleNum: "10",
  newUpdateArticle: `${url}/api/articles/from_to`,
  //由文章id获取文章详情
  getArticleById: `${url}/api/article/id`,
  //获取文章历史记录
  getArticleHistoryWithStructure: `${url}/api/article_history`,
  //获取文章列表
  getArticleList: `${url}/api/articles`,
  //由文章id获取文章详情(原始markdown版本)
  getRawArticleById: `${url}/api/article/raw/id`,
  //新增(如果传入的_id不存在的电话)-修改文章,
  postArt: `${url}/api/article`,
  //delete 文章
  deleteArt: `${url}/api/article/id`,
  //get 获得文章最新num条+阅读最多Num条+引用次数最多的num条，用于文章详情的
  getArticleTop: `${url}/api/article_top/num`,


  /**
   * 标签相关
   * */
  //获取标签列表(带有结构的)
  getTagsListWithStructure: `${url}/api/tags_with_structure`,
  //由标签id获取文章列表
  getArticlesWithTagId: `${url}/api/article_tag/from_to/id`,
  //获取标签列表(原始)
  getTagsList: `${url}/api/tags`,
  //增加 post
  addTag: `${url}/api/tag`,
  //修改 put
  editTag: `${url}/api/tag`,
  //删除 delete
  deleteTag: `${url}/api/tag/id`,


  /**
   * 获取评论
   * */
  getArticleComments: `${url}/api/article/comments/article_id`,
  changeCommentState: `${url}/api/changeCommentState`,
  getCommentToArticleList: `${url}/api/commentToArticleList`,
  postComment: `${url}/api/comment`,
  //评论已阅读 post
  changeCommentReplyState: `${url}/api/changeCommentReplyState`,
  //评论审核状态 post
  changeCommentAuthState: `${url}/api/changeCommentAuthState`,
  //删除评论 delete
  delComment: `${url}/api/comment/id`,
  //新增评论
  // newComment: `${url}/api/comment`,

  /**
   * 获取统计
   * */
  getTotal: `${url}/api/statistic/total`,
  getChart: `${url}/api/statistic/chart`,
  getMap: `${url}/api/statistic/map`,
  sign: `${url}/api/statistic/sign`,

  /**
   * 音乐列表
   * */
  musicList: [
    {
      coverUrl: 'http://p4.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg?param=260y260',
      musicUrl: 'http://vue-blog.oss-cn-shanghai.aliyuncs.com/music/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83%20-%20%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3',
      name: '告白气球',
      player: '周杰伦',
      album: '周杰伦的床边故事'
    },
    {
      coverUrl: 'http://p3.music.126.net/J8AsjYfu2Ugr7Q4ub0Yv0Q==/43980465123047.jpg?param=260y260',
      musicUrl: 'http://vue-blog.oss-cn-shanghai.aliyuncs.com/music/%E9%80%86%E9%B3%9E%20-%20%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3',
      name: '逆鳞',
      player: '周杰伦',
      album: '十一月的萧邦'
    },
    {
      coverUrl: 'http://p3.music.126.net/uKR6EQ1dLq4i1UBhXmvXtQ==/721279627833133.jpg?param=260y260',
      musicUrl: 'http://vue-blog.oss-cn-shanghai.aliyuncs.com/music/%E4%B9%94%E5%85%8B%E5%8F%94%E5%8F%94%20-%20%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3',
      name: '乔克叔叔',
      player: '周杰伦',
      album: '魔杰座'
    }
  ],
  /**
   * 切换的背景列表
   * */
  imageList: [
    'http://blog.fedt.xin/bg_resource/1.jpg',
    'http://blog.fedt.xin/bg_resource/2.jpg',
    'http://blog.fedt.xin/bg_resource/3.jpg',
    'http://blog.fedt.xin/bg_resource/4.jpg',
    'http://blog.fedt.xin/bg_resource/5.jpg',
    'http://blog.fedt.xin/bg_resource/6.jpg',
    'http://blog.fedt.xin/bg_resource/7.jpg',
    'http://blog.fedt.xin/bg_resource/8.jpg',
    'http://blog.fedt.xin/bg_resource/9.jpg',
    'http://blog.fedt.xin/bg_resource/10.jpg',
    'http://blog.fedt.xin/bg_resource/11.jpg',
    'http://blog.fedt.xin/bg_resource/12.jpg'
  ]

}