(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{355:function(t,v,_){"use strict";_.r(v);var s=_(14),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"排序算法的比较与总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排序算法的比较与总结"}},[t._v("#")]),t._v(" 排序算法的比较与总结")]),t._v(" "),v("h3",{attrs:{id:"规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),v("p",[t._v("排序算法必须原地排序，不能修改数组的引用，只能修改数组内容")]),t._v(" "),v("p",[t._v("排序算法必须向外界提供统一的接口，仅接收一个数组作为参数，不返回任何内容；")]),t._v(" "),v("h3",{attrs:{id:"排序算法的稳定性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排序算法的稳定性"}},[t._v("#")]),t._v(" 排序算法的稳定性")]),t._v(" "),v("p",[t._v("这是一个我们经常提到，但是却又没有怎么留意的问题。什么是排序算法的稳定性呢，就比如现在我们有一堆手牌，\n假设，我现在手里面按顺序有"),v("code",[t._v("梅花6")]),t._v("，"),v("code",[t._v("红桃A")]),t._v("，"),v("code",[t._v("方块6")]),t._v("，"),v("code",[t._v("红桃2")]),t._v("，"),v("code",[t._v("黑桃5")]),t._v("。我们按点数大小（"),v("code",[t._v("Ace")]),t._v("视为 1 点）从小到大进行排序，此时，有两个数值相同的 6，如果说，当我们的排序算法完成之后，"),v("code",[t._v("梅花6")]),t._v("还是排在"),v("code",[t._v("方块6")]),t._v("之前的话，那么我们就可以说这个排序算法是稳定的。什么时候我们才会考虑稳定性呢？就拿刚才的例子举例，我们希望当数值相同时，扑克的花色按最初的相对顺序排列，这时候就需要用一个稳定的排序算法。")]),t._v(" "),v("p",[t._v("比如，现在我们要选出优秀的学生参与奥赛班，我们对学生进行一次摸底考试，根据学生的的成绩排序，然后再根据学生的年纪进行排序，我们就可以选出相同成绩下年级较小的同学参赛，若排序算法不稳定的话，则会导致我们用年龄再次排序时就达不到预期的效果了。如果只是单纯的对成绩排序，那么就不会再有什么想通数组的初始顺序的问题了，所以，系统为我们实现的排序方法，当你在对数字进行排序的时候，一般会采用不稳定的，对对象进行排序的时候，会采用稳定的算法。")]),t._v(" "),v("p",[t._v("但是"),v("strong",[t._v("排序算法的稳定性并不是绝对的")]),t._v("，这取决于你写的排序算法的判别条件，众所周知，插入排序是稳定的排序算法，但是假设我们把代码写成这样：")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("div",{staticClass:"highlight-lines"},[v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("div",{staticClass:"highlighted"},[t._v(" ")]),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br"),v("br")]),v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 对数组进行插入排序\n * @param {Array<number>} arr 需要进行排序的数组\n */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertionSort")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认认为第一个元素已经有序")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//向前找合适的插入位置，退出条件有两种可能，1、找到了合适的插入位置；2、找到了头了")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" cur"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在每次查找插入位置的时候，都将当前元素向后挪一位。")]),t._v("\n      arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      j"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("如果我们把向前插入的条件写成"),v("code",[t._v("arr[j - 1] >= cur")]),t._v("，那么很明显当"),v("code",[t._v("方块6")]),t._v("进行插入的时候，它一定会跑到"),v("code",[t._v("梅花6")]),t._v("的前面去，变成了不稳定的排序算法了。")]),t._v(" "),v("p",[t._v("因此，排序算法的稳定性其实还是一个相对的概念，如果你只要举得出例子证明它，那么它就是稳定或者不稳定的。")]),t._v(" "),v("h3",{attrs:{id:"复杂度、稳定性与额外占用空间比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂度、稳定性与额外占用空间比较"}},[t._v("#")]),t._v(" 复杂度、稳定性与额外占用空间比较")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("排序算法名称")]),t._v(" "),v("th",[t._v("平均算法复杂度")]),t._v(" "),v("th",[t._v("是否稳定")]),t._v(" "),v("th",[t._v("是否额外空间复杂度")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/bubbleSort"}},[t._v("冒泡排序")])]),t._v(" "),v("td",[t._v("O(N²)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/selectionSort"}},[t._v("选择排序")])]),t._v(" "),v("td",[t._v("O(N²)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/insertionSort"}},[t._v("插入排序")])]),t._v(" "),v("td",[t._v("O(N²)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/shellSort"}},[t._v("希尔排序")])]),t._v(" "),v("td",[t._v("O(N*logN)")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/quickSort"}},[t._v("快速排序")])]),t._v(" "),v("td",[t._v("O(N*logN)")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是，平均 O(logN)，最坏 O(N)")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/mergeSort"}},[t._v("归并排序")])]),t._v(" "),v("td",[t._v("O(N*logN)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是，O(N)")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/heapSort"}},[t._v("堆排序")])]),t._v(" "),v("td",[t._v("O(N*logN)")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/bucketSort"}},[t._v("桶排序 ")])]),t._v(" "),v("td",[t._v("O(N+C)，其中 C=N*(logN-logM)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是，O(N+M)，N 为数据的数量级，M 为桶的数量级")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"/data-structure/sort/radixSort"}},[t._v("基数排序")])]),t._v(" "),v("td",[t._v("O(P(N+B))")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是，O(N+M)，N 为数据的数量级，M 为桶的数量级")])])])]),t._v(" "),v("h3",{attrs:{id:"时间比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时间比较"}},[t._v("#")]),t._v(" 时间比较")]),t._v(" "),v("p",[t._v("我们各类的语言底层（如 JS 的"),v("code",[t._v("Array.prototype.sort")]),t._v("）提供的排序算法就是根据不同排序算法的稳定性、时间复杂度、空间复杂度差异，根据待排数据的性质，在三者之间进行取舍，从而实现更加高效的排序算法。")]),t._v(" "),v("p",[t._v("为了让大家直观的体验不同排序算法的差异，我对这些排序算法在 LeetCode 上都依次进行了提交（同一个排序算法 3 次提交，对结果取最接近平均值的那组数据），然后将结果进行了统计，结果如下：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("排序算法名称")]),t._v(" "),v("th",[t._v("执行用时")]),t._v(" "),v("th",[t._v("执行用时击败所有提交区间")]),t._v(" "),v("th",[t._v("内存消耗")]),t._v(" "),v("th",[t._v("内存消耗击败所有提交区间")]),t._v(" "),v("th",[t._v("是否稳定")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("冒泡排序")]),t._v(" "),v("td",[t._v("6036ms")]),t._v(" "),v("td",[t._v("10.62%")]),t._v(" "),v("td",[t._v("50.7MB")]),t._v(" "),v("td",[t._v("89.30%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("选择排序")]),t._v(" "),v("td",[t._v("7100 ms")]),t._v(" "),v("td",[t._v("6.86%")]),t._v(" "),v("td",[t._v("50.7 MB")]),t._v(" "),v("td",[t._v("86.00%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("插入排序")]),t._v(" "),v("td",[t._v("1508 ms")]),t._v(" "),v("td",[t._v("39.15%")]),t._v(" "),v("td",[t._v("50.8 MB")]),t._v(" "),v("td",[t._v("85.80%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("希尔排序")]),t._v(" "),v("td",[t._v("108 ms")]),t._v(" "),v("td",[t._v("95.09%")]),t._v(" "),v("td",[t._v("50.8 MB")]),t._v(" "),v("td",[t._v("85.80%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("朴素快速排序")]),t._v(" "),v("td",[t._v("1512 ms")]),t._v(" "),v("td",[t._v("39.06%")]),t._v(" "),v("td",[t._v("57.5 MB")]),t._v(" "),v("td",[t._v("37.14%")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[t._v("三元取中快速排序")]),t._v(" "),v("td",[t._v("112 ms")]),t._v(" "),v("td",[t._v("91.57%")]),t._v(" "),v("td",[t._v("50.8 MB")]),t._v(" "),v("td",[t._v("83.76%")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[t._v("归并排序（递归版）")]),t._v(" "),v("td",[t._v("620 ms")]),t._v(" "),v("td",[t._v("48.71%")]),t._v(" "),v("td",[t._v("54.2 MB")]),t._v(" "),v("td",[t._v("49.68%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("归并排序（非递归版）")]),t._v(" "),v("td",[t._v("120 ms")]),t._v(" "),v("td",[t._v("83.46%")]),t._v(" "),v("td",[t._v("51.6 MB")]),t._v(" "),v("td",[t._v("63.65%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("堆排序")]),t._v(" "),v("td",[t._v("108 ms")]),t._v(" "),v("td",[t._v("95.09%")]),t._v(" "),v("td",[t._v("50.5 MB")]),t._v(" "),v("td",[t._v("93.77%")]),t._v(" "),v("td",[t._v("否")])]),t._v(" "),v("tr",[v("td",[t._v("桶排序（采用了 10 个桶，每个桶采用直接插入排序）")]),t._v(" "),v("td",[t._v("4140 ms")]),t._v(" "),v("td",[t._v("17.98%")]),t._v(" "),v("td",[t._v("61.4MB")]),t._v(" "),v("td",[t._v("11.93%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("基数排序")]),t._v(" "),v("td",[t._v("108ms")]),t._v(" "),v("td",[t._v("23.01%")]),t._v(" "),v("td",[t._v("57.6MB")]),t._v(" "),v("td",[t._v("8.21%")]),t._v(" "),v("td",[t._v("是")])]),t._v(" "),v("tr",[v("td",[t._v("程序内置排序函数（以 JS 为例）")]),t._v(" "),v("td",[t._v("108 ms")]),t._v(" "),v("td",[t._v("95.09%")]),t._v(" "),v("td",[t._v("50.6 MB")]),t._v(" "),v("td",[t._v("92.65%")]),t._v(" "),v("td",[t._v("不讨论")])])])]),t._v(" "),v("p",[t._v("最后通过这个表格验证了我们的结论，因为语言底层的排序算法通过对不同对数据环境下的数据采用了符合场景的排序算法，速度是最快的。（在 LeetCode 上提交各种排序算法的我，那个小丑竟然是我自己）。有的同学可能会说我学排序算法学了个寂寞，不如直接就用语言提供的排序算法就好啊，其实我们学习是为了掌握理论，为的知道其底层原理，便于解决各种生产中的 bug，是对能力的一种培养。再者，面试官再问你各种排序算法，你心里面也有个谱了吧。")])])}),[],!1,null,null,null);v.default=a.exports}}]);