enum TaskSatus {
  NO_START = 0,
  PENDING = 1,
  FINISH = 2,
}

class Processor {
  private callback;

  private taskQueue: any = {}; //数据池
  constructor(callback: any) {
    this.callback = callback;
  }

  public subscribe(key: string, task?: Function, dependencies?: any) {
    //订阅数据结果集
    if (!this.taskQueue[key]) {
      this.taskQueue[key] = {};
    }
    this.taskQueue[key].dependencies = dependencies || [];
    this.taskQueue[key].task = task;
    this.taskQueue[key]["status"] = TaskSatus.NO_START; //每一个请求都有一个返回结果状态标记 0: 未运行， 1: 运行中, 2: 已完成
    this.taskQueue[key]["result"] = null;
  }
  private isCanRun(taskItem: {
    status: TaskSatus;
    dependencies: string | any[];
  }) {
    //判断当前任务是否可以执行
    //第一步：排查状态是否为可运行
    if (taskItem.status != TaskSatus.NO_START) {
      return false;
    }
    //第二步：排查依赖任务对应的结果状态是否就绪
    if (taskItem.dependencies.length > 0) {
      for (let index = 0; index < taskItem.dependencies.length; index++) {
        if (
          !this.taskQueue[taskItem.dependencies[index]] ||
          (this.taskQueue[taskItem.dependencies[index]] &&
            this.taskQueue[taskItem.dependencies[index]].status !=
              TaskSatus.FINISH)
        ) {
          return false;
        }
      }
    }
    return true;
  }
  private buildDependenciesResult(dependencies: string | any[]) {
    let inputParams: any = {};
    for (let index = 0; index < dependencies.length; index++) {
      inputParams[dependencies[index]] =
        this.taskQueue[dependencies[index]].result;
    }
    return inputParams;
  }
  public run() {
    //运行所有任务
    Object.keys(this.taskQueue).map((key) => {
      //判断任务是否可以运行
      if (this.isCanRun(this.taskQueue[key])) {
        //如果可以运行则直接运行
        this.taskQueue[key].status = TaskSatus.PENDING;
        this.taskQueue[key].task(
          this.buildDependenciesResult(this.taskQueue[key].dependencies),
          (result: any) => {
            this.watch(key, result);
          }
        );
      }
    });
  }
  private watch(key: string, result: {}) {
    //监听数据是否全部到位
    let isFinished = true;
    this.taskQueue[key].result = result || {};
    this.taskQueue[key].status = TaskSatus.FINISH;
    console.log(this.taskQueue[key].status, key);
    for (let key in this.taskQueue) {
      if (
        this.taskQueue[key].status == TaskSatus.NO_START ||
        this.taskQueue[key].status == TaskSatus.PENDING
      ) {
        isFinished = false;
        this.run();
        break;
      }
    }
    if (isFinished) {
      this.callback(); //执行最终回调函数
    }
  }
}
export default Processor;
