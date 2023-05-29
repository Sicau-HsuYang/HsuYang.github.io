## 序言

在以前，我是对框架及其不感冒的人，我之前之所以秉持这样的态度是认为一个框架可能现在火，以后就不火了，觉得研究框架投入和产出性价比低。

但是，我现在发现我的观点是错误的，而且让我觉得我之前的想法有点儿单纯或者说有点儿急功近利。举个例子，就是比如抖音或者小红书网红给大家推荐一个比较好玩儿的地方，于是我们就去了，但是去到了那个景点之后也就觉得一般般，不过，很有可能，在这个去的过程中，可能会看到一些美丽的风景，遇到一些美好的事情，让我们终生难忘，反而目的地变得不像目的地，而这个过程才是最奇妙的旅途。

现在的我觉得，研究框架其实也是这个感觉。（我一直仰慕`github`上的各种轮子哥，所以我也希望我有朝一日能成为轮子哥），可能读懂源码的运行流程变得不是那么重要，而这个过程中，我们会发现源码里面会依赖各种各样的没听说过的库，每见到一个，对于我们的眼界都是一次不错的扩展。

比如，这个这个过程中，我知道了`monorepo`，知道了`pnpm`可以原生支持`monorepo`的仓库，知道了`jest`测试框架，知道了什么场景下该使用什么`设计模式`，并且知道了可以沿着框架设计者的单元测试用例去理解他的代码设计。

还有一个点，今年的`AI`工具特别的火，尤其是`chatgpt`的出现，完全重新定义了程序开发（凡是遇到不会的问题，几乎都能得到它满意的答案），所以我们一定要时时刻刻将`chatgpt`应用在实际的开发中。（我常挂在嘴边的一句话：**遇事不决，`chatgpt`**）

我准备将`Vue`的各个常用的模块的代码都分析个大概，因此这个路线会拉的比较长，主要将包含`@vue/reactivity`，`@vue/runtime-core`, `@vue/runtime-dom`, `@vue/compiler-*`(多个)等库代码的分析，不要认输，努力坚持，请相信自己一定能完成这一次技术长跑。

从现在开始，我们一起来研究`Vue`的源代码。