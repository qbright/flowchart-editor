enum FlowType {
  START,// 准备作业
  PROCESS,//处理
  FORK,//分支
  JOIN,//合流
  END,//终止
  PATH,//路径
}

export default FlowType;