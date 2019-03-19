(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{521:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"doc-value-机制内核级原理深入探秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc-value-机制内核级原理深入探秘","aria-hidden":"true"}},[s._v("#")]),s._v(" doc value 机制内核级原理深入探秘")]),s._v(" "),t("p",[s._v("对于 doc value，我一直以为就类似于 mysql 表数据一样，基于 id 获取的，\n但是看这章节并不是，所以看完还是懵逼状态")]),s._v(" "),t("h2",{attrs:{id:"doc-value原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc-value原理","aria-hidden":"true"}},[s._v("#")]),s._v(" doc value原理")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("index-time生成")]),s._v(" "),t("p",[s._v("PUT/POST的时候，就会生成doc value数据，也就是正排索引")])]),s._v(" "),t("li",[t("p",[s._v("核心原理与倒排索引类似")]),s._v(" "),t("p",[s._v("正排索引也会写入磁盘文件中，os cache 先进行缓存以提升访问 doc value 正排索引的性能\n如果 os cache 内存大小不足够放得下整个正排索引，就会将 doc value 的数据写入磁盘文件中")])]),s._v(" "),t("li",[t("p",[s._v("性能问题：给 jvm 更少内存，64g 服务器给 jvm 最多 16g")]),s._v(" "),t("p",[s._v("es 官方是建议 es 大量是基于 os cache 来进行缓存和提升性能的，不建议用 jvm 内存来进行缓存，\n那样会导致一定的 gc 开销和 oom 问题，所以给 jvm 更少的内存，给 os cache 更大的内存\n以 64g 服务器为例，给 jvm 最多 16g，其他的内存给 os cache\nos cache 可以提升 doc value 和倒排索引的缓存和查询效率")])])]),s._v(" "),t("h2",{attrs:{id:"column-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" column 压缩")]),s._v(" "),t("p",[s._v("比如以下数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("doc1: 550\ndoc2: 550\ndoc3: 500\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("合并相同值 550，doc1 和 doc2 都保留一个 550 的标识即可")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("所有值相同，直接保留单值")])]),s._v(" "),t("li",[t("p",[s._v("少于 256 个值，使用 table encoding 模式（一种压缩方式）")])]),s._v(" "),t("li",[t("p",[s._v("大于 256 个值，看有没有最大公约数，有就除以最大公约数，然后保留这个最大公约数")]),s._v(" "),t("p",[s._v("doc1: 36\ndoc2: 24\n6 --\x3e doc1: 6, doc2: 4 --\x3e 保留一个最大公约数 6 的标识，6 也保存起来")])]),s._v(" "),t("li",[t("p",[s._v("如果没有最大公约数，采取 offset 结合压缩的方式：")])])]),s._v(" "),t("p",[s._v("以上内容，只要明白 doc value 的一个压缩存储，使用层层压缩的方式进行存储的，其他的都太底层了，讲不清")]),s._v(" "),t("h2",{attrs:{id:"disable-doc-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-doc-value","aria-hidden":"true"}},[s._v("#")]),s._v(" disable doc value")]),s._v(" "),t("p",[s._v("如果的确不需要 doc value，比如不需要聚合等操作，那么可以禁用，减少磁盘空间占用")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("PUT my_index\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"my_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"my_field"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"doc_values"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);